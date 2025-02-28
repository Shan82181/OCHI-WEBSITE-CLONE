import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";
const HeroSection = () => {
  return (
    <div className='relative h-screen w-full pt-[23vh]  '>
        <div className='textStructure ml-[50px] text-[#212121]'>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
                return(
                    <div className='masker'>
                        <h1 className='font-FoundersGrotesk text-[8.028vw] -tracking-[0.1rem] leading-[6.71vw] font-bold '>{item}</h1>
                    </div>
                )
            })}
        </div>
        <div className='border-t-[0.1px] border-[#212121] mt-[9vw] px-[50px] pt-4 flex justify-between font-NeueMontreal'>
            <p>For Public And Private Companies</p>
            <p>From The First Pitch To IPO</p>
            <div className='start flex gap-1'>
                <div className='px-4 py-2 border-[1px] border-[#212121] rounded-full text-[14px] font-normal leading-[14px] -tracking-[0.05rem]'>START THE PROJECT</div>
                <div className='px-2 py-2 border-[1px] border-[#212121] rounded-full'><HiArrowUpRight /></div>
            </div>
                
            
        </div>
    </div>
  );
};

export default HeroSection;

