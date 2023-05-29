import { experiences } from '@/data/experience';
import Image from 'next/image';
const Experience = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-10 text-white '>
      <h1 className='font-bold text-[24px] md:text-[28px]  lg:text-[34px] uppercase border-b tracking-wide cursor-default shadow-sm shadow-black p-2 rounded-2xl'>
        experience
      </h1>
      <div
        id='experience'
        className='grid gap-8 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 md:w-[60%] lg:w-[75%] relative '
      >
        {experiences.data.map((item, index) => (
          <section
            key={index}
            className='relative flex flex-col items-center justify-center gap-4 w-full shadow-2xl shadow-black  border-b  rounded-full py-4 hover:scale-105 duration-150 ease-in-out  active:opacity-60 '
          >
            <h1 className='font-medium text-white text-[16px] md:text-[18px] capitalize'>{item.name}</h1>
            <div className='w-[40px] h-[40px] lg:w-[70px] lg:h-[70px] relative '>
              <Image
                fill
                className='w-full absolute rounded-3xl'
                src={item.imageUrl}
                alt='experience/skills'
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Experience;
