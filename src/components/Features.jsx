import React from 'react'
import Cards from '../components/Cards'
const Features = () => {
    const products = [
        {
            imageSrc: "	https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
            productName: "Cardboard Spaceship",
            tagNames: ["BRANDED TEMPLATE", "SALES DECK", "SOCIAL MEDIA TEMPLATES"]
            
        },
        {
            imageSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
            productName: "AH2 & Matt Horn",
            tagNames: ["PITCH DECK"]
        },
        {
            imageSrc: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
            productName: "FYDE",
            tagNames: ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"]
        },
        {
          imageSrc: "	https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
          productName: "VISE",
          tagNames: ["AGENCY","COMPANY PRESENTATION"]
      }
    ];
  return (
    <div className='w-full pt-[8vw]'>
      <h2 className='font-NeueMontreal text-[3.852vw] leading-[3.852vw] text-[#212121] mx-[3.704vw] mb-[3.704vw]'>Featured Projects</h2>
      <div className='cardsContainer border-t-[1px] border-[#212121] w-full h-full px-[3.704vw] py-[3.704vw] mb-[3.704vw]'>
        <div className='twoCards w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-y-20 gap-x-[15px]  '>
            {products.map((product, index) => (
                <Cards key={index} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Features

