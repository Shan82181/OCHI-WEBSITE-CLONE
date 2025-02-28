import React from 'react';
import { useEffect, useState } from 'react';
const EyeIntraction = () => {
    const [rotation,setRotation] = useState(0);
    useEffect(() => {
      window.addEventListener("mousemove",(e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let deltaX = mouseX-window.innerWidth/2;
        let deltaY = mouseY-window.innerHeight/2;
        let angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
        setRotation(angle-180);
      }) 
    })
    
  return (
    <div className="relative eye-interaction w-full">
        <div className='bgimage'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg" alt="" />
        </div>
        <div className='absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] flex gap-[2vw]'>
            <div className=' relative w-[15vw] h-[15vw] bg-white rounded-full'>
                <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-[9.5vw] h-[9.5vw] bg-[#212121] rounded-full'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotation}deg)`}} className='line w-full h-[15px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                        <div className='w-[1.5vw] h-[1.5vw] bg-white rounded-full'></div>
                    </div>
                    <p className='text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>PLAY</p>
                </div>
            </div>
            <div className=' relative w-[15vw] h-[15vw] bg-white rounded-full'>
                <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  w-[9.5vw] h-[9.5vw] bg-[#212121] rounded-full'>
                    <div style={{transform:`translate(-50%,-50%) rotate(${rotation}deg)`}} className='line w-full h-[15px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                        <div className='w-[1.5vw] h-[1.5vw] bg-white rounded-full'></div>
                    </div>
                    <p className='text-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>PLAY</p>
                </div>
            </div>
        </div>

        
    </div>
  );
};

export default EyeIntraction;

