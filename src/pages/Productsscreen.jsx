import React, { useEffect, useState } from 'react'
import { BsShareFill } from 'react-icons/bs';
import {  FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHeart,AiFillStar, AiFillHeart} from "react-icons/ai"
import { Checkbox, Slider } from 'antd';



const Productsscreen = () => {

  const [productsToShow ,setproductsToShow ] = useState([])
  const {c_symbol} = useSelector((store) => store.selectedCurrency)
  const location = useLocation();
  const currentURL = location.pathname;

  const originalName = decodeURI(currentURL.substring(1));
  const {productsList} = useSelector((store) => store.products)
  const {categoriesList} = useSelector((store) => store.categories)
  const {subcategoriesList} = useSelector((store) =>store.subcategories)

  const categoryId = categoriesList.filter((single) => {
    if(single.category_name === originalName){
      return single.category_id
    }  
  })[0].category_id

  const categoryName = categoriesList.filter((single) => {
    if(single.category_name === originalName){
      return single.category_id
    }  
  })[0].category_name
  
  console.log(categoryId);
const productstoshow = productsList.filter((single) => {
  return single.category_id === categoryId
})

const subcategoriestoshow = subcategoriesList.filter((single) => {
  return single.parent_category_id === categoryId
})
console.log(subcategoriestoshow);

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

///////////////////////PRODUCTS TAG////////////////////////////////////

const producttagfilter = productsList.filter((single) => {
  if(single.product_tag) {
    return single.product_tag
  }
})
console.log(producttagfilter);

const discountfilter = [{name:"Upto 20% off"},{name:"Upto 30% off"},{name:"Upto 50% off"}]
const uniqueColors = productsList
  .filter((single) => single.product_type === "variant")
  .map((single) => Object.keys(single.product_variants.color))
  .flat();

const colorsfilter = [...new Set(uniqueColors)];
const ratingfilter = [{name:"1.0 to 5.0"},{name:"2.0 to 5.0"},{name:"3.0 to 5.0"},{name:"4.0 to 5.0"}]

console.log(colorsfilter);
///////////////////////PRODUCTS TAG////////////////////////////////////

useEffect(() => {
  setproductsToShow(productstoshow.slice(startIndex, endIndex))
},[currentURL,categoryId])

const [currentPage, setCurrentPage] = useState(1);
const productsPerPage = 9;

const startIndex = (currentPage - 1) * productsPerPage;
const endIndex = startIndex + productsPerPage;
// const productsToShow = productstoshow.slice(startIndex, endIndex);
 // Use state to track the window width
 const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 // Update the window width when the component mounts
 useEffect(() => {
   const handleResize = () => {
     setWindowWidth(window.innerWidth);
   };

   window.addEventListener('resize', handleResize);

   return () => {
     window.removeEventListener('resize', handleResize);
   };
 }, []);



const totalPages = Math.ceil(productstoshow.length / productsPerPage);

const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
  setTimeout(scrollToTop, 0); // Use setTimeout to ensure smooth scrolling
};
  return (
    <div className='flex '>
      {windowWidth >= 664 && (
        <div className='w-[25%]  hide-on-small-screens border'>
          <h1 className='text-center font-bold text-2xl my-2'>{originalName}</h1>
          <div>
          <h1>Shop by Style</h1>
          <div className=''> 
          {
            subcategoriestoshow.map((single,index) => {
              return (
               
                <div className='block'>
                <Checkbox key={index} onChange={onChange}>
          {single.subcategory_name} {/* You can replace this with the property name you want to display */}
        </Checkbox>
                </div>

                
              )
            })
          }
          </div>
          </div>
          <div>
          <h1>Shop By Discount</h1>
          {
            discountfilter.map((single,index) => {
              return (
               
                <div className='block'>
                <Checkbox key={index} onChange={onChange}>
          {single.name} {/* You can replace this with the property name you want to display */}
        </Checkbox>
                </div>

                
              )
            })
          }
          </div>
          <div>
          <h1 className=''>Colors</h1>
          <div className='flex space-x-2'>
          {
            colorsfilter.map((single,index) => {
              return (
                <h1 className={`bg-[${single}] h-[20px] w-[20px] rounded-full`}></h1>
              )
            })
          }
          </div>
          </div>
          <div>
          <h1>Price</h1>
          <Slider
    range={{
      draggableTrack: true,
    }}
    className='w-[300px]'
    defaultValue={[20, 50]}
  />
          </div>
          <div>
          <h1>Shop By Rating</h1>
          {
            ratingfilter.map((single,index) => {
              return (
               
                <div className='block'>
                <Checkbox key={index} onChange={onChange}>
          {single.name} {/* You can replace this with the property name you want to display */}
        </Checkbox>
                </div>

                
              )
            })
          }
          </div>
        </div>
      )}





      <div className='w-[95%] sm:w-[70%] bg-white my-10 mx-auto'>
      <div className='grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2'>

      {
        productsToShow.map((single,index) => {
          const {images,price,brand,product_name,discount,reviews,rating,category_name,product_id} = single
          return (
            <div className=' relative flex items-center justify-center m-3 sm:m-4 lg:m-5 shadow-lg' key={index}>
              <div className=''>
              <Link to={`/${categoryName}/${product_id}`} >

              
                {/* <div className='sm:h-[375px] sm:w-[250px] lg:h-[360px] lg:w-[240px] xl:h-[450px] xl:w-[300px]  2xl:h-[525px] 2xl:w-[350px]'> */}
                <div className=' overflow-hidden '>

                <div className='aspect-[3/4] relative group transition-transform transform hover:scale-105  duration-500'>
  <img src={images[1]} alt="trendimg" className='object-cover w-full h-full rounded-t-md  ' />
  <div className='bg-[#eeeeee52] opacity-0 group-hover:opacity-100 absolute top-0 right-0 w-full h-full '></div>
</div>
                </div>
                <div className=' bg-[#f1eeee] p-2'>

                    <h1 className='font-bold text-base xl:text-lg'>
                      {brand}
                    </h1>
                    <h1 className=" text-sm  md:text-base  font-normal line-clamo-1">{product_name}</h1>
                    <div className='flex items-center  space-x-2'>
                    <h1 className=' text-base lg:text-lg font-bold'>{`${c_symbol} ${price - price*(discount/100)}`}</h1>
                    <h1 className='  text-base lg:text-base text-gray-600 line-through'>{`${c_symbol} ${price}`}</h1>
                    <h1 className='text-[14px] lg:text-base text-[#00008b] font-medium'>{`(${discount}%)`}</h1>
                    </div>
                    <div className='flex justify-between items-center mt-1.5'>
                    <div className='flex space-x-4'>
                    <div className='flex items-center space-x-1 bg-[#0000ff] px-1.5 py-0 md:py-1 rounded-xl '>
                      <FaStar color='white' size={windowWidth > 992 ?  16 : 14} />
                      <h1 className='text-white text-[12px] sm:text-sm '>{rating}</h1>
                    </div>
                    <h1 className= 'flex  items-center sm:text-[12px] lg:text-[15px]'>{`${reviews} reviews`}</h1>
                    </div>
                    <BsShareFill color="blue" size={windowWidth > 992 ?  22 : 16} className=''/>
                    
                    </div>
                </div>
                </Link>
                </div>
                <div className='absolute top-0 right-0 bg-gray-200 p-1 '>
                <AiOutlineHeart size={windowWidth > 992 ?  25 : 16} color='blue' className=''/>
                </div>
               
                </div>
                
          )
        })
      }
      
      </div>
      <div className='mt-8'>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-4 text-base ">
          <button className='bg-black text-white px-2 py-0.5 rounded-md'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            
          >
            Previous
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`${
                number === currentPage ? 'bg-gray-600 text-white rounded-full w-[25px] h-[25px]' : ''
              }`}
            >
              {number}
            </button>
          ))}
          <button className='bg-black text-white px-2 py-0.5 rounded-md'
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
      </div>
      </div>
    </div>
  )
}

export default Productsscreen