import React, { useState } from 'react';
import { Heart, Lock } from 'lucide-react';

interface LandingPageProps {
  onAuthenticated: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ryeowon2025') {
      setIsAnimating(true);
      setTimeout(() => {
        onAuthenticated();
      }, 800);
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center relative overflow-hidden">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-300 opacity-20 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              fontSize: `${12 + Math.random() * 20}px`,
            }}
          />
        ))}
      </div>

      <div className={`w-full max-w-md px-6 transition-all duration-800 ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-pink-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mb-4 shadow-lg">
              <Lock className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              Happy Birthday!
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enter the secret password to unlock your special surprise
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors bg-white/70 text-gray-800 placeholder-gray-400"
                placeholder="Enter password..."
                required
              />
              {error && (
                <p className="absolute -bottom-6 left-0 text-red-500 text-sm animate-pulse">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Unlock Surprise ✨
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Made with 💕 for someone very special
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;