import React from 'react'
import { motion } from "framer-motion"
const Marque = () => {
  return (
    <div className='w-full h-[67vh] bg-[#004d43] rounded-tl-3xl rounded-tr-3xl py-[8vw]  overflow-hidden'>
        <div className='textWrapper w-full h-full border-t-[1px] border-b-[1px] border-zinc-400 pt-[10px]  '>
            <div className='w-full flex items-center'>
                <div className='text-white font-FoundersGrotesk whitespace-nowrap h-full flex gap-[3vw] '>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[27.593vw] leading-[14.889vw] font-semibold -tracking-[1vw] '>WE ARE OCHI</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[27.593vw] leading-[14.889vw] font-semibold -tracking-[1vw] '>WE ARE OCHI</motion.h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Marque