import React from 'react'
import Profilesidebar from '../../components/profile/Profilesidebar'

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
    },
  ];
  


  return (
    <div className='flex py-10 mx-2 lg:mx-5 xl:mx-8'>
    <div className='hidden md:block'>
  <Profilesidebar/>
  
    </div>
  <main className='border rounded-sm shadow-md py-4 px-10 mx-auto'>
      <h1 className='text-xl font-medium'>Saved Address</h1>
      <div className='w-[350px] lg:w-[500px] xl:w-[600px]'>
        
        </div>
        </main>
        </div>
  )
}

export default Savedaddress