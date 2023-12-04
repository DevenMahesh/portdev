import React from 'react'
import { data } from '../data/data.js'
import { FaGithub} from 'react-icons/fa'


const Work = () => {
    const project = data;
    return (
      <div name='work' className='flex items-center w-full md:h-[2200px] mt-16 sm:mt-32 text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    
          {/* Add significant space at the top for all screens */}
          <div className='pb-16 md:pb-12'>
    
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500'>
              Work
            </p>
            <p className='py-6 text-xl'>Check out some of my recent work!!</p>
          </div>
    
          {/* container for projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    
            {project.map((item, index) => (
              <div key={index} className="relative">
    
                <div className="shadow-md shadow-black w-full h-48 flex items-center hover:scale-110 duration-500">
    
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
    
                  <div className="flex flex-col justify-between ml-2 p-4 bg-[rgba(0,0,0,0.7)] w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity sm:mt-16">
    
                    <p className="font-bold text-lg text-white">{item.name}</p>
    
                    <div className="flex items-center mt-2">
                      <a className='text-white' href={item.github}>
                        <FaGithub className="hover:w-8 hover:h-8 hover:bg-green-300" size={24} />
                      </a>
                    </div>
    
                  </div>
    
                </div>
    
              </div>
            ))}
    
          </div>
    
        </div>
      </div>
    );
    
    
}

export default Work