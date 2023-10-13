import React from 'react'
import {BsInstagram,BsTwitter,BsSearch,BsHeart,BsCart} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {GrNotification} from "react-icons/gr"
import {VscAccount} from "react-icons/vsc"
import indianflag from  "../assets/india-flag.png"
import fslogoblack from "../assets/fslogo-black.png"
import { Input } from 'antd';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

    const {categoriesList} = useSelector((store) => store.categories)
    // console.log(categoriesList);

  return (
    <div className=' '>
        <div className='bg-black flex justify-between  py-1 px-10'>
            <div className='flex items-center'>
            <div className='mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                <BsInstagram color="black" size={15}/>
               
            </div>
            <div className='mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                <FaFacebookF color="black" size={15}/>
               
            </div>
            <div className=' mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                <BsTwitter color="black" size={15}/>
               
            </div>
            </div>
            <div className='flex space-x-8'>
                <h1 className='text-white text-sm -mt-0.2 font-medium'>Offer : Buy 2 get 1 Free</h1>
                <img src={indianflag} alt="Selected Country" className='w-[30px]'/>
            </div>
        </div>
        <div className='flex items-center justify-between my-1 px-10 '>
            <Link to="/"><img src={fslogoblack} alt="main-logo" className='h-[50px]'/></Link>
            <div className='flex items-center space-x-10'>
            <div className='relative '>
            <Input placeholder="Search here..."  className=' w-[200px]'/>
            <BsSearch className='absolute top-2 right-2'/>
            </div>
            <div className='flex items-center space-x-3'>
            <BsHeart size={18}/>
            <VscAccount size={18}/>
            <GrNotification size={18}/>
            <BsCart size={18}/>

            </div>
            </div>
        </div>
        <div className='border-b bg-gray-50 border-gray-200 py-1'>
        <div className='flex items-center justify-between mx-[15%]' >
            {
                categoriesList.slice(0,10).map((single,index) => {
                    return (
                        <div key={index} className='  '>
                        <button className='  text-[17px] font-normal'><Link to={`/${single.category_name}`}>{single.category_name}</Link></button>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Header