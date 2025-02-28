import React from 'react'
import HashTags from './HashTags'
const Cards = ({ product }) => {
    
  return (
    <div className='w-full h-[44vw]  bg-white   flex flex-col justify-between  '>
        <div className='w-full mb-[1.111vw] flex items-center gap-[10px]   px-[10px]'>
           <div className='w-[10px] h-[10px] rounded-full bg-black'></div>
           <p className='font-NeueMontreal text-[1.037vw] leading-[1.556vw] uppercase'>{product.productName}</p>
        </div>
        <div className='w-full overflow-hidden duration-500 hover:scale-95 hover:shadow-xl rounded-xl'>
            <img src={product.imageSrc} alt="product" className='object-cover h-full w-full rounded-xl duration-700 hover:scale-125 ' />
        </div>
        <div className='w-full flex gap-[10px] mt-[1.111vw] '>
            {product.tagNames.map((tag, tagIndex) => (
                <HashTags key={tagIndex} tagName={tag} />
            ))}
        </div>
    </div>
  )
}

export default Cards