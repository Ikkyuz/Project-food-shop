import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    useEffect(() => {
        alert('Page not found!');
      }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl mb-4">404 - Page Not Found</h1>
      
      <Link to="/" className="text-blue-500 hover:underline mt-4">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;