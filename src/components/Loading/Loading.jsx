import React, { useState, useEffect } from 'react';

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds loading time

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">

          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 border-4 border-white border-dashed rounded-full animate-rotateme"></div>

        
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;