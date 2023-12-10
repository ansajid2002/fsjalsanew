import React from 'react'
import Profilesidebar from '../../components/profile/Profilesidebar'
import {Radio} from "antd"
import { Link } from 'react-router-dom';

const Savedaddress = () => {

  const addressData = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      number: "1234567890",
      apartment: "Apt 123",
      street: "Main Street",
      landmark: "Near Park",
      city: "New York",
      state: "New York",
      postalcode: "10001",
      country:" United States of America"
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      number: "9876543210",
      apartment: "Unit 456",
      street: "Elm Street",
      landmark: "Corner Store",
      city: "Los Angeles",
      state: "California",
      postalcode: "90001",
      country:" United States of America"
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      email: "michaelj@example.com",
      number: "4561237890",
      apartment: "Apt 789",
      street: "Oak Avenue",
      landmark: "City Hall",
      city: "Chicago",
      state: "Illinois",
      postalcode: "60601",
      country:" United States of America"
    },
    {
      firstName: "Sophia",
      lastName: "Williams",
      email: "sophiaw@example.com",
      number: "7894561230",
      apartment: "Unit 321",
      street: "Maple Street",
      landmark: "Central Park",
      city: "San Francisco",
      state: "California",
      postalcode: "94101",
      country:" United States of America"
    },
  ];

  const SingleAddress = ({ data }) => {
    const { firstName,
      lastName,
      email,
      number,
      street,
      landmark,
      city,
      state,
      postalcode,country } = data
    return (
      <section className='flex items-start space-x-1 my-4'>
        <div  >
          <Radio className='' />
        </div>
        <div className='leading-7 text-base'>
          <h1 className='text-lg font-medium' >{`${firstName}  ${lastName}`}</h1>
          <h2>{`${street} ${landmark}`}</h2>

          <h2>{`${city} ${postalcode}`}</h2>
          <h2>{state}</h2>
          <h2>{country}</h2>
          <h2>{`Email: ${email}`}</h2>
          <h2>{`Mobile: ${number}`}</h2>
        </div>
        </section>
    )
  }



  return (
    <div className='flex py-10 mx-2 lg:mx-5 xl:mx-8'>
      <div className='hidden md:block'>
        <Profilesidebar />

      </div>
      <main className='border border-gray-400 rounded-sm shadow-md py-4 px-2 sm:px-10 mx-auto'>
        <h1 className='text-xl font-medium'>Saved Address</h1>
        <div className='w-full sm:w-[350px] lg:w-[500px] xl:w-[700px]'>
          <div className='grid lg:grid-cols-2 m-2 sm:m-4'>
          {
            addressData.map((single) => {
              return (
                <SingleAddress data={single} />
                )
              })
            }
            </div>
            <div className='space-y-4 mb-6'>
            <div className='flex items-center justify-center '>
            <button className='bg-black text-white px-2 py-1.5 rounded-md text-lg w-[175px]  hover:bg-gray-700'>Continue</button>
            </div>
            <div className='flex items-center justify-center '><Link to="/addaddress">
            <button className='bg-black text-white px-2 py-1.5 rounded-md text-lg w-[175px] hover:bg-gray-700 '>Add New Address</button>
            </Link></div>
              </div>
        </div>
      </main>
    </div>
  )
}

export default Savedaddress