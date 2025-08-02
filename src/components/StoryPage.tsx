import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import storyImage1 from '../assets/images/story1.jpg';

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
      text: "In a world filled with ordinary moments, something extraordinary was about to unfold. Today marks not just another day, but a celebration of the most wonderful person I know.",
      image: storyImage1,
    },
    {
      title: "A Special Day Begins",
      text: "The sun rose differently today, casting golden rays that seemed to whisper 'Happy Birthday!' Every flower bloomed a little brighter, every bird sang a little sweeter, all in honor of you.",
      image: "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Memories to Treasure",
      text: "I think about all the beautiful memories we've shared together. Every laugh, every adventure, every quiet moment has painted the most colorful story in my heart.",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Your Beautiful Smile",
      text: "Your smile has the power to light up the darkest days and make everything feel possible. It's like having a piece of sunshine that follows you wherever you go.",
      image: "https://images.pexels.com/photos/1322531/pexels-photo-1322531.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Adventures Together",
      text: "From spontaneous road trips to cozy movie nights, every adventure with you becomes a treasured chapter in our story. You make the ordinary feel magical.",
      image: "https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Your Kind Heart",
      text: "Your kindness touches everyone around you. You have this amazing ability to make people feel seen, valued, and loved. The world is brighter because you're in it.",
      image: "https://images.pexels.com/photos/1122865/pexels-photo-1122865.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Dreams and Wishes",
      text: "As you blow out your birthday candles, know that I'm wishing for all your dreams to come true. You deserve every happiness, every success, every beautiful moment life has to offer.",
      image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Grateful for You",
      text: "I'm so grateful that our paths crossed in this big, wide world. Having you in my life is one of the greatest gifts I could ever ask for.",
      image: "https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Happy Birthday! 🎉",
      text: "Today and always, you are celebrated, cherished, and loved beyond measure. May this new year of your life be filled with endless joy, laughter, and all the beautiful things your heart desires. Happy Birthday! 💕",
      image: "https://images.pexels.com/photos/1729807/pexels-photo-1729807.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const currentStory = storyContent[currentPage - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
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