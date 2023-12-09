import React from 'react'
import Profilesidebar from '../../components/profile/Profilesidebar'
import { Button, Checkbox, Form, Input,  DatePicker, } from 'antd';

////ant design form//////////////
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Addaddress = () => {
  return (
    <div className='flex py-10 mx-2 lg:mx-5 xl:mx-8'>
    <div className='hidden md:block'>
  <Profilesidebar/>
  
    </div>
  <main className='border rounded-sm shadow-md py-4 px-10 mx-auto'>
      <h1 className='text-xl font-medium'>Add New Address</h1>
      <div className='w-[350px] lg:w-[500px] xl:w-[600px]'>
     
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
              <section className='flex items-center justify-center my-2 mt-4'>

              <button className='bg-black font-blod text-white px-2 py-2 rounded-md text-[14px]'>Add Address</button>
              </section>

            </Form>

        </div>
        </main>
        </div>
  )
}

export default Addaddress