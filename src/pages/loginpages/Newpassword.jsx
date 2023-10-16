import { Input } from 'antd'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Newpassword = () => {

  const [passwordType, setPasswordType] = useState("password");
  const [confirmpasswordType, setConfirmPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const confirmtogglePassword = () => {
        if (confirmpasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }


  return (
    <section className='mx-2 '>

    <div className="w-full ">
        <div className='mx-auto border  max-w-[420px] p-4 my-10 rounded-lg border-gray-400'>
            <h1 className='text-base sm:text-xl font-medium text-center'>Create New Password</h1>
            <div className='mt-4 relative'>
                        
                        <Input type={passwordType} placeholder="Enter New Password" />
                        <button className="absolute top-2 right-2" onClick={togglePassword}>
                            {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className='mt-4 relative'>
                       
                        <Input type={confirmpasswordType} placeholder="Confirm New Password" />
                        <button className="absolute top-2 right-2" onClick={confirmtogglePassword}>
                            {confirmpasswordType === "password" ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="flex mt-4">
                    <input type="radio" id="signup-agree" name="agree" value="agree" className='w-[16px] h-[16px] mt-1 mr-2'/>
                    <label className='text-[14px] text-gray-500' htmlFor="signup-agree">Remember me</label>
                </div>

                    <button
                type="submit"
                className="flex mt-4 mx-auto w-[130px] justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
            </div>
            </section>
  )
}

export default Newpassword