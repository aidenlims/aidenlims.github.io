import React from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

import image1 from '../assets/story1.jpg';
import image2 from '../assets/story2.jpg';
import image3 from '../assets/story3.jpg';
import image4 from '../assets/story4.jpg';
import image5 from '../assets/story5.jpg';
import image6 from '../assets/story6.jpg';
import image7 from '../assets/story7.jpg';
import image8 from '../assets/story8.jpg';
import image9 from '../assets/story9.jpg';
import image10 from '../assets/story10.jpg';

interface StoryPageProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const StoryPage: React.FC<StoryPageProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext
}) => {
  const storyContent = [
    {
      title: "Once Upon a Time...",
      text: "in a world filled with ordinary moments, something extraordinary was about to unfold. today marks not just another day, but a celebration of the most wonderful couple i know.",
      image: image1,
    },
    {
      title: "365 days",
      text: "365 days spent with the sweetest girl in the whole world. i love you, and my only regret was not dating you earlier (we shld've been together out of the womb)",
      image: image2,
    },
    {
      title: "Memories to Treasure",
      text: "being in a long distance relationship with you has given us these countless precious memories, made with every single second spent with you. thanks for all these happy times!",
      image: image3,
    },
    {
      title: "Your Beautiful Smile",
      text: "being next to you has made me realise how sweet your smile is. seeing you gleam with joy next to me warms my heart every single time. my pretty girl C:",
      image: image4,
    },
    {
      title: "Adventures Together",
      text: "from USS/Lotte World to our boujee dinners, every activity is always so fun. we've explored so much and i can't wait for a life's worth of more.",
      image: image5,
    },
    {
      title: "Your Kind Heart",
      text: "although you whine alot (JK!), you treat me so well and care for me regardless, ur the best. thanks for always being there for me",
      image: image6,
    },
    {
      title: "Our Future",
      text: "as we blow out the candles of our first anniversary, know that i'm looking forward to many many more of these. i can't wait to spend my life with you :D",
      image: image7,
    },
    {
      title: "Grateful for You",
      text: "i'm so grateful that our paths crossed in this big, wide world. having you in my life has genuinley been one of the greatest gifts i could ever ask for.",
      image: image8,
    },
    {
      title: "Meet Again Soon",
      text: "although we just met (it's been years) i'll see you soon ryeo, i promise i'll try my best D: in the mean time u HAVE to try and come as well ok???",
      image: image9,
    },
    {
      title: "Happy Anniversary! 🎉",
      text: "today marks our first anniversary! i'm so happy we've reached this milestone (it was really easy). cheers to our future, i love you ryeo💕 -ur hubs",
      image: image10,
    }
  ];

  const currentStory = storyContent[currentPage - 1];

  // Floating hearts JSX
  const floatingHearts = (
    <div className="absolute inset-0 pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-300 opacity-20 animate-bounce"
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
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4 overflow-hidden">
      {floatingHearts}

      <div className="w-full max-w-4xl mx-auto z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-pink-200">
          {/* Page Counter */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-center py-3">
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          {/* Story Content */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="order-2 md:order-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                  {currentStory.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentStory.text}
                </p>
              </div>

              {/* Image */}
              <div className="order-1 md:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={currentStory.image}
                    alt={`Story page ${currentPage}`}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="bg-pink-50 px-6 md:px-8 py-4 flex justify-between items-center">
            <button
              onClick={onPrevious}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-pink-600 hover:bg-pink-50 shadow-md hover:shadow-lg'
              }`}
            >
              <ChevronLeft size={20} />
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index + 1 === currentPage
                      ? 'bg-pink-500 scale-125'
                      : 'bg-pink-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={onNext}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-md hover:shadow-lg'
              }`}
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
