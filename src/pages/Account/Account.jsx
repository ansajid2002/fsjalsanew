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


const Account = () => {
  return (
    <div className='flex py-10 mx-2 lg:mx-5 xl:mx-8'>
      <div className='hidden md:block'>
    <Profilesidebar/>

      </div>
    <main className='border rounded-sm shadow-md py-4 px-2 md:px-10 mx-auto'>
        <h1 className='text-xl font-medium mb-2'>Edit Profile</h1>
        <div className='w-[300px] lg:w-[500px] xl:w-[600px]'>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      // span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Full Name"
      name="Full Name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
      labelCol={{ span: 24 }}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email address"
      name="Email address"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
      labelCol={{ span: 24 }}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Phone Number"
      name="Phone Number"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
      labelCol={{ span: 24 }}
    >
      <Input />
    </Form.Item>
    <Form.Item label="DatePicker"   labelCol={{ span: 24 }}>
        <DatePicker />
      </Form.Item>


  <div className='flex justify-center items-center'>

      <button  className='bg-black text-white rounded-md  px-8 py-1 text-base   tracking-normal'>
        UPDATE
      </button>
  </div>
 
  </Form>
        </div>
    </main>
    </div>
  )
}

export default Account