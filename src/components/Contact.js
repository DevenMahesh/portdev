import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#CDF5FD] flex justify-center items-center mt-7p-4 md:text-2xl'>
    <form method='POST' action="https://getform.io/f/fc969442-354a-4545-b3b4-846c24e0c32e" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-700 text-black-300'>Contact</p>
            <p className='text-black-300 py-4'>Submit the form below or shoot me an email - </p>
        </div>
        <input className=' bg-blue-100 p-2' type="text" placeholder='Name' name='name' />
        <input className='  my-4 p-2 bg-blue-100' type="email" placeholder='Email' name='email' />
        <textarea className=' bg-blue-100 p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-black border-black border-2  hover:bg-blue-400 hover:border-blue-400 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
  )
}

export default Contact