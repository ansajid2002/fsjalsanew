import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { BsShareFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";

const ProductCard = ({ data,url }) => {
    const [inFavourite, setfavorate] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { c_symbol } = useSelector((store) => store.selectedCurrency);

    const {
        product_variants,
        brand,
        product_name,
        discount,
        reviews,
        rating,
        category_name,
        product_id,
    } = data;

    const handleWishlist = () => {
        setfavorate(!inFavourite)
    }

    // Update the window width when the component mounts
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return (
        <div
            className=" relative flex items-center justify-center m-3 sm:m-4 lg:m-5 shadow-lg"
        >
            <div className="">
                <Link to={url} className="relative group">
                    <div className="overflow-hidden">
                        <div className="aspect-[3/4] relative group transition-transform transform hover:scale-105 duration-500">
                            <img
                                src={product_variants[0].images[0]}
                                alt="trendimg"
                                className="object-cover w-full h-full rounded-t-sm"
                            />
                            <div className="bg-[#eeeeee52] opacity-0 group-hover:opacity-100 absolute top-0 right-0 w-full h-full"></div>
                            <div className="absolute inset-0 flex items-end mb-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onClick={() => dispatch(addItem(single))} className="text-[14px] font-bold bg-black text-white px-4 py-2 rounded-md shadow-md flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                                    <FaCartPlus className="mr-2" />
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-[#f1eeee] p-2">
                        <h1 className="font-bold text-base xl:text-lg text-gray-600">
                            {brand}
                        </h1>
                        <h1 className=" text-sm  md:text-base  font-normal line-clamp-1">
                            {product_name}
                        </h1>
                        <div className="flex items-center  space-x-2">
                            <h1 className=" text-base lg:text-lg font-bold">{`${c_symbol} ${product_variants[0].price - product_variants[0].price * (discount / 100)
                                }`}</h1>
                            <h1 className="  text-base lg:text-base text-gray-600 line-through">{`${c_symbol} ${product_variants[0].price}`}</h1>
                            <h1 className="text-[14px] lg:text-base text-[#00008b] font-medium">{`(${discount}%)`}</h1>
                        </div>
                        <div className="flex justify-between items-center mt-1.5">
                            <div className="flex space-x-4">
                                <div className="flex items-center space-x-1 bg-[#0000ff] px-1.5 py-0 md:py-1 rounded-xl ">
                                    <FaStar
                                        color="white"
                                        size={windowWidth > 992 ? 16 : 14}
                                    />
                                    <h1 className="text-white text-[12px] sm:text-sm ">
                                        {rating}
                                    </h1>
                                </div>
                                <h1 className="flex  items-center sm:text-[12px] lg:text-[15px]">{`${reviews} reviews`}</h1>
                            </div>
                            <BsShareFill
                                color="blue"
                                size={windowWidth > 992 ? 22 : 16}
                                className=""
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <div onClick={() => handleWishlist()} className="absolute top-0 right-0 bg-gray-200 p-1 ">
                {
                    inFavourite ?
                        <AiFillHeart
                            size={windowWidth > 992 ? 25 : 16}
                            color="blue"
                            className=""
                        />
                        :
                        <AiOutlineHeart
                            size={windowWidth > 992 ? 25 : 16}
                            color="blue"
                            className=""
                        />}
            </div>
        </div>
    )
}

export default ProductCard