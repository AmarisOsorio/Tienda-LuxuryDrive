import React from 'react';

const Title = ({ text, subtitle, center = true, className = "" }) => {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        {text}
      </h1>
      {subtitle && (
        <p className="text-gray-600 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;