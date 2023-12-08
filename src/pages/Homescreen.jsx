import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../App.css"
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import img1 from "/images/advertisement/advertisement1.jpg"
import img2 from "/images/advertisement/advertisement2.jpg"
import img3 from "/images/advertisement/advertisement3.jpg"


const Homescreen = () => {

    const {productsList} = useSelector((store) => store.products)
    const {c_symbol} = useSelector((store) => store.selectedCurrency)
    // console.log(c_symbol);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true, 
        pauseOnHover: true,
        speed: 500,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 9999,
            settings: {
              slidesToShow: 5,
            }
          },
          // Add more breakpoints and settings as needed
        ]
      };
      const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true, 
        pauseOnHover: true,
        speed: 500,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 9999,
            settings: {
              slidesToShow: 5,
            }
          },
          // Add more breakpoints and settings as needed
        ]
      };
    

    const hpmain = [
        {
          id: 1,
          img: "./images/homeslider1.png",
          title: "Eid Ready To Wear",
          subtitle: "ORDER NOW TO GET YOUR OUTFITS BEFORE EID"
        },
        {
          id: 2,
          img: "./images/homeslider1.png",
          title: "Eid Ready To Wear",
          subtitle: "ORDER NOW TO GET YOUR OUTFITS BEFORE EID"
        },
        {
          id: 3,
          img: "./images/homeslider1.png",
          title: "Eid Ready To Wear",
          subtitle: "ORDER NOW TO GET YOUR OUTFITS BEFORE EID",
          cover: "cover"
        }
      ]
      const slideshowProperties = {
        duration: 4000, // Set the autoplay timing to 5 seconds (5000 milliseconds)
        transitionDuration: 700, // Set the transition duration between slides (optional)
        infinite: true, // Allow infinite loop of slides (optional)
        indicators: false, // Show slide indicators (optional)
        arrows: true, 
    
        // Show navigation arrows (optional)
      }


  return (<div>
    <div className=''>
    <Slide {...slideshowProperties} style={{ }}>
        {
            hpmain.map((single) => {
                const { id, img, title, subtitle, cover } = single;
                return (
                    <div className='relative h-full cursor-pointer'>
                        <img className="w-full h-[550px] object-cover" src={img} alt="sa" />
                            <div className="bg-[#00000068] w-full h-full absolute top-0"></div>
                     
                          
                    
                    </div>
                )
            })
        }
    </Slide>
</div>

{/* //////////////////Shop By Trend/////////////////////////////////// */}
 
    <div className='flex items-center justify-between mx-10 my-4 mt-10'>
        <h1 className='text-2xl font-semibold tracking-wide'>Trending Categories</h1>
        <button className='text-xl bg-black text-white rounded-md py-2 px-4'>View All</button>
        </div>
        <div className='mx-2 md:mx-4'>
        <Slider {...settings}>
        {
          productsList.map((single) => {
            const { product_variants,product_name } = single
            // console.log("product_variants")
            // console.log(product_variants[0].images[0])
            // console.log("product_variants")

            return (
              <div>
              <div className='flex items-center justify-center mx-4'>
              <div className='' >
                {/* <div className='sm:h-[375px] sm:w-[250px] lg:h-[360px] lg:w-[240px] xl:h-[450px] xl:w-[300px]  2xl:h-[525px] 2xl:w-[350px]'> */}
                <div className=' aspect-[3/4]'>
                <img  src={product_variants[0].images[0]} alt="trendimg" className=' object-cover w-full h-full rounded-lg' />
                </div>
                    <h1 className="text-center text-[0.9rem]  md:text-xl font-medium mt-1 line-clamp-1">{product_name}</h1>
                </div>
                </div>
              </div>
      
            )
          })
        }
      </Slider>
        </div>
   
     {/* //////////////////Shop By Trend/////////////////////////////////// */}
  <div>
    <div className='flex items-center justify-between mx-10 my-4 mt-10'>
        <h1 className='text-2xl font-semibold tracking-wide'>Top Deals of the Day</h1>
        <button className='text-xl bg-black text-white rounded-md py-2 px-4'>View All</button>
        </div>
        <div className='mx-2 md:mx-4'>
        <Slider {...settings2}>
        {
          productsList.map((single) => {
            const {product_variants ,product_name} = single

            return (
              <div>
              <div className='flex items-center justify-center mx-4'>
              <div className='' >
              
                <div className=' aspect-[3/4]'>
                <img  src={product_variants[0].images[0]} alt="trendimg" className=' object-cover w-full h-full    rounded-t-md' />
                </div>
                <div className='text-center bg-gray-200 py-1'>

                    <h1 className=" text-sm  md:text-lg font-medium line-clamp-1 ">{product_name}</h1>
                    <h1 className='font-bold text-xl'>
                      upto 65% off
                    </h1>
                </div>

                </div>
                </div>
              </div>
      
            )
          })
        }
      </Slider>
        </div>
    </div>

    {/* //////////////////Shop By Trend/////////////////////////////////// */}
  <div>
    <div className='flex items-center justify-between mx-10 my-4 mt-10 '>
        <h1 className='text-2xl font-semibold tracking-wide'>Recommended For You</h1>
        <button className='text-xl bg-black text-white rounded-md py-2 px-4'>View All</button>
        </div>
        <div className='mx-2 md:mx-4'>
        <Slider {...settings}>
        {
          productsList.map((single) => {
            const { product_variants,product_name,brand,discount} = single
            // console.log(single.brand)

            return (
              <div>
              <div className='flex items-center justify-center mx-4'>
              <div className='' >
                {/* <div className='sm:h-[375px] sm:w-[250px] lg:h-[360px] lg:w-[240px] xl:h-[450px] xl:w-[300px]  2xl:h-[525px] 2xl:w-[350px]'> */}
                <div className=' aspect-[3/4]'>
                <img  src={product_variants[0].images[0]} alt="trendimg" className=' object-cover w-full h-full    rounded-t-md' />
                </div>
                <div className='text-center bg-gray-200 py-1'>

                    <h1 className='font-bold text-xl'>
                      {brand}
                    </h1>
                    <div className='flex items-center justify-center space-x-2'>
                    <h1 className='text-xl font-bold'>{`${c_symbol} ${product_variants[0].price - product_variants[0].price*(discount/100)}`}</h1>
                    <h1 className=' -mt-0.5 text-lg  text-gray-600 line-through'>{`${c_symbol} ${product_variants[0].price}`}</h1>
                    <h1 className='text-base text-[#00008b] font-medium'>{`(${discount}%)`}</h1>
                    </div>
                    <h1 className=" text-sm  md:text-lg font-medium line-clamp-1">{product_name}</h1>
                </div>

                </div>
                </div>
              </div>
      
            )
          })
        }
      </Slider>
        </div>
    </div>


{/* /////////////////////////////NEW ARRIVAL ///////////////////////////////// */}
<div className='flex items-center justify-between mx-10 my-4 mt-10 '>
        <h1 className='text-2xl font-semibold tracking-wide'>New Arrival</h1>
</div>

    {/* //////////////////Shop By Trend/////////////////////////////////// */}
  <div>
    <div className='flex items-center justify-between mx-10 my-4  mt-10'>
        <h1 className='text-2xl font-semibold tracking-wide'>Best Sellers</h1>
        <button className='text-xl bg-black text-white rounded-md py-2 px-4'>View All</button>
        </div>
        <div className='mx-2 md:mx-4'>
        <Slider {...settings}>
        {
          productsList.map((single) => {
            const {product_name,brand,product_variants,discount,rating} = single
            // console.log(single.brand)

            return (
              <div>
              <div className='flex items-center justify-center mx-4'>
              <div className='' >
                {/* <div className='sm:h-[375px] sm:w-[250px] lg:h-[360px] lg:w-[240px] xl:h-[450px] xl:w-[300px]  2xl:h-[525px] 2xl:w-[350px]'> */}
                <div className=' aspect-[3/4]'>
                <img  src={product_variants[0].images[0]} alt="trendimg" className=' object-cover w-full h-full    rounded-t-md' />
                </div>
                <div className='text-center bg-gray-200 py-1'>

                    <h1 className='font-bold text-xl'>
                      {brand}
                    </h1>
                    <div className='flex items-center justify-center space-x-2'>
                    <h1 className='text-xl font-bold'>{`${c_symbol} ${product_variants[0].price - product_variants[0].price*(discount/100)}`}</h1>
                    <h1 className=' -mt-0.5 text-lg text-gray-600 line-through'>{`${c_symbol} ${product_variants[0].price}`}</h1>
                    <h1 className='text-base text-[#00008b] font-medium'>{`(${discount}%)`}</h1>
                    </div>
                    <h1 className=" text-sm  md:text-lg font-medium line-clamp-1">{product_name}</h1>
                </div>

                </div>
                </div>
              </div>
      
            )
          })
        }
      </Slider>
        </div>
    </div>


        {/* //////////////////ADVERTISEMENT////////////////////////////////////////// */}
        <div style={{background:"rgb(239, 239, 239)",display:"flex",justifyContent:"center",marginTop:"3rem",padding:" 1.5rem ",paddingTop:"2rem",paddingBottom:"8%"}}>
        
          <div style={{display:"flex",justifyContent:"space-between",position:"relative",width:`${window.innerWidth> 768 ? "50%" : "75%"}`,marginRight:"2rem"}}>
          <div style={{width:"43%"}}>
          <img className="hp-adv-img1" src={img1} alt="img1"  style={{width:"100%",objectFit:"cover"}}/>
          </div>
          <div style={{width:"43%"}}>
          <img className="hp-adv-img2" src={img2} alt="img2"  style={{width:"100%",objectFit:"cover"}}/>
          </div>
          <div style={{width:"40%",position:"absolute",top:"20%",left:"30%"}}>
          <img  className="hp-adv-img3" src={img3} alt="img3" style={{width:"100%",objectFit:"cover"}}  />
          </div>
            
            
          </div> 
          
        <div  style={{width:"30%",height:"100%",marginTop:"auto",marginBottom:"auto"}}>
          <h1  className="text-base lg:text-3xl">Handbags, Footwear & Jewellery</h1>
          <h3 className='font-semibold text-base my-1'>UPTO 70% OFF</h3>
          <button className=' font-bold bg-black text-white py-1.5 px-3 rounded-xl mt-2 hover:bg-gray-400 hover:text-black'>SHOP NOW</button>
        </div>
    </div>



    </div>
  )
}

export default Homescreen