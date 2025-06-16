
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Shield, User } from 'lucide-react';

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  const createdAt = new Date(currentUser.createdAt);
  const isNewUser = (Date.now() - createdAt.getTime()) < 24 * 60 * 60 * 1000; // Less than 24 hours

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {currentUser.name}!
          </h1>
          <p className="text-gray-600">
            Here's an overview of your account and recent activity.
          </p>
        </div>
        {isNewUser && (
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
            New User
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-gray-700">Account Status</CardTitle>
            <Shield className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">Active</div>
            <p className="text-sm text-gray-600">Your account is in good standing</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-gray-700">Member Since</CardTitle>
            <Calendar className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {createdAt.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
            <p className="text-sm text-gray-600">
              {Math.ceil((Date.now() - createdAt.getTime()) / (1000 * 60 * 60 * 24))} days ago
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base font-medium text-gray-700">Last Login</CardTitle>
            <Clock className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">Now</div>
            <p className="text-sm text-gray-600">Current session active</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-600" />
              <span>Profile Information</span>
            </CardTitle>
            <CardDescription>Your account details and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <p className="text-gray-900 mt-1">{currentUser.name}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <p className="text-gray-900 mt-1">{currentUser.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Account ID</label>
                <p className="text-gray-900 mt-1 font-mono text-sm">{currentUser.id}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Registration Date</label>
                <p className="text-gray-900 mt-1">{formatDate(createdAt)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Security Features</h4>
                <p className="text-sm text-gray-600">
                  Your session is protected with localStorage-based authentication. 
                  Remember to log out when using shared computers.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-gray-900 mb-2">Welcome Message</h4>
                <p className="text-sm text-gray-600">
                  {isNewUser 
                    ? "Welcome to our platform! You've successfully created your account and logged in."
                    : "Thanks for being a valued member of our community!"
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
