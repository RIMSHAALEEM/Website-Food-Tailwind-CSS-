// "use client";
// import React from 'react'
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from "@/public/logo 1.png"

// const header = () => {
//   return (
//     <div>
//       <nav className="bg-accent  text-white h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 flex flex-col  sm:flex-row justify-between items-center">
//         {/* div for logo side */}
//         <div className='flex items-center space-x-2 mb-4 sm:mb-0 '>
//         <Image className='w-12 h-10 rounded-full' src={logo} alt="logo"></Image>
//           <h1 className='text-2xl sm:text-xl md:text-2xl lg-text-2xl font-semibold text-white'>
//           <Link href="/" className='hover:text-blue-950 font-serif'>SPICE</Link>
            
//           </h1>
          
//         </div>
          
//          {/* div for menu side  */}
//         <div className='w-full sm:w-auto mb-4 sm:mb-0  '>
//           <ul className='flex flex-col sm:flex-row  space-y-3sm:space-y-0 sm:space-x-6 font-serif'>
//             <Link href="/" className='hover:text-blue-950'><li>Home</li></Link>
//             <Link href="/about-us"className='hover:text-blue-950'><li>About Us</li></Link>
//             <Link href="/food"className='hover:text-blue-950'><li>  <fieldset>Food</fieldset></li></Link>
//             <Link href="/services"className='hover:text-blue-950'><li>Services</li></Link>
//             <Link href="/dish"className='hover:text-blue-950'><li>Menu</li></Link>
           
//           </ul>
//         </div>
// {/* 
//         div for signup and login side */}
//         <div className='w-full sm:w-auto'>
//             <ul className='flex flex-col sm:flex-row space-y-0 sm:y-0 sm:space-x-4 font-serif '>
//                 <li><Link href="#!" className='hover:text-blue-950'></Link>LogIn</li>
//                 <li><Link href="#!" className='hover:text-blue-950'></Link>SignUp</li>
//             </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default header







"use client";
import React, { useState } from "react";
import logo from "@/public/logo 1.png"
import Image from "next/image";

const Navbar = () : JSX.Element => {
    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () : void => {
        setisClick(!isClick);
    };
  return (
    <div>
        <nav className='bg-accent '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                        <div className='flex items-center space-x-2 mb-4 sm:mb-0 '>
                        <Image className='w-12 h-10 rounded-full' src={logo} alt="logo"></Image>
                            <a href="/" className='text-white font-serif font-bold text-3xl'>SPICE
                            </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Home
                            </a>

                            <a href="/about-us" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>About
                            </a>

                            <a href="/food" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Food
                            </a>

                            <a href="/dish" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Menu
                            </a>

                            <a href="/services" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Services
                            </a>


                            <button><a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>SignIn
                            </a></button>                            
                        </div>
                    </div>

                    <div className='md:hidden flex items-center'>
                        <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white 
                        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                        onClick={toggleNavbar}>
                            {isClick ? (
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
              </svg>
                            ) :(
                                <svg  className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Home
                            </a>

                            <a href="/about-us" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>About
                            </a>

                            <a href="/food" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Food
                            </a>

                            <a href="/dish" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Menu
                            </a>

                            <a href="/services" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>Services
                            </a>

                            <button><a href="/" className='text-white block hover:bg-white hover:text-black rounded-lg  p-2'>SignIn
                            </a></button>   
                        

                    </div>
                </div>
            )}
        </nav>
      
    </div>
  );
};

export default Navbar;

