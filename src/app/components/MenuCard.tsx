import React from 'react'
import Image from 'next/image';

interface propsType{
    img: string;
    title: string;
    desc: string;
    price: string;
}

const MenuCard:React.FC<propsType> = ({img, desc, price}) => {
  return (
    <div className='flex gap-2 '>
        <Image className="w-[80px] h-[80px] rounded-2xl" src={img} width={80} height={80} alt="dish"></Image>
      
         <div className='space-y-2'>
            <div>
                {/* <h2>{title}</h2> */}
                <p className='text-[14px] text-gray-700 pt-1 '>{desc}</p>
            </div>
            <p className='text-accent'>{price}</p>
         </div>

    </div>
    
  )
}

export default MenuCard
