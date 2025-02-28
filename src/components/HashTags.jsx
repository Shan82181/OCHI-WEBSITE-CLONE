import React from 'react'

const HashTags = ({ tagName }) => {
  return (
    <div>
        <button className='relative font-NeueMontreal text-[1.037vw] leading-[1.556vw] flex px-[12px] py-[8px] items-center justify-center  border-[1px] border-[#212121] rounded-full bg-white text-[#212121] transition-all uppercase overflow-hidden duration-700 hover:text-white before:absolute before:h-0 before:w-0 before:-bottom-10  before:rounded-full before:bg-[#212121] before:duration-500 hover:before:ease-in before:ease-out hover:before:h-56 hover:before:w-56  '><span class="relative z-10">{ tagName }</span></button>
    </div>
  )
}

export default HashTags