import React from 'react'
import Profilesidebar from '../../components/profile/Profilesidebar'
import { Link } from 'react-router-dom'

const Myorders = () => {
  return (
    <div className='flex py-10 mx-2 lg:mx-5 xl:mx-8'>
    <div className='hidden md:block'>
  <Profilesidebar/>
  
    </div>
  <main className='border rounded-sm shadow-md py-4 px-10 mx-auto'>
      {/* <h1 className='text-xl font-medium'>My Orders</h1> */}

      <div className='w-[350px] lg:w-[500px] xl:w-[600px] flex items-center justify-center'>
    <div>
          <h1 className='text-3xl font-bold text-gray-300 mt-20 mb-4'>No Orders</h1>
          <Link to="/"><button className='bg-black text-white ml-4 px-2 py-1.5 text-xl rounded-md'>Shop Now</button></Link>

    </div>
        </div>
        </main>
        </div>
  )
}

export default Myorders