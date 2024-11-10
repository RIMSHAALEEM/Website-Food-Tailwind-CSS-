import React from 'react'
import Image from 'next/image'
import survey from "@/public/survey.png"

const Survey = () => {
  return (
    <div className='container pt-40 pl-10 pb-20'>
        <div className='grid lg:grid-cols-[50%,1fr] gap-20'>
            <div>
                <Image className="w-[100%] h-auto lg:w-auto lg:h-[90vh] rounded-3xl" src={survey} width={1000}
                height={600} alt="survey-image"></Image>
            </div>

            <div className='self-container '>
                <h2 className='text-4xl md:text-6xl font-bold'>Survey</h2>
                <h2 className='text-4xl md:text-6xl font-bold pt-3'>About Our 
                    <span className='text-accent'> Food</span></h2>

                    <p className='text-gray-700 pt-16'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam earum debitis, 
                        dolores voluptatibus sequi mollitia ullam officia, totam, praesentium nisi culpa optio.
                         Eos minus, sed dolore cumque nulla earum!
                    </p>
            </div>
        </div>
      
    </div>
  )
}

export default Survey
