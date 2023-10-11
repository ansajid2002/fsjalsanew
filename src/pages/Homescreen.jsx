import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../App.css"
import { useSelector } from 'react-redux';
import Slider from 'react-slick';


const Homescreen = () => {

    const {productsList} = useSelector((store) => store.products)
    // console.log(productsList);

    const simpledealsdata = productsList.filter((single) => single.product_type === "simple")
    let a =[]
    const variantdealsdata = productsList.map((single) => {
        if (single.product_type === "variant") {
            return {...single , price: }
        }
    })
    console.log(simpledealsdata);
    console.log(variantdealsdata);

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
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 9999,
            settings: {
              slidesToShow: 4,
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

    <div className='flex items-center justify-between mx-10 my-4 '>
        <h1 className='text-2xl'>Shop By Trend</h1>
        <button className='text-xl bg-black text-white rounded-md py-2 px-4'>View All</button>
        <div>
        <Slider {...settings}>
        {
          productsList.map((single) => {
            const { img, title } = single
            return (
              <div >
                <div style={{ margin:".5rem"}} className='trending-section'>
                <div>
                <img  src={img} alt="trendimg" style={{ objectFit: "cover", margin: "auto",width:"100%",height:"100%" }} />
                </div>

                  <div className='' style={{ background: "rgb(240,240,240)",paddingTop:".5rem" }}>
                    <h1 className="recom-title" style={{ textAlign: "center", marginTop: "0rem", marginBottom: "0rem" }}>{title}</h1>
                    <h2 className="recom-text" style={{ textAlign: "center", marginTop: ".2rem", paddingBottom: "0.4rem" }}>upto <b>65%</b> off</h2>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
        </div>
    </div>
    </div>
  )
}

export default Homescreen