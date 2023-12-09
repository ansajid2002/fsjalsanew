import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Row, Col ,Radio} from 'antd';
import { useSelector } from 'react-redux';

const shippingMethodData = [
  {
    label:"Economy",
    delivery:"Estimated delivery 27 December",
    price:"$10"
  },
  {
    label:"Express",
    delivery:"Estimated delivery 25 December",
    price:"$18"
  },
  {
    label:"Regular",
    delivery:"Estimated delivery 30 December",
    price:"$15"
  },
  {
    label:"Cargo",
    delivery:"Estimated delivery 5 January",
    price:"$25"
  },
]

const Checkout = () => {
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'UK', name: 'United Kingdom' },
    // Add more countries as needed
  ];
  const [selectedCountry, setSelectedCountry] = useState('');
  const { cartData } = useSelector((store) => store.cart)
  const calculateTotalPrice = () => {
    return cartData.reduce((totalPrice, item) => {
      return totalPrice + item.product_variants[0].price * item.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();


  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const onFinish = (values) => {
    // Handle form submission here
    console.log('Received values:', values);
  };

  const onFinishFailed = (errorInfo) => {
    // Handle form submission failure or validation errors here
    console.log('Failed:', errorInfo);
  };

  const CartItems = ({data,key}) => {
    const { product_name, quantity, product_id } = data
    const { price, images } = data.product_variants[0]
    return (
      <main className='flex justify-between  py-4 border-t px-2  '>
        <div className='flex  w-[100%] md:w-[70%]'>
          <div className="aspect-[3/4] w-[80px] sm:max-w-[50px] lg:max-w-[60px] relative rounded-md overflow-hidden group transition-transform transform hover:scale-105 duration-500 mx-4 md:mx-2">
            <img
              src={images[0]}
              alt="trendimg"
              className="object-cover w-full h-full "
            />

          </div>
          <div className=''>
            <h1 className='text-[14px] font-medium  line-clamp-2'>{product_name}</h1>
            <h1 className='text-[14px]'>small</h1>
            <h1 className='text-[14px] text-gray-400 font-bold' >{`x${quantity}`}</h1>
          </div>
        </div>
       
        <h1 className=' text-center text-lg font-normal'>{`$${price*quantity}`}</h1>
      </main>
    )}



  return (
    <div className='max-w-[1650px] mx-auto'>

      
      <section className='flex space-x-8 mx-16 my-6 '>
        <Link to="/cart"><h1 className='text-xl font-semibold'>Cart</h1></Link>
        <Link to="/checkout"><h1 className='text-xl font-semibold text-gray-500'>Checkout</h1></Link>
        <Link to="/payments"><h1 className='text-xl font-semibold'>Payment</h1></Link>
      </section>
      <section className='flex-row lg:flex justify-around my-10 space-y-4'>
        <div className=' w-[100%] lg:w-[60%] border border-black rounded-xl  p-4   order-2 lg:order-1'>
          <h1 className='mb-2 font-semibold text-xl'>Select Shipping Country</h1>
          <div className='border border-gray-400 rounded-md p-2'>
            <select className='w-full border-none outline-none' id="countrySelect" value={selectedCountry} onChange={handleCountryChange}>
              <option value="" >Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className='border-t border-gray-400 my-3'></div>
          <div>
            <h1 className='font-semibold text-xl  '>Shipping Address</h1>
            <Form
            className='my-6 '
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 16,
              }}
              
              style={{
                maxWidth: 800,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    labelAlign='left'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your first name!',
                      },
                    ]}
                  >
                    <Input placeholder="Enter first name" />
                  </Form.Item>
                
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    labelAlign='left'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your last name!',
                      },
                    ]}
                  >
                    <Input placeholder="Enter last name" />
                  </Form.Item>
                

              <Form.Item
                label="Email address"
                name="email"
                labelAlign='left'
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Please input a valid email address!',
                  },
                ]}
              >
                <Input placeholder="Enter your email address" />
              </Form.Item>

              <Form.Item
                label="Mobile Number"
                name="mobile"
                labelAlign='left'
                rules={[
                  {
                    required: true,
                    message: 'Please input your mobile number!',
                  },
                ]}
              >
                <Input placeholder="Enter your mobile number" />
              </Form.Item>
              <Form.Item
                label="Apartment"
                name="apartment"
                labelAlign='left'
              // Add appropriate rules and validation as needed
              >
                <Input placeholder="Enter apartment" />
              </Form.Item>

              <Form.Item
                label="Street / Sector"
                name="areaStreetSector"
                labelAlign='left'
              // Add appropriate rules and validation as needed
              >
                <Input placeholder="Enter area, street, or sector" />
              </Form.Item>

              <Form.Item
                label="Landmark"
                name="landmark"
                labelAlign='left'
              // Add appropriate rules and validation as needed
              >
                <Input placeholder="Enter landmark" />
              </Form.Item>

              <Form.Item
                label="Town / City"
                name="townCity"
                labelAlign='left'
              // Add appropriate rules and validation as needed
              >
                <Input placeholder="Enter town or city" />
              </Form.Item>

              <Form.Item
                label="State"
                name="state"
                labelAlign='left'
              // Add appropriate rules and validation as needed
              >
                <Input placeholder="Enter state" />
              </Form.Item>

              <Form.Item
                label="Postal Code"
                name="postalCode"
                labelAlign='left'
              // Add appropriate rules and validation as needed
              >
                <Input placeholder="Enter postal code" />
              </Form.Item>
              <section className='flex items-center justify-center my-2'>

              <button className='bg-black font-blod text-white px-2 py-2 rounded-md text-[14px]'>SUBMIT</button>
              </section>

            </Form>
            <Link to="/savedaddress" ><h1 className='text-xl  underline'>Choose From Saved Address</h1></Link>
          </div>

        </div>




        <div className='w-[100%] md:w-[60%] mx-auto lg:mx-0 lg:w-[35%]  order-1 lg:order-2'>
        <div className=' p-2   border border-black rounded-xl '>

           <section>
            <h1 className='font-semibold text-xl my-1'>Your Orders</h1> 
            <div>
              {
                cartData.map((single,index) => {
                  return (
                    <CartItems data={single} key={index}/>
                  )
                })
              }
            </div>
           </section>
           <section className='mt-2 mb-6'>
            <h1 className='font-semibold text-xl my-1'>Discount Code</h1>
            <div className='flex items-center space-x-2'>
              <Input placeholder='Apply Discount Code'/>
              <button className='bg-black text-white p-1 px-2 rounded-md text-[14px]'>Apply</button>
            </div> 

           </section>     
           <h1 className='text-[14px] mx-2 my-2'><span className='font-bold'>New Customer </span><Link to="/login"><span className='underline'>Sign Up</span></Link> to get better offers</h1>
              <section className='space-y-1 my-4 px-3'>
                <div className='flex items-center justify-between'>
                  <h1>Subtotal</h1>
                  <h1>{`$ ${totalPrice}`}</h1>
                </div>
                <div className='flex items-center justify-between'>
                  <h1>Discount</h1>
                  <h1>-25%</h1>
                </div>
                <div className='flex items-center justify-between'>
                  <h1>Shipment Cost</h1>
                  <h1>0</h1>
                </div>
                <div className='border-b border-gray-300 my-2'></div>
                <div className='flex items-center justify-between'>
                  <h1 className='font-semibold'>Grand Total</h1>
                  <h1 className='font-semibold'>{`$ ${totalPrice - .25*totalPrice}`}</h1>
                </div>
              </section>
              <section className='flex items-center justify-center my-2'>
              <Link to="/payments">

              <button className='bg-black font-blod text-white px-2 py-2 rounded-md text-[14px]'>CONTINUE TO PAYMENT</button>
              </Link>
              </section>
        </div>
        </div>
      </section>
      <section className='border border-gray-400 shadow-md rounded-xl w-[100%] md:w-[60%] lg:w-[50%] mx-auto p-2 md:p-6 pt-3 my-10'>
      <h1 className='font-semibold text-xl'>Shipping Method</h1>
      <div>
      {
  shippingMethodData?.map((single, index) => {
    return (
      <div key={index} className='flex justify-between items-center mx-4 border border-gray-500 my-4 rounded-md py-2 px-4 hover:bg-gray-300'>
        <div className=''>
          <div className='flex '>
          <Radio value={single.value} /> {/* Radio button */}
            <div>
            <h1 className='font-medium'>{single.label}</h1>
            <h1 className='text-[14px]'>{single.delivery}</h1>
            </div>
          </div>
        </div>
        <h1 className='font-semibold'>{single.price}</h1>
      </div>
    )
  })
}
      </div>
         
      </section>
    </div>


  )
}

export default Checkout