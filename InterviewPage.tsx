import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageCircle, Mic, MicOff, Send, Clock, SkipForward } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  category: string;
  difficulty: string;
}

const InterviewPage: React.FC = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalQuestions] = useState(5);
  const [response, setResponse] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Mock questions - replace with API call
  const questions: Question[] = [
    {
      id: '1',
      text: 'Tell me about yourself and your background in software development.',
      category: 'behavioral',
      difficulty: 'easy'
    },
    {
      id: '2',
      text: 'Describe a challenging project you worked on recently. What made it challenging and how did you overcome the obstacles?',
      category: 'behavioral',
      difficulty: 'medium'
    },
    {
      id: '3',
      text: 'How would you design a scalable web application that can handle millions of users?',
      category: 'technical',
      difficulty: 'hard'
    },
    {
      id: '4',
      text: 'Tell me about a time when you had to work with a difficult team member. How did you handle the situation?',
      category: 'behavioral',
      difficulty: 'medium'
    },
    {
      id: '5',
      text: 'What are your career goals for the next 5 years, and how does this position align with them?',
      category: 'behavioral',
      difficulty: 'easy'
    }
  ];

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion(questions[0]);
    }

    // Timer
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVoiceToggle = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      // In a real implementation, this would stop the speech recognition
      console.log('Stopping voice recording...');
    } else {
      // Start recording
      setIsRecording(true);
      // In a real implementation, this would start speech recognition
      console.log('Starting voice recording...');
    }
  };

  const handleSubmitResponse = async () => {
    if (!response.trim()) return;

    setIsLoading(true);

    // Simulate API call to submit response
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Move to next question or finish interview
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex(prev => prev + 1);
      setCurrentQuestion(questions[questionIndex + 1]);
      setResponse('');
    } else {
      // Interview completed
      navigate(`/feedback/${sessionId}`);
    }

    setIsLoading(false);
  };

  const handleSkipQuestion = () => {
    if (questionIndex < totalQuestions - 1) {
      setQuestionIndex(prev => prev + 1);
      setCurrentQuestion(questions[questionIndex + 1]);
      setResponse('');
    } else {
      navigate(`/feedback/${sessionId}`);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'behavioral':
        return 'bg-blue-100 text-blue-800';
      case 'technical':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AI Interview</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{formatTime(timeElapsed)}</span>
              </div>
              <div className="text-sm text-gray-600">
                Question {questionIndex + 1} of {totalQuestions}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(((questionIndex + 1) / totalQuestions) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(currentQuestion.category)}`}>
              {currentQuestion.category}
            </span>
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getDifficultyColor(currentQuestion.difficulty)}`}>
              {currentQuestion.difficulty}
            </span>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Interview Question</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{currentQuestion.text}</p>
            </div>
          </div>
        </div>

        {/* Response Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Your Response</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleVoiceToggle}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isRecording
                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                <span>{isRecording ? 'Stop Recording' : 'Voice Input'}</span>
              </button>
            </div>
          </div>

          {isRecording && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-700 text-sm font-medium">Recording... Speak clearly into your microphone</span>
              </div>
            </div>
          )}

          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response here or use voice input..."
            className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={isRecording}
          />

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={handleSkipQuestion}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <SkipForward className="h-4 w-4" />
              <span>Skip Question</span>
            </button>

            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">
                {response.length} characters
              </span>
              <button
                onClick={handleSubmitResponse}
                disabled={!response.trim() || isLoading}
                className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                ) : (
                  <Send className="h-4 w-4" />
                )}
                <span>
                  {questionIndex === totalQuestions - 1 ? 'Finish Interview' : 'Next Question'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-2">💡 Interview Tips</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use the STAR method (Situation, Task, Action, Result) for behavioral questions</li>
            <li>• Be specific and provide concrete examples</li>
            <li>• Take your time to think before responding</li>
            <li>• Speak clearly if using voice input</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;