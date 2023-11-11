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
    <div className='flex mx-10'>
    <Profilesidebar/>
    <main className='border py-4 px-10'>
        <h1 className='text-xl font-medium'>Add New Address</h1>
        <div className='w-[600px]'>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
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

    

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" className='bg-black tracking-wide'>
        UPDATE
      </Button>
    </Form.Item>
  </Form>
        </div>
    </main>
    </div>
  )
}

export default Account