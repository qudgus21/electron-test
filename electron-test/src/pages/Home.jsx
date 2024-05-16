import React from 'react';

const HomePage = () => (
  <div className="home-page">
    <div className='bg-red-500 h-[200px] text-[100px]'>Welcome {process.env.REACT_APP_HELLO}</div>
  </div>
);

export default HomePage;