import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Plus, BarChart3, Clock, Trophy, TrendingUp, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface InterviewSession {
  id: string;
  type: string;
  status: 'completed' | 'in-progress' | 'scheduled';
  score?: number;
  duration: number;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [sessions, setSessions] = useState<InterviewSession[]>([]);
  const [stats, setStats] = useState({
    totalInterviews: 0,
    averageScore: 0,
    totalHours: 0,
    improvementRate: 0
  });

  useEffect(() => {
    // Mock data - replace with actual API calls
    setSessions([
      {
        id: '1',
        type: 'Technical - Software Engineering',
        status: 'completed',
        score: 85,
        duration: 45,
        createdAt: '2024-01-15T10:00:00Z'
      },
      {
        id: '2',
        type: 'Behavioral - Leadership',
        status: 'completed',
        score: 78,
        duration: 30,
        createdAt: '2024-01-14T14:30:00Z'
      },
      {
        id: '3',
        type: 'Technical - System Design',
        status: 'in-progress',
        duration: 0,
        createdAt: '2024-01-16T09:00:00Z'
      }
    ]);

    setStats({
      totalInterviews: 12,
      averageScore: 82,
      totalHours: 8.5,
      improvementRate: 15
    });
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AI Interview Bot</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-700">{user?.firstName} {user?.lastName}</span>
              </div>
              <button
                onClick={logout}
                className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-gray-600">Ready to practice your interview skills today?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Interviews</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalInterviews}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Score</p>
                <p className="text-3xl font-bold text-gray-900">{stats.averageScore}%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Practice Hours</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalHours}h</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Improvement</p>
                <p className="text-3xl font-bold text-gray-900">+{stats.improvementRate}%</p>
              </div>
              <div className="p-3 bg-orange-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  to="/interview/new?type=technical"
                  className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Technical Interview</span>
                  </div>
                  <Plus className="h-5 w-5 text-gray-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/interview/new?type=behavioral"
                  className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-600 rounded-lg">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Behavioral Interview</span>
                  </div>
                  <Plus className="h-5 w-5 text-gray-400 group-hover:text-green-600" />
                </Link>

                <Link
                  to="/interview/new?type=mixed"
                  className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-600 rounded-lg">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">Mixed Interview</span>
                  </div>
                  <Plus className="h-5 w-5 text-gray-400 group-hover:text-purple-600" />
                </Link>
              </div>
            </div>

            {/* Progress Chart Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Overview</h2>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Progress chart will be implemented in Week 4</p>
              </div>
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Interview Sessions</h2>
              </div>
              <div className="p-6">
                {sessions.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No interviews yet</h3>
                    <p className="text-gray-600 mb-6">Start your first interview practice session</p>
                    <Link
                      to="/interview/new"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Start Interview
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sessions.map((session) => (
                      <div
                        key={session.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-medium text-gray-900">{session.type}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(session.status)}`}>
                              {session.status.replace('-', ' ')}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{session.duration} min</span>
                            </span>
                            <span>{new Date(session.createdAt).toLocaleDateString()}</span>
                            {session.score && (
                              <span className={`font-medium ${getScoreColor(session.score)}`}>
                                Score: {session.score}%
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {session.status === 'completed' ? (
                            <Link
                              to={`/feedback/${session.id}`}
                              className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                              View Feedback
                            </Link>
                          ) : session.status === 'in-progress' ? (
                            <Link
                              to={`/interview/${session.id}`}
                              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            >
                              Continue
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;