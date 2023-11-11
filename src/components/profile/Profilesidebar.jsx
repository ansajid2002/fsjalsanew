import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import img1 from "/images/advertisement/advertisement1.jpg"
import { Link } from 'react-router-dom'
import profile from "/images/logos/profile.png"
import myorders from "/images/logos/myorders.png"
import notification from "/images/logos/notification.png"
import address from "/images/logos/address.png"
import payments from "/images/logos/payments.png"

const Profilesidebar = () => {
    return (
        <main className='w-[350px]  '>
            <h1>PROFILE</h1>
            <div className='border rounded-lg shadow-lg'>

            <section className=' px-4 py-4 '>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={profile} alt="edit-profile" className='w-[30px] h-[30px] rounded-md' />
                        <Link to="/account"><h2 className='text-xl ml-3 hover:text-gray-100'>Edit Profile</h2></Link>
                    </div>
                    <IoIosArrowForward size={20} color='gray' />
                </div>
            </section>
            <section className='border px-4 py-4 '>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={myorders} alt="edit-profile" className='w-[30px] h-[30px] rounded-md' />
                        <Link to="/myorders"><h2 className='text-xl ml-3'>My Order</h2></Link>
                    </div>
                    <IoIosArrowForward  size={20} color='gray' />
                </div>
            </section>
            <section className='border px-4 py-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={payments} alt="edit-profile" className='w-[30px] h-[30px] rounded-md' />
                        <Link to="/payments"><h2 className='text-xl ml-3'>Payments</h2></Link>
                    </div>
                    <IoIosArrowForward  size={20} color='gray' />
                </div>
            </section>
            <section className='border px-4 py-4'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={notification} alt="edit-profile" className='w-[30px] h-[30px] rounded-md' />
                        <Link to="/notifications"><h2 className='text-xl ml-3'>Notification</h2></Link>
                    </div>
                    <IoIosArrowForward  size={20} color='gray' />
                </div>
            </section>
            <section className='border px-4 py-4  '>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={address} alt="edit-profile" className='w-[30px] h-[30px] rounded-md' />
                        <Link to="/savedaddress"><h2 className='text-xl ml-3'>Address</h2></Link>
                    </div>
                    <IoIosArrowForward color='gray'/>
                </div>
            </section>
            </div>

        </main>
    )
}

export default Profilesidebar