import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mic, BarChart3, Users, Star, ArrowRight, Play, Check } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AI Interview Bot</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
              <Link to="/login" className="text-blue-600 hover:text-blue-700 transition-colors">Sign In</Link>
              <Link to="/login?mode=register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Master Your Interview Skills with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  AI-Powered Practice
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get personalized interview practice with our intelligent bot. Receive real-time feedback, 
                improve your responses, and land your dream job with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/login?mode=register" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg font-medium"
                >
                  <span>Start Practicing Free</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 text-lg font-medium">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              <div className="flex items-center space-x-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-500">Interviews Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-500">User Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-full"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Interview Assistant</h3>
                    <div className="flex items-center space-x-1 text-sm text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                    <p className="text-sm text-gray-800">Hello! I'm your AI interview coach. Ready to practice?</p>
                  </div>
                  <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs ml-auto">
                    <p className="text-sm">Yes, let's start with software engineering questions.</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                    <p className="text-sm text-gray-800">Great! Tell me about a challenging project you've worked on recently.</p>
                  </div>
                  <div className="flex space-x-1 p-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Interview Success</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides everything you need to excel in your interviews
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'AI-Powered Questions',
                description: 'Get personalized interview questions tailored to your industry and experience level'
              },
              {
                icon: Mic,
                title: 'Voice & Text Input',
                description: 'Practice with voice responses or type your answers - whatever feels more comfortable'
              },
              {
                icon: BarChart3,
                title: 'Real-time Feedback',
                description: 'Receive instant analysis of your responses with detailed scoring and improvement tips'
              },
              {
                icon: Users,
                title: 'Performance Tracking',
                description: 'Monitor your progress over time with detailed analytics and performance insights'
              },
              {
                icon: MessageCircle,
                title: 'Smart Analysis',
                description: 'Advanced NLP algorithms analyze your communication skills, confidence, and technical knowledge'
              },
              {
                icon: Check,
                title: 'Privacy First',
                description: 'Your interview data is encrypted and secure. Practice with confidence knowing your privacy is protected'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes and begin improving your interview skills immediately
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Create Your Profile',
                description: 'Sign up and tell us about your background, target role, and experience level'
              },
              {
                step: '2',
                title: 'Choose Interview Type',
                description: 'Select from technical, behavioral, or industry-specific interview formats'
              },
              {
                step: '3',
                title: 'Practice & Get Feedback',
                description: 'Answer AI-generated questions and receive instant, detailed feedback on your responses'
              },
              {
                step: '4',
                title: 'Track Your Progress',
                description: 'Monitor your improvement over time and identify areas for continued growth'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {step.step}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who've improved their interview skills
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Software Engineer at Google',
                content: 'The AI Interview Bot helped me identify my weak points and practice until I felt confident. I landed my dream job at a Fortune 500 company!'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Product Manager at Microsoft',
                content: 'The real-time feedback was invaluable. I could see exactly where I needed to improve and track my progress over time.'
              },
              {
                name: 'Emily Johnson',
                role: 'UX Designer at Adobe',
                content: 'As someone with interview anxiety, the ability to practice in a judgment-free environment was exactly what I needed.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Ace Your Next Interview?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful candidates who've improved their interview skills with our AI-powered platform
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Link 
              to="/login?mode=register" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Start Your Free Trial
            </Link>
            <div className="flex items-center space-x-2 text-sm opacity-80">
              <Check className="h-4 w-4" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">AI Interview Bot</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering candidates to succeed in their interviews through AI-powered practice and feedback.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#features" className="block hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="block hover:text-white transition-colors">How It Works</a>
                <Link to="/login" className="block hover:text-white transition-colors">Get Started</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <a href="mailto:support@aiinterviewbot.com" className="block hover:text-white transition-colors">Contact</a>
                <a href="/help" className="block hover:text-white transition-colors">Help Center</a>
                <a href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Interview Bot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;