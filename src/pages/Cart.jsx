import { Button, Checkbox } from 'antd'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBinLine } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart, decrementQuantity, incrementQuantity, removeItem } from '../store/slices/cartSlice'




const Cart = () => {

  const { cartData } = useSelector((store) => store.cart)
  const dispatch = useDispatch()


  const calculateTotalPrice = () => {
    return cartData.reduce((totalPrice, item) => {
      return totalPrice + item.product_variants[0].price * item.quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  const calculateTotalQuantity = () => {
    return cartData.reduce((totalQuantity, item) => {
      return totalQuantity + item.quantity;
    }, 0);
  };
  
  const totalQuantity = calculateTotalQuantity();

  console.log(totalQuantity);
  const CartItem = ({ data }) => {
    const { product_name, quantity, product_id } = data
    const { price, images } = data.product_variants[0]
    return (
      <main className='flex  py-4 border-t '>
        <div className='flex  w-[100%] md:w-[50%]'>
          <Checkbox className='' />
          <div className="aspect-[3/4] h-[120px] sm:max-h-[80px] lg:max-h-[100px] relative rounded-md overflow-hidden group transition-transform transform hover:scale-105 duration-500 mx-4 md:mx-2">
            <img
              src={images[0]}
              alt="trendimg"
              className="object-cover w-full h-full "
            />

          </div>
          <div className=''>
            <h1 className='text-[14px] md:text- lg:text-lg'>{product_name}</h1>
            <h1 className='text-[14px]'>small</h1>
            <h1 className='block md:hidden '>{price}</h1>
            <div className=' block md:hidden '>

              <div className='flex   '>
                <div className='flex items-center border rounded-md space-x-2 p-0.5'>
                  <button onClick={() => dispatch(decrementQuantity(product_id))}><AiOutlineMinus  /></button>
                  <h1 className='font-medium text-base'>{quantity}</h1>
                  <button onClick={() => dispatch(incrementQuantity(product_id))}><AiOutlinePlus /></button>
                </div>
              </div>
              <div className='flex items-center mt-1 cursor-pointer' onClick={() => { dispatch(removeItem(product_id)) }}>
                <RiDeleteBinLine size={14} />
                <h1 className='text-[14px] ml-1  hover:text-red-400'>Remove</h1>
              </div>
            </div>

          </div>
        </div>
        <div className='w-[30%] hidden md:block '>

          <div className='flex  items-start justify-center '>
            <div className='flex items-center border rounded-md space-x-3 p-1'>
              <button onClick={() => dispatch(decrementQuantity(product_id))}><AiOutlineMinus /></button>
              <h1 className='font-medium text-lg'>{quantity}</h1>
              <button onClick={() => dispatch(incrementQuantity(product_id))}><AiOutlinePlus /></button>
            </div>
          </div>
          <div className='flex items-center justify-center mt-1 cursor-pointer' onClick={() => { dispatch(removeItem(product_id)) }}>
            <RiDeleteBinLine size={14} />
            <h1 className='text-center text-[14px] ml-1 hover:text-red-400'>Remove</h1>
          </div>
        </div>
        <h1 className='w-[20%] text-center hidden md:block text-lg font-normal'>{price*quantity}</h1>
      </main>
    )
  }










  return (
    <div className=''>
      <div className=' max-w-[1600px] mx-auto'>

        {
          cartData.length > 0 &&
        <h1 className='text-3xl font-medium my-4 ml-4'>{`Shopping Cart (${totalQuantity})`}</h1>
        }
        <section className='my-10'>
          {
            cartData?.length === 0 ?
              <main className='flex items-center justify-center my-10'>
                <div>
                  <h1 className='font-medium text-2xl my-4'>No Items In Cart</h1>
                  <Link to="/" ><Button className=''>Shop Now</Button></Link>
                </div>
              </main>
              :
              <>
                <div className='mx-8 my-4 hidden md:flex'>
                  <Checkbox className='mr-2' />
                  <div className='flex items-center border  bg-gray-100 px-2 py-1'>
                    <RiDeleteBinLine />
                    <button onClick={() => dispatch(clearCart())} className=' rounded-md text-base ml-1'>Remove All</button>
                  </div>
                </div>
                <main className='md:flex items-start justify-around mx-2 md:mx-5 '>
                  <div className='w-full md:w-[60%] border rounded-lg py-2 md:py-4 px-2 md:px-6'>
                    <div className='flex justify-between items-center mx-4 mb-2'>
                      <h1 className='block md:hidden  text-xl '>Cart Items</h1>
                      <div className=' my-2 flex md:hidden'>
                        <Checkbox className='mr-2' />
                        <div className='flex items-center border  bg-gray-100 px-2 py-1'>
                          <RiDeleteBinLine />
                          <button onClick={() => dispatch(clearCart())}  className=' rounded-md text-base ml-1'>Remove All</button>
                        </div>
                      </div>
                    </div>
                    <div className='hidden md:flex items-center my-2 mb-6 '>
                      <h1 className='w-[50%]  text-center'>Product</h1>
                      <h1 className='w-[30%]  text-center'>Quantity</h1>
                      <h1 className='w-[20%]  text-center'>Price</h1>
                    </div>
                    <div className=''>
                      {
                        cartData.map((singleCartData) => {
                          return (
                            <CartItem data={singleCartData} />
                          )
                        })
                      }

                    </div>
                  </div>
                  <div className='mx-auto w-[80%] md:w-[30%] border  px-4 pt-2 pb-4 rounded-xl max-w-[320px] mt-12 md:mt-0'>
                    <div className='flex justify-between items-center my-2'>
                      <h1>Subtotal</h1>
                      <h1>{totalPrice}</h1>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                      <h1>Discount</h1>
                      <h1>-25%</h1>
                    </div>
                    <div className='border'></div>
                    <div className='flex justify-between items-center my-2'>
                      <h1>Grand Total</h1>
                      <h1>{totalPrice - .25*totalPrice}</h1>
                    </div>
                    <div className='flex  items-center justify-center'>
                      <Button className='bg-black hover:bg-[#000000c5] text-white font-medium' >Checkout</Button>

                    </div>


                  </div>

                </main>
              </>

          }
        </section>
      </div>
    </div>
  )
}

export default Cart