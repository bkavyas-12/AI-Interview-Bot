import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft, BarChart3, TrendingUp, Target, Clock, Star } from 'lucide-react';

interface FeedbackData {
  sessionId: string;
  overallScore: number;
  categoryScores: {
    [key: string]: number;
  };
  strengths: string[];
  improvements: string[];
  detailedFeedback: {
    questionId: string;
    question: string;
    response: string;
    score: number;
    feedback: string;
  }[];
  duration: number;
  completedAt: string;
}

const FeedbackPage: React.FC = () => {
  const { sessionId } = useParams();
  const [feedback, setFeedback] = useState<FeedbackData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock feedback data - replace with API call
    setTimeout(() => {
      setFeedback({
        sessionId: sessionId || '1',
        overallScore: 82,
        categoryScores: {
          'Communication': 85,
          'Technical Knowledge': 78,
          'Problem Solving': 88,
          'Leadership': 75,
          'Cultural Fit': 90
        },
        strengths: [
          'Clear and articulate communication',
          'Strong problem-solving approach',
          'Good understanding of technical concepts',
          'Positive attitude and enthusiasm'
        ],
        improvements: [
          'Provide more specific examples in behavioral questions',
          'Elaborate on technical implementation details',
          'Practice explaining complex concepts more simply'
        ],
        detailedFeedback: [
          {
            questionId: '1',
            question: 'Tell me about yourself and your background in software development.',
            response: 'I am a software engineer with 3 years of experience...',
            score: 85,
            feedback: 'Good introduction with clear timeline. Consider adding more specific achievements and technologies you\'ve worked with.'
          },
          {
            questionId: '2',
            question: 'Describe a challenging project you worked on recently.',
            response: 'I worked on a microservices architecture project...',
            score: 78,
            feedback: 'Good technical explanation. Try to include more details about the specific challenges faced and how you measured success.'
          }
        ],
        duration: 45,
        completedAt: new Date().toISOString()
      });
      setIsLoading(false);
    }, 1000);
  }, [sessionId]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Feedback not found</h2>
          <p className="text-gray-600 mb-4">The interview session could not be found.</p>
          <Link to="/dashboard" className="text-blue-600 hover:text-blue-700">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Interview Feedback</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Score */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8 text-center">
          <div className="mb-6">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${getScoreBackground(feedback.overallScore)} mb-4`}>
              <span className={`text-3xl font-bold ${getScoreColor(feedback.overallScore)}`}>
                {feedback.overallScore}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Interview Complete!</h1>
            <p className="text-gray-600">
              You completed the interview in {feedback.duration} minutes on{' '}
              {new Date(feedback.completedAt).toLocaleDateString()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="text-xl font-semibold text-gray-900">{feedback.duration} min</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-600">Overall Score</p>
              <p className={`text-xl font-semibold ${getScoreColor(feedback.overallScore)}`}>
                {feedback.overallScore}/100
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-sm text-gray-600">Questions</p>
              <p className="text-xl font-semibold text-gray-900">{feedback.detailedFeedback.length}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Category Scores */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance by Category</h2>
            <div className="space-y-4">
              {Object.entries(feedback.categoryScores).map(([category, score]) => (
                <div key={category}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{category}</span>
                    <span className={`text-sm font-semibold ${getScoreColor(score)}`}>
                      {score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Improvements */}
          <div className="space-y-6">
            {/* Strengths */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">Strengths</h2>
              </div>
              <ul className="space-y-2">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="h-5 w-5 text-orange-600" />
                <h2 className="text-xl font-semibold text-gray-900">Areas for Improvement</h2>
              </div>
              <ul className="space-y-2">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Question Feedback */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Question-by-Question Feedback</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {feedback.detailedFeedback.map((item, index) => (
                <div key={item.questionId} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Question {index + 1}
                      </h3>
                      <p className="text-gray-700 mb-3">{item.question}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBackground(item.score)} ${getScoreColor(item.score)}`}>
                      {item.score}/100
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Your Response:</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 italic">"{item.response}..."</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Feedback:</h4>
                    <p className="text-gray-700">{item.feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/interview/new"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
          >
            Start New Interview
          </Link>
          <Link
            to="/dashboard"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;