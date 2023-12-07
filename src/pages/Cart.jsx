import { Button, Checkbox } from 'antd'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {RiDeleteBinLine} from "react-icons/ri"
import { Link } from 'react-router-dom'


const cartData = [
  {
    product_id: 1,
    product_name: "Candy Pink Sharara Suit",
    description: "Pro desc",
    discount: 40,  //in percent
    quantity: 10,
    weight: 250,    //in grams
    brand: "Kalki",
    rating: 4.4,
    reviews: 3456,
    product_care: "Do not use Bleach, Do not tumble dry",
    shipping_fee:
      { Local: 200, Zonal: 400, International: 600 }
    ,
    featured: true,
    created_at: "",
    updated_at: "",

    product_type: "variant",
    currency_symbol: "INR",
    product_variants: [
      { color: "#ff7701", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
      { color: "#000000", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
    ],
    product_tag: [
      { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
      { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
      { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
    ],
    add_ons: [
      { title: "unstitched blouse fabric", price: 999 },
      { title: "ready size stitching", price: 999 },

    ],
    category_id: 101,
    subcategory_id: 1001,
    vendor_id: 501,
  },
  {
    product_id: 122,
    product_name: "Candy Pink Sharara Suit",
    description: "Pro desc",
    discount: 10,  //in percent
    quantity: 10,
    weight: 250,    //in grams
    brand: "Kalki",
    rating: 4.4,
    reviews: 3456,
    product_care: "Do not use Bleach, Do not tumble dry",
    shipping_fee:
      { Local: 200, Zonal: 400, International: 600 }
    ,
    featured: true,
    created_at: "",
    updated_at: "",

    product_type: "simple",
    product_variants: [
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
    ],
    product_tag: [
      { names: ["sajid", "shadab", "danish"] },
      { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
      { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
      { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
    ],
    add_ons: [
      { title: "unstitched blouse fabric", price: 999 },
      { title: "ready size stitching", price: 999 },

    ],
    category_id: 101,
    subcategory_id: 1001,
    vendor_id: 501,
  },
  {
    product_id: 123,
    product_name: "Candy Pink Sharara Suit",
    description: "Pro desc",
    discount: 23,  //in percent
    quantity: 10,
    weight: 250,    //in grams
    brand: "Kalki",
    rating: 4.4,
    reviews: 3456,
    product_care: "Do not use Bleach, Do not tumble dry",
    shipping_fee:
      { Local: 200, Zonal: 400, International: 600 }
    ,
    featured: true,
    created_at: "",
    updated_at: "",

    product_type: "variant",


    product_variants: [
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
    ],
    category_id: 101,
    subcategory_id: 1001,
    vendor_id: 501,
    add_ons: [
      { title: "unstitched blouse fabric", price: 999 },
      { title: "ready size stitching", price: 999 },

    ],
  },
  {
    product_id: 1245,
    product_name: "Candy Pink Sharara Suit",
    description: "Pro desc",
    discount: 30,  //in percent
    quantity: 10,
    weight: 250,    //in grams
    brand: "Kalki",
    rating: 4.4,
    reviews: 3456,
    product_care: "Do not use Bleach, Do not tumble dry",
    shipping_fee:
      { Local: 200, Zonal: 400, International: 600 }
    ,
    product_tag: [
      { names: ["sajid", "shadab", "danish", "Ahmed"] },
      { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
      { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
      { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
    ],
    featured: true,
    created_at: "",
    updated_at: "",

    product_type: "variant",


    product_variants: [
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
    ],
    category_id: 101,
    subcategory_id: 1001,
    vendor_id: 501,
    add_ons: [
      { title: "unstitched blouse fabric", price: 999 },
      { title: "ready size stitching", price: 999 },

    ],
  },
  {
    product_id: 126,
    product_name: "product For testing product overview",
    description: "Pro desc",
    discount: 30,  //in percent
    quantity: 10,
    weight: 250,    //in grams
    brand: "Kalki",
    rating: 4.4,
    reviews: 3456,
    product_care: "Do not use Bleach, Do not tumble dry",
    shipping_fee:
      { Local: 200, Zonal: 400, International: 600 }
    ,
    featured: true,
    created_at: "",
    updated_at: "",
    product_tag: [

      { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
      { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
      { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
    ],
    product_type: "variant",

    product_variants: [
      { color: "#ff0000", images: ["/images/productimages/men1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg", "/images/productimages/men1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg", "/images/productimages/men1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
      { color: "#ff7701", images: ["/images/productimages/boys3.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 2000, size: ["S", "M", "L"] },
      { color: "#000000", images: ["/images/productimages/men2.jpg", "/images/productimages/boys2.jpg"], price: 4000, size: ["M", "XL"] },
    ],
    size: ["S", "M", "L", "XL", "XXL"],
    category_id: 101,
    subcategory_id: 1001,
    vendor_id: 501,
    add_ons: [
      { title: "unstitched blouse fabric", price: 999 },
      { title: "ready size stitching", price: 999 },

    ],
  },
  {
    product_id: 2,
    product_name: "Candy Pink Sharara Suit",
    description: "Pro desc",
    discount: 30,  //in percent
    quantity: 10,
    weight: 250,    //in grams
    brand: "Kalki",
    rating: 4.4,
    reviews: 3456,
    product_care: "Do not use Bleach, Do not tumble dry",
    shipping_fee:
      { Local: 200, Zonal: 400, International: 600 }
    ,
    featured: true,
    created_at: "",
    updated_at: "",

    product_type: "variant",


    product_variants: [
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
    ]
    , size: ["S", "M", "L", "XL", "XXL"],
    category_id: 101,
    subcategory_id: 1001,
    vendor_id: 501,
    add_ons: [
      { title: "unstitched blouse fabric", price: 999 },
      { title: "ready size stitching", price: 999 },

    ],
  },
  {
    product_id: 3,
    product_name: "Candy Pink Sharara Suit",
    description: "Pro desc",
    discount: 30,  //in percent
    quantity: 10,
    weight: 250,    //in grams
    brand: "Kalki",

    reviews: 3456,
    rating: 4.4,

    product_care: "Do not use Bleach, Do not tumble dry",
    shipping_fee:
      { Local: 200, Zonal: 400, International: 600 }
    ,
    featured: true,
    created_at: "",
    updated_at: "",

    product_type: "variant",

    product_variants: [
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
      { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
    ],
    category_id: 101,
    subcategory_id: 1001,
    vendor_id: 501,
    add_ons: [
      { title: "unstitched blouse fabric", price: 999 },
      { title: "ready size stitching", price: 999 },

    ],
  },

]


const Cart = () => {

  const CartItem = ({ data }) => {
    const { product_name, quantity } = data
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
    <AiOutlineMinus size={12}/>
    <h1 className='font-medium text-base'>{quantity}</h1>
    <AiOutlinePlus size={12}/>
    </div>
</div>
<div className='flex items-center'>
      <RiDeleteBinLine/>
    <h1 className='text-[14px]'>Remove</h1>
</div>
</div>

          </div>
        </div>
        <div className='w-[30%] hidden md:block '>

        <div className='flex  items-start justify-center '>
          <div className='flex items-center border rounded-md space-x-3 p-1'>
            <AiOutlineMinus/>
            <h1 className='font-medium text-lg'>{quantity}</h1>
            <AiOutlinePlus/>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <RiDeleteBinLine />
            <h1 className='text-center text-[14px] lg:text-base'>Remove</h1>
          </div>
        </div>
          <h1 className='w-[20%] text-center hidden md:block text-lg font-normal'>{price}</h1>
      </main>
    )
  }










  return (
    <div className=''>
      <div className=' max-w-[1600px] mx-auto'>

      
      <h1 className='text-3xl font-medium my-4 ml-4'>Shopping Cart</h1>
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
                <Checkbox className='mr-2'/>
                <div className='flex items-center border  bg-gray-100 px-2 py-1'>
                  <RiDeleteBinLine/>
                <button className=' rounded-md text-base'>Remove All</button>
                  </div>
              </div>
            <main className='md:flex items-start justify-around mx-2 md:mx-5 '>
              <div className='w-full md:w-[60%] border rounded-lg py-2 md:py-4 px-2 md:px-6'>
                <div className='flex justify-between items-center mx-4 mb-2'>
                <h1 className='block md:hidden  text-xl '>Cart Items</h1>
                <div className=' my-2 flex md:hidden'>
                <Checkbox className='mr-2'/>
                <div className='flex items-center border  bg-gray-100 px-2 py-1'>
                  <RiDeleteBinLine/>
                <button className=' rounded-md text-base'>Remove All</button>
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
              <div className='mx-auto w-[80%] md:w-[30%] border  px-4 py-6 rounded-xl max-w-[350px] mt-12 md:mt-0'>
                  <div className='flex justify-between items-center my-2'>
                    <h1>Subtotal</h1>
                    <h1>89.99</h1>
                  </div>
                  <div className='flex justify-between items-center my-2'>
                    <h1>Discount</h1>
                    <h1>89.99</h1>
                  </div>
                  <div className='border'></div>
                  <div className='flex justify-between items-center my-2'>
                    <h1>Grand Total</h1>
                    <h1>89.99</h1>
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