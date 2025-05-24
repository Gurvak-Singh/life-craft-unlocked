import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-lifecraft-50 to-lifecraft-100 p-6 rounded-xl border border-lifecraft-200">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <h3 className="font-bold text-lg mb-3 text-gray-900">Stay Updated</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Subscribe to our newsletter for new tutorials, tips, and community highlights.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center p-4 bg-white rounded-lg border border-lifecraft-200">
          <CheckCircle className="h-8 w-8 text-lifecraft-500 mx-auto mb-2" />
          <p className="text-lifecraft-600 font-semibold">
            Thanks for subscribing!
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Check your inbox soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifecraft-500 focus:border-lifecraft-500 bg-white text-gray-900 placeholder-gray-500"
              required
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>

          {/* Teal background button with white text as per sitemap.md */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 hover:from-lifecraft-600 hover:to-lifecraft-700 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscribe;
