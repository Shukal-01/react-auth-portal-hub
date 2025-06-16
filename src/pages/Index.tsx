
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User, ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Secure Auth Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience seamless authentication with our modern, secure login system. 
            Built with React.js and designed for optimal user experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900">Secure Authentication</CardTitle>
                <CardDescription>
                  Advanced security features with form validation and encrypted storage
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900">User Dashboard</CardTitle>
                <CardDescription>
                  Personalized dashboard with protected routes and session management
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-white shadow-xl border-gray-200 max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Get Started</CardTitle>
              <CardDescription>
                {isLoggedIn 
                  ? "Welcome back! Access your dashboard below."
                  : "Choose an option below to access your account"
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoggedIn ? (
                <Button
                  onClick={() => navigate('/dashboard')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                  size="lg"
                >
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <>
                  <Button
                    onClick={() => navigate('/login')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium"
                    size="lg"
                  >
                    Login to Account
                  </Button>
                  <Button
                    onClick={() => navigate('/signup')}
                    variant="outline"
                    className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 py-3 text-lg font-medium"
                    size="lg"
                  >
                    Create New Account
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
