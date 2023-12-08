import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RiDeleteBinLine, RiLuggageCartLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import {BsShareFill} from "react-icons/bs"

const Wishlist = () => {

  const { wishlistData } = useSelector((store) => store.wishlist)

  const WishlistItem = ({data}) => {
    const { product_name, quantity, product_id,brand ,discount} = data
    const { price, images } = data.product_variants[0]
    console.log(data);
    return (
      <div className='my-4 mx-2 bg-gray-200 rounded-sm'>
         <div className="aspect-[3/4] w-[300px] relative rounded-sm overflow-hidden ">
            <img
              src={images[0]}
              alt="trendimg"
              className="object-cover w-full h-full "
            />
            <div className='absolute top-0 right-0 bg-gray-300 p-2'><BsShareFill color="blue" size={20} /></div>

          </div>
          <div className='p-2  '>
            <h1 className='text-xl font-semibold'>{brand}</h1>
            <h1 className='text-lg font-medium w-[280px] line-clamp-1'>{product_name}  </h1>
            <div className='flex text-xl font-medium space-x-5 my-1'>
            <h1 className='  line-through'>{`$${price}`}</h1>
            <h1 className='text-blue-800 font-bold'>{`$${price - (discount/100)}`}</h1>

            </div>
            <button className='bg-black text-white text-lg px-4 py-1 mt-1 mb-2 rounded-md'>Add To Cart</button>
          </div>
      </div>
    )
  }


  return (
    <div>
      <div className='flex items-center justify-between mx-10 mt-6 mb-10 '>
        <h1 className='text-2xl font-medium'>{`Wishlist (${wishlistData.length})`}</h1>
        <div className='flex items-center mt-1 cursor-pointer border hover:bg-red-700 bg-red-500 px-4 py-1.5 rounded-md' onClick={() => { dispatch(removeItem(product_id)) }}>
          <AiOutlineShoppingCart size={20} />
          <h1 className='text-base font-medium ml-1  hover:text-red-400'>Move All To Cart</h1>
        </div>
      </div>
        <div className='flex flex-wrap justify-center'>
          {
            wishlistData.map((single,index) => {
              return ( 
              
              <WishlistItem key={index} data={single}/>)
            })
          }
        </div>
    </div>
  )
}

export default Wishlist