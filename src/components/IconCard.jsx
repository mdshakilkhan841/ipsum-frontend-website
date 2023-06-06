import React from 'react';

export const IconCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center h-32 w-32 rounded-2xl' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        {props.children}
    </div>
  );
};

export const IconCardRound = (props) => {
  return (
    <div className='flex flex-col justify-center items-center h-32 w-32 rounded-full' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        {props.children}
    </div>
  );
};
