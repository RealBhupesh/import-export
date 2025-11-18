"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-ocean-blue to-business-navy rounded-2xl p-8 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-3">
          Stay Updated with Trade Insights
        </h3>
        <p className="text-lg opacity-90 mb-8">
          Get weekly export-import tips, market trends, and exclusive offers
        </p>

        {!subscribed ? (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 outline-none"
                required
              />
              <button
                type="submit"
                className="bg-maharashtra-saffron text-white px-8 py-4 rounded-lg font-semibold hover:bg-container-orange transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 5,000+ businesses. Unsubscribe anytime.
            </p>
          </form>
        ) : (
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto animate-slide-up">
            <CheckCircle className="w-12 h-12 mx-auto mb-3 text-success-green" />
            <p className="text-lg font-semibold">
              Successfully Subscribed!
            </p>
            <p className="text-sm opacity-90 mt-2">
              Check your email for confirmation
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
