import React, { useRef, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button, Modal } from 'antd'


const Forgetpassword = () => {
    const [value, setValue] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [inputValues, setInputValues] = useState(['', '', '', '']);
  // const isModalOpen = true; // Make sure to set your modal open state appropriately

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    if (value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (value === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const areAllInputsFilled = inputValues.every(value => value.length === 1);
  

  return (
    <section className='mx-2'>

    <div className="w-full ">
        <div className='mx-auto border  max-w-[380px] p-4 my-10 rounded-lg border-gray-400'>
        <h1 className='text-base sm:text-xl font-medium text-center'>Forget your Password?</h1>
        <p className="text-[12px] sm:text-[14px] my-4">Enter your Email and Phone number and recover your account</p>
        <input
        placeholder='Enter your Email'
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-0 sm:text-sm sm:leading-6 pl-2"
                />

        <div className='flex items-center my-3  '>
            <span className='w-[30%] md:w-[40%] border h-0.5 border-gray-300'></span><h1 className='w-[45%]  text-center text-sm'>Or continue with</h1><span className='w-[30%] md:w-[40%] border h-0.5 border-gray-300'></span>
            </div>
        
        
            <PhoneInput
        placeholder="Enter phone number"
        type="tel"
        value={value}
        onChange={setValue}
        className=' flex  w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-0 sm:text-sm sm:leading-6 pl-2'
        />
        
        <div className='w-full'>
        <button
        onClick={showModal}
                type="submit"
                className="mt-4 ml-auto  flex flex-end rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Send OTP
              </button>
              <Modal title="Login using OTP" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className='mt-24'>
              <p className='text-[14px] text-gray-500'>Code has been sent to 91*********314</p>
              <div className="flex mt-4">
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-md text-center"
            value={inputValues[index]}
            onInput={(e) => {
              e.target.value = e.target.value.slice(0, 1); // Limit input to 1 character
              handleInputChange(index, e);
            }}
          />
        ))}
      </div>
      <Button
      className='bg-indigo-600 mt-4'
        type="primary"
        disabled={!areAllInputsFilled}
        // onClick={handleLogin}
      >
        Login
      </Button>
      </Modal>
                </div>
        </div>
    </div>
                </section>
  )
}

export default Forgetpassword