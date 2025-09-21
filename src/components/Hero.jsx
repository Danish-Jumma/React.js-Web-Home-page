import React from 'react'
import HeroImg from '../assets/images/header-img.png'

function Hero() {
  return (
    <div className="w-full bg-[#f5f7fa]">
      <div className="max-w-[1155px] mx-auto min-h-[550px] flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left mt-8 md:mt-0 md:w-1/2">
          <h2 className="text-[#4d4d4d] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight">
            Lessons and insights <br />
            <span className="text-[#53af4f]">from 8 years</span>
          </h2>

          <p className="text-[#4d4d4d] my-6 md:my-10 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Where to grow your business as a photographer: site or social media?
          </p>

          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-[#53af4f] text-white rounded-[4px] text-[15px] sm:text-[17px] hover:bg-[#469a42] transition-colors duration-200"
          >
            Register
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={HeroImg} 
            alt="Hero" 
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
