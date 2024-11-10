import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import {BsTwitter, BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='container pt-10 pb-10 pr-10 pl-10 bg-accent ' >
        <div className='grid md:grid-cols-3 gap-16 items-center '>
            <div className='space-y-4 '>
                <h2 className='taxt-xl font-bold text-white '>About Us</h2>
                <p className='leading-[1.8] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Reiciendis obcaecati porro dolor? Perspiciatis, dolore quidem sapiente soluta 
                     magnam iusto vero est, libero omnis alias incidunt aut voluptatem, quod cum
                      voluptates!</p>
            </div>

            <div className='space-y-4'>
                <h2 className='text-xl font-bold text-white'>The Restaurant</h2>
                <ul className='space-y-2 text-white'>
                    <li>About Us</li>
                    <li>Chefs</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <div className='flex gap-8 text-white text-2xl pt-16'>
                    <FaFacebook/>
                    <BsTwitter/>
                    <BsPinterest/>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
