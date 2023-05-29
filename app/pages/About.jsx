import Image from 'next/image';
import React from 'react';

const About = () => {
  const versiMoblie = true;
  return (
    <div
      id='about'
      className='flex flex-col-reverse md:flex-row relative text-white md:gap-20 gap-10 mt-10'
    >
      {versiMoblie && (
        <div className='flex flex-row gap-10 items-center md:hidden mt-8 text-white '>
          <div className='button_gradient py-2 w-[140px] text-[15px] flex items-center justify-center rounded-2xl active:scale-95 ease-out duration-150 font-medium '>
            <button>HERE ME</button>
          </div>
          <div className=' button_gradient  w-[120px] p-1 h-[45px] flex items-center justify-center rounded-2xl active:scale-95 ease-out duration-150 font-medium'>
            <button className='w-full h-full rounded-xl bg-[#0F152E] text-[15px]  '>RESUME</button>
          </div>
        </div>
      )}
      <div className=' w-[208px] h-[300px] left-10 md:left-0 md:w-[408px] md:h-[300px] lg:w-[50%] lg:h-[400px] relative mt-7 '>
        <Image
          fill
          className='w-full   absolute z-20 rounded-md'
          src='/assets/foto/gambar1.jpeg'
          alt='profile/web'
        />
        <div className=' bg-[#0F152E] absolute  w-[193px] h-[283px] md:w-[214px] md:h-[284px] lg:w-[316px] lg:h-[370px] top-10 left-10  md:left-12 md:top-12 lg:left-14 lg:top-14 z-10 rounded-md' />
        <div className='bg-[#4b9bff] absolute w-[208px] h-[300px] md:w-[232px] md:h-[300px] lg:w-[346px]  lg:h-[400px]   left-8 top-8 md:left-10 md:top-10 z-0 rounded-md ' />
      </div>
      <div className='w-full relative mt-5 flex flex-col justify-center md:ml-10 gap-10'>
        <h1 className='text-[24px] md:text-[28px] lg:text-[32px] font-semibold shadow-sm shadow-black p-2 rounded-2xl border-b w-[60%] md:w-[50%] lg:w-[32%] text-center'>
          ABOUT ME
        </h1>
        <p className='text-justify flex items-end text-slate-300  text-[16px] md:text-[18px] lg:text-[20px] '>
          I am a self-taught programmer who is passionate and loves the world of technology. Through self-exploration and diligent research, I have
          developed full skills as a full-stack developer. I am committed to continuous learning and keeping up with the latest technological
          advancements. Although I don&apost have any official projects yet, I have created a personal website based on tutorials I found on YouTube.
          I am always enthusiastic about creating creative solutions and providing optimal user experiences.
        </p>
        <div className='md:flex flex-row gap-10 items-center hidden'>
          <div className='button_gradient text-[15px] py-4 w-[140px] flex items-center justify-center rounded-2xl active:scale-95 ease-in duration-150 font-semibold '>
            <button>HERE ME</button>
          </div>
          <div className=' button_gradient  text-[15px] w-[140px] p-1 h-[55px] flex items-center justify-center rounded-2xl active:scale-95 ease-out duration-150 font-semibold'>
            <button className='w-full h-full rounded-xl bg-[#0F152E]  '>RESUME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
