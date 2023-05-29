'use client';
import { useRouter } from 'next/router';
import { portofolio } from '../../data/portofolio';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const Portofolio = () => {
  return (
    <div
      id='portofolio'
      className=' relative text-white my-10'
    >
      <div className='flex items-center justify-center '>
        <h1 className='font-bold text-[24px] md:text-[34px] px-2 uppercase border-b tracking-wide cursor-default shadow-sm shadow-black p-2 rounded-2xl '>
          Portofolio
        </h1>
      </div>
      {portofolio.data.map((item, index) => (
        <div
          key={index}
          className={
            index % 2 === 0
              ? 'relative flex flex-col-reverse md:flex-row-reverse grid-cols-2 md:gap-10  mt-8 md:mt-0 items-center justify-center'
              : 'relative flex flex-col-reverse md:flex-row grid-cols-2 md:gap-10  mt-8 md:mt-0 items-center justify-center'
          }
        >
          <div
            className={
              index % 2 !== 0
                ? 'relative w-full h-[280px] flex left-4 md:left-0  justify-center md:justify-center '
                : 'relative w-full h-[280px] flex left-4 md:left-0  justify-center md:justify-end '
            }
          >
            <div className='relative w-[247px] h-[180px] md:w-[380px] md:h-[220px] lg:w-[85%] lg:h-full hover:scale-105 duration-150 ease-in'>
              <Image
                fill
                className='w-full h-full absolute rounded-md z-20'
                src={item.imgUrl}
                alt='portofolio/web'
              />
              <div className=' bg-[#0F152E] absolute w-[232px] h-[165px]  md:w-[365px] md:h-[205px] lg:w-[456px] lg:h-[260px] top-8 right-8 md:top-10 md:right-10 lg:top-12 lg:right-12  z-10 rounded-md ' />
              <div className='bg-[#4b9bff] absolute  w-[247px] h-[180px] md:w-[380px] md:h-[220px] lg:w-[476px] lg:h-[280px] top-6 right-6 md:top-8 md:right-8 lg:top-10 lg:right-10  rounded-md z-0 ' />
            </div>
          </div>
          <span className='  mt-4 mb-6 gap-4 text-slate-500 active:scale-95 w-[120px] ease-in duration-150 md:hidden '>
            <Link
              href={item.link}
              target='_blank'
              className='flex items-center justify-center'
            >
              <button>show link</button>
              <BsArrowRight />
            </Link>
          </span>
          <div className='relative w-full  py-8 text-justify flex flex-col gap-4 items-start'>
            <h1 className='font-semibold text-[#4b9bff] opacity-80 cursor-default text-[28px] uppercase'>{item.name}</h1>
            <h1 className='font-semibold  text-center text-[20px] md:text-[22px] lg:text-[24px] shadow-md shadow-slate-800 rounded-lg p-2 cursor-pointer hover:scale-105 duration-150 ease-in-out capitalize'>
              {item.title}
            </h1>
            <p className='text-slate-400 mt-4 text-[16px] md:text-[18px] lg:text-[20px]'>
              {item.description}
              <span className='md:flex  mt-4 gap-4 text-slate-500 active:scale-95 w-[120px] text-[16px] md:text-[18px] lg:text-[20px] ease-in duration-150 hidden'>
                <Link
                  href={item.link}
                  target='_blank'
                  className='flex items-center'
                >
                  <button>show link</button>
                  <BsArrowRight />
                </Link>
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portofolio;
