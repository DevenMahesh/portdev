import React from 'react'
import { data } from '../data/data.js'
import { FaGithub} from 'react-icons/fa'


const Work = () => {
    const project = data;
  return (
    <div name='work' className='w-full md:h-[2200px] text-gray-300 bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500'>
          Work
        </p>
        <p className='py-6 text-xl' > Check out some of my recent work!!</p>
      </div>

{/* container for projects */}
<div className="w-full sm:grid grid-cols-1 gap-4 h-screen">
  {project.map((item, index) => (
    <div key={index} className="relative">
      <div className="shadow-md shadow-black w-full h-32 sm:h-40 lg:h-48 flex items-center hover:scale-110 duration-500">
        <img src={item.image} alt="" className="sm:w-60 lg:w-100 h-full object-cover" />
        <div className="flex flex-col justify-between ml-2">
          <p className="font-bold text-base sm:text-lg lg:text-xl text-gray-300">{item.name}</p>
          <div className="flex items-center mt-2 ml-50">
            <a className='text-gray-300' href={item.github} >
              <FaGithub className="hover:w-[40px] hover:bg-green-300"size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
  )
}

export default Work