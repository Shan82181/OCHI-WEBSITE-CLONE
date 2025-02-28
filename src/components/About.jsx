import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";

const About = () => {
  return (
    <div className='w-full text-[#212121] font-NeueMontreal bg-[#cdea68] relative rounded-tl-3xl rounded-tr-3xl '>
        <div className='w-full pt-[6vw] pl-[3.704vw] pr-[10vw] pb-[4vw]'>
            <p className=' text-[3.852vw] leading-[3.853vw]'>
                Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
            </p>
        </div>
        <div className='w-full pb-[4vw] pt-[1.111vw] px-[3.704vw] border-t-[1px] border-[#212121] relative flex '>
            <div className='relative w-[50%]'>
                <h1 className='text-[3.852vw] mb-[1.481vw]'>Our Approach:</h1>
                <div className='py-[8.1px] pl-[24.003px] rounded-full w-[164.7px] flex items-center gap-[10px] text-white bg-[#212121]'>
                    <p>READ MORE</p>
                    <div className='px-2 py-2  rounded-full bg-white text-black'><HiArrowUpRight/></div>
                </div>
            </div>
            <div className='relative w-[50%] '>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" className='w-[49.111vw] rounded-[10px]' />
            </div>
        </div>
    </div>
  );
};

export default About;
