import React, { useState } from 'react';
import { PrimaryButton } from '@/components/ui/shared';

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
    <div className="bg-red-50 p-6 rounded-lg">
      <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
      <p className="text-gray-600 text-sm mb-4">
        Subscribe to our newsletter for new tutorials, tips, and community highlights.
      </p>
      
      {isSubmitted ? (
        <div className="text-green-600 py-2">
          Thanks for subscribing! Check your inbox soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>
          <PrimaryButton 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </PrimaryButton>
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscribe;
