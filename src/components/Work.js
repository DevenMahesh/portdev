import React from 'react'
import { data } from '../data/data.js'
import { FaGithub} from 'react-icons/fa'


const Work = () => {
    const project = data;
    return (
      <div name='work' className='w-full md:h-screen pb-20 text-black-300 bg-[#CDF5FD]'>
      <div className='max-w-[1000px] mx-auto p-4 pt-[200px] flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-50'>
          <p className='text-4xl font-bold inline border-b-4 text-black-300 border-blue-700'>
          Work
        </p>
        <p className='py-6 text-xl'>Check out some of my recent work!!</p>
      </div>

      {/* container for projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-6">

        {project.map((item, index) => (
          <div key={index} className="relative sm:w-1/2 md:w-full">

            <div className="shadow-md shadow-black w-full h-48 flex items-center hover:scale-110 duration-500">

              <img src={item.image} alt="" className="w-full h-full md:w-full object-cover" />

              <div className="flex flex-col justify-between ml-2 p-4 bg-[rgba(0,0,0,0.7)] w-[100%] h-[100%] absolute top-0 left-[-8px] opacity-100 ">

                <p className="font-bold text-lg text-[#98E4FF]">{item.name}</p>

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