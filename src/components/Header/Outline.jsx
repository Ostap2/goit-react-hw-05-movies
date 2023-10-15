import React from 'react';

const Outline = ({ children }) => {
  return (
    <div className='outline' tabIndex={0}>
      {children}
    </div>
  );
};

export default Outline;
