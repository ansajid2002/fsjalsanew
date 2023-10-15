import { Input } from 'antd'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {


    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    return (
        <section className='mx-2'>

            <div className="w-full ">
                <div className='mx-auto border  max-w-[420px] p-4 my-10 rounded-lg border-gray-400'>
                    <h1 className='text-base sm:text-xl font-medium text-center'>Create an account and discover the benefits</h1>
                    <p className="text-[12px] sm:text-[14px] my-4">his is the login form containing two lines This is the login form containing two lines his is the login form containing two lines This is the login</p>
                    <div className='mt-4'>
                        <label>First Name</label>
                        <Input type="text" placeholder="Enter your first name" />
                    </div>

                    <div className='mt-4'>
                        <label>Last Name</label>
                        <Input type="text" placeholder="Enter your last name" />
                    </div>

                    <div className='mt-4'>
                        <label>Email</label>
                        <Input type="email" placeholder="Enter your email address" />
                    </div>

                    <div className='mt-4 relative'>
                        <label>Password</label>
                        <Input type={passwordType} placeholder="Enter your password" />
                        <button className="absolute top-8 right-2" onClick={togglePassword}>
                            {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="flex mt-4">
                    <input type="radio" id="signup-agree" name="agree" value="agree" className='w-[16px] h-[16px] mt-1 mr-2'/>
                    <label className='text-[14px] text-gray-500' htmlFor="signup-agree">I agree to the Fashion Jalsa terms of Services and Privacy Policy</label>
                </div>

                    <button
                type="submit"
                className="flex mt-4 mx-auto w-[150px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <Link to="/login">

              <p className='text-center underline mt-2  text-[14px] text-gray-500'> Are you already a member?</p>
              </Link>




                </div>
            </div>
        </section>
    )
}

export default Signup