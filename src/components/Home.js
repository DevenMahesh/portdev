import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
         
         <div className="max-w-[1000px]  mx-auto px-8 flex flex-col justify-center h-full">
            <p className=" mb-[10px] font-bold text-purple-500">Hey, my name is </p>
            <h1 className=" mb-[10px] text-4xl sm:text-7xl font-bold text-purple-100">Deven Mahesh Asodekar</h1>
            <h2 className="mb-[10px] text-4xl sm:text-7xl font-bold text-gray-400">I'm a full-stack developer.</h2>
            <p className=" mb-[20px] font-bold text-gray-400">As a final year Computer Science student I am highly motivated and
dedicated to continuously improving my skills. My goal is to simplify the complexities of our world. I work well in teams. Have a talent, for
understanding technical environments. I am eager to learn from engineers and bridge the gap, between knowledge and real world
industry dynamics.</p>
         
         <div>
         <Link to='about' smooth={true} duration={500}>
          
            <button className=" font-bold group text-white border-2 px-6 py-3 flex items-center hover:bg-purple-500 hover:border-purple-500">View Work 
            <span className="group-hover:rotate-90 duration-300"> <HiArrowNarrowRight className="ml-3"/> </span></button>
            </Link>
         </div>
         </div>
        </div>
  )
}

export default Home