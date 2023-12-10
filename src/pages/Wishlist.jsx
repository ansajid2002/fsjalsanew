import React, { useState } from 'react'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross1, RxCross2 } from "react-icons/rx";
import {message} from "antd"
const Wishlist = () => {
  // const {wishlistData} = useSelector((store) => store.wishlist);
  const [messageApi, contextHolder] = message.useMessage();
const { productsList } = useSelector((store) => store.products);
const [wishlistData, setWishlistData] = useState(
  productsList.filter((single) => single.inFavourite === true)
);
const info3 = () => {
  messageApi.open({
    type:"success",
    content: 'Added To Wishlist',
      duration: 1,
  })
};
const info2 = () => {
  console.log("removerd");
  messageApi.open({
    type:"success",
    content: 'Removed From Wishlist',
      duration: 1,
  })
};

const toggleFavourite = (product_id,inFavourite) => {
  if(!inFavourite) {
    info3()
}
else {
    info2()
}
  setWishlistData((prev) => {
    const updatedData = prev.filter((item) => item.product_id !== product_id);
    return updatedData;
  });
};


  
const WishlistItem = ({ data }) => {
    const { product_name, quantity, product_id, brand, discount,inFavourite } = data
    const { price, images } = data.product_variants[0]

    return (
      <div className='my-4 mx-2 md:mx-4 aspect-[3/4] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px]   rounded-sm'>

        <div className="aspect-[3/4] w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] relative rounded-sm overflow-hidden ">
          <img
            src={images[0]}
            alt="trendimg"
            className="object-cover w-full h-full "
          />
          <div onClick={() => toggleFavourite(product_id,inFavourite) } className='absolute top-0 right-0 bg-gray-300 p-1 rounded-sm cursor-pointer hover:bg-gray-400'><AiFillHeart
                            size={22}
                            color="blue"
                            className=""
                        /></div>

        </div>
        <div className='p-2 bg-gray-200 '>
          <h1 className='text-base md:text-xl font-semibold'>{brand}</h1>
          <h1 className='text-sm md:text-lg font-medium  line-clamp-1'>{product_name}  </h1>
          <div className='flex items-center text-xl font-medium space-x-2 md:space-x-5 my-1'>
            <h1 className=' text-base md:text-xl line-through'>{`$${price}`}</h1>
            <h1 className='text-base md:text-xl text-blue-800 font-bold'>{`$${price - (discount / 100)}`}</h1>

          </div>
          <button className='bg-black text-white text-sm md:text-base px-4 py-1 mt-1 mb-2 rounded-md'>Add To Cart</button>
        </div>
      </div>
    )
  }


  return (
    <div>
                    {contextHolder}

      <div className='flex items-center justify-between mx-4 md:mx-10 mt-6 mb-10 '>
        <h1 className='text-xl md:text-2xl font-medium'>{`Wishlist (${wishlistData.length})`}</h1>
        <div className='flex items-center mt-1 cursor-pointer border hover:bg-red-700 bg-red-500 px-2 md:px-4 py-1.5 rounded-md' >
          <AiOutlineShoppingCart size={20} />
          <h1 className=' text-smmd:text-base font-medium ml-1  hover:text-red-400'>Move All To Cart</h1>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        {
          wishlistData?.map((single, index) => {
            return (
              <WishlistItem key={index} data={single} />)
          })
        }
      </div>
    </div>
  )
}

export default Wishlist