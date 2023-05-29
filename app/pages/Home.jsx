import React from 'react';

const Home = () => {
  return (
    <div
      id='home'
      className='flex flex-col gap-6 overflow-x-hidden '
    >
      <h1 className='text-white text-[50px] font-style font-black tracking-wider leading-6 md:leading-10 lg:leading-[50px]'>
        <span className='text-[#878CA1] text-[28px] md:text-[32px] lg:text-[60px]'>i&apos;m a </span>
        <br className='hidden md:flex' />
        <span className='text-[28px] md:text-[50px] lg:text-[80px]'>FULL STACK</span> <br className='hidden md:flex' />
        <span className='text-[28px] md:text-[50px] lg:text-[80px]'>SOFTWARE</span> <br className='hidden md:flex' />
        <span className='flex'>
          <p className='text-[28px] md:text-[40px] lg:text-[80px]'>DEVELOPER</p>
          <p className='w-2 h-2 md:w-4 md:h-4 bg-[#4b9bff] relative left-1 top-3 md:left-1 md:top-5 z-0'></p>{' '}
        </span>
      </h1>
      <button className='button_gradient font-semibold w-[170px] h-[40px]  md:w-[200px] md:h-[50px] text-[13px] md:text-[14px] rounded-lg duration-150 ease-in active:scale-95 text-white'>
        Previous Projects
      </button>
    </div>
  );
};

export default Home;
