import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import StoryPage from './components/StoryPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isAuthenticated) return;
      
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAuthenticated, currentPage, totalPages]);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  if (!isAuthenticated) {
    return <LandingPage onAuthenticated={handleAuthentication} />;
  }

  return (
    <StoryPage
      currentPage={currentPage}
      totalPages={totalPages}
      onPrevious={handlePrevious}
      onNext={handleNext}
    />
  );
}

export default App;