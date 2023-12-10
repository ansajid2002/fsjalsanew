import React, { useState, useEffect, useRef } from 'react'
import { BsBoxSeam, BsInstagram, BsTruck, BsTwitter } from 'react-icons/bs';
import { FaArrowUp, FaChevronDown, FaChevronUp, FaFacebook, FaStar, FaUps } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { Button, Checkbox, Input, Space,message } from 'antd';
import { AiFillHeart, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { addItem } from '../store/slices/cartSlice';


const Productoverview = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { productsList } = useSelector((store) => store.products);
  const { categoriesList } = useSelector((store) => store.categories);
  const { c_symbol } = useSelector((store) => store.selectedCurrency);
  const [colorsfilter, setColorsfilter] = useState([])
  const [Favourite,setFavourite] = useState(false)

  const [selectedcolorvariant, setSelectedcolorvariant] = useState([])

  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.open({
      type:"success",
      content: 'Added To Cart',
        duration: 1,
    })
  };
  const info3 = () => {
    messageApi.open({
      type:"success",
      content: 'Added To Wishlist',
        duration: 1,
    })
  };
  const info2 = () => {
    messageApi.open({
      type:"success",
      content: 'Removed From Wishlist',
        duration: 1,
    })
  };
  const handleWishlist = () => {
    if(!Favourite) {
        info3()
    }
    else {
        info2()
    }
    setFavourite(!Favourite)
}



  const location = useLocation();
  const currentURL = location.pathname;
  const parts = currentURL.split('/');
  const originalName = decodeURI(parts[1]);

  const categoryId = categoriesList.filter((single) => {
    if (single.category_name === originalName) {
      return single.category_id;
    }
  })[0].category_id;


  const productToShow = productsList.find((single) => {
    return single.category_id === categoryId && single.product_id == id;
  });

  // console.log(productToShow.product_variants.color["#00008b"].price);
  const { brand, product_name, product_id, rating, discount, reviews, product_variants } = productToShow

  useEffect(() => {

    if (selectedcolorvariant.length === 0) {
      setSelectedcolorvariant(productToShow.product_variants[0])

    }
    if (productToShow) {

      const uniqueColors = [...new Set(productToShow.product_variants.map((single) => single.color))]


      setColorsfilter(uniqueColors);


      setMainImage(productToShow.product_variants[0].images[0])
    }


  }, [currentURL, categoryId])

  const changevariant = (single) => {

    // console.log("single");
    // console.log(single);
    // console.log("single");

    productToShow.product_variants.map((s) => {
      if (s.color === single) {
        setSelectedcolorvariant(s)
        setMainImage(s.images[0])
      }
    })
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true, // Add this line to enable vertical mode
    centerPadding: '1rem',

  };

  const settings2 = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '1rem',
    dots: true

  };
  const [mainImage, setMainImage] = useState([]);

  const handleImageClick = (newImage) => {
    setMainImage(newImage);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const containerRef = useRef(null);
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);
  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);

  const handleScrollUp = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop -= 100;
    }
  };

  const handleScrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop += 100;
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setIsScrollAtTop(container.scrollTop === 0);
      setIsScrollAtBottom(container.scrollHeight - container.scrollTop === container.clientHeight);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    
    <div className='my-8'>
      {contextHolder}
      <section className=' max-w-[1600px] mx-auto'>
        <div className="md:flex  justify-center mx-auto">
          {
            windowWidth > 768 ?
              <div className='md:flex  justify-center '>
                {
                  windowWidth > 1024 &&

                  <div className='ml-16 xl:ml-28 '>
                    <div className={`bg-gray-300 py-1 rounded-md ${isScrollAtTop ? 'opacity-0' : ''}`} onClick={handleScrollUp}>
                      <button className="flex items-center justify-center mx-auto px-2">
                        <FaChevronUp />
                      </button>
                    </div>
                    <div className={`mt-2 max-h-[485px] lg:max-h-[540px] scrollable-container scroll-smooth`} ref={containerRef}>
                      {selectedcolorvariant.images &&
                        selectedcolorvariant.images.map((singleimage, index) => (
                          <div key={index} className={`p-2 w-[70px] lg:w-[80px]`}>
                            <img
                              className="w-full h-full object-cover rounded-lg cursor-pointer"
                              src={singleimage}
                              alt={`ovimg${index + 2}`}
                              onClick={() => handleImageClick(singleimage)}
                            />
                          </div>
                        ))}
                    </div>
                    <div className={`bg-gray-300 py-1 rounded-md ${isScrollAtBottom ? ' opacity-0' : ''}`} onClick={handleScrollDown}>
                      <button className="flex items-center justify-center mx-auto">
                        <FaChevronDown size={20} />
                      </button>
                    </div>
                  </div>
                }


                <div className="mx-6 ">
                  <div className="aspect-[3/4] h-[550px] lg:h-[600px]  mx-auto">
                    <img
                      src={mainImage}
                      alt="ovimg1"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                </div> </div> :
              <div className="mx-auto sm:max-w-[400px]" >

                <Slider {...settings2}>

                  {selectedcolorvariant.images?.map((image, index) => (
                    <div key={index}>
                      <div className="aspect-[3/4] mx-4 " >
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          className='  rounded-lg'
                          src={image}
                          alt={`ovimg${index + 2}`}
                          onClick={() => handleImageClick(image)}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>

              </div>}


          <div className="w-[90%] sm:w-[42%] xl:w-[50%] mt-8 md:mt-2 ml-4 sm:mx-auto md:ml-0 ">
            <h1 className=' font-bold text-base xl:text-xl text-gray-500'>{productToShow.brand}</h1>
            <h1 className='text-base xl:text-xl '>{productToShow.product_name}</h1>
            <div className="flex items-center  space-x-2 my-1">
              <h1 className=" text-base xl:text-xl font-bold">{`${c_symbol} ${(selectedcolorvariant.price) - (selectedcolorvariant.price) * (discount / 100)
                }`}</h1>
              <h1 className="  text-base  font-normal text-gray-500 line-through">{`${c_symbol} ${selectedcolorvariant.price}`}</h1>
              <h1 className="text-base text-[#00008b] font-medium">{`(${discount}%)`}</h1>
            </div>
            <div className="flex space-x-4 mt-1">
              <div className="flex items-center space-x-1 bg-[#0000ff] px-1 lg:px-2 py-0 lg:py-1 rounded-lg ">
                <FaStar
                  color="white"
                  size={windowWidth > 992 ? 14 : 12}
                />
                <h1 className="text-white text-[12px] sm:text-sm ">
                  {rating}
                </h1>
              </div>
              <h1 className="flex  items-center sm:text-[12px] lg:text-[15px] tracking-wide">{`${reviews} reviews`}</h1>
            </div>
            <div>
              {
                colorsfilter.length !== 0 &&
                <><h1 className="text-lg xl:text-xl font-medium mt-2 xl:mt-3 mb-1">Colors</h1>
                  <div className="flex space-x-3">
                    {colorsfilter.map((single, index) => {

                      return (
                        <h1 onClick={() => changevariant(single)}
                          key={index}
                          style={{ backgroundColor: single }}
                          className='h-[20px] xl:h-[25px] w-[20px] xl:w-[25px] rounded-full'
                        ></h1>
                      );
                    })}
                  </div></>
              }
            </div>

            <div>

              <h1 className="text-lg xl:text-xl font-medium mt-2 xl:mt-3 mb-1">Size</h1>
              <div className="flex items-center space-x-4">
                {selectedcolorvariant.size?.map((single, index) => (
                  <div key={index} className="border bg-gray-100 rounded-full w-[30px] xl:w-[35px] h-[30px] xl:h-[35px] flex justify-center items-center">
                    <h1 className='text-[13px] xl:text-base'>{single}</h1>
                  </div>
                ))}
              </div>
            </div>


            {
              productToShow.hasOwnProperty("add_ons") && (
                <div>
                  <h1 className="text-lg xl:text-xl font-medium mt-2 xl:mt-3 mb-1">Add On's</h1>
                  {
                    productToShow.add_ons.map((single, index) => {
                      return (
                        <div className="flex" key={index}>

                          <Checkbox onChange={onChange}>
                            <h1 className="w-[200px] lg:w-[250px] text-[14px] xl:text-base">{single.title}</h1>
                          </Checkbox>

                          <h1>{single.price}</h1>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
            {/* /////BTN CONTAINER????????????????????????//// */}

            <div>
              <div className="flex space-x-3 mt-4 xl:mt-6 mb-2 xl:mb-4">
                <Input placeholder="Enter Delivery Pincode" className="max-w-[200px]" />
                <Button className=' bg-[#167bdf] text-white hover:bg-gray-100'>Check</Button>
              </div>
              <div className="flex items-center space-x-3 my-4">
                <div className="flex items-center space-x-2 border border-gray-400  rounded-md p-1 py-0.5 mr-1 lg:mr-4">

                  <AiOutlineMinus size={16} />
                  <h1 className="text-xl">{productToShow.quantity}</h1>
                  <AiOutlinePlus size={16} />
                </div>
                <Link to="/checkout" >
                <Button 
                 onClick={() => {
                   info()
                  dispatch(addItem(productToShow))
                }

                }
                 className=' bg-blue-500 text-white hover:bg-gray-100'>Buy Now</Button>
                </Link>
                <Button className=' bg-blue-500 text-white hover:bg-gray-100'
                  onClick={() => {
                    dispatch(addItem(productToShow))
                    dispatch(addItem(productToShow))
                    info()

                  }

                  }>Add To Cart</Button>
              </div>
            </div>
            {/* ////////////////////ADD TO WISHLIST?///////////////// */}
            <div className="lg:flex lg:space-x-6 space-y-4 md:space-y-3 lg:space-y-0 mt-4">
              <div className="flex items-center">
                <h1 className="text-[14px] xl:text-base mr-2">Add To Wishlist : </h1>
                <div onClick={() => handleWishlist()} className=" ">
                {
                    Favourite ?
                        <AiFillHeart
                            size={windowWidth > 992 ? 25 : 16}
                            color="#167bdf"
                            className=""
                        />
                        :
                        <AiOutlineHeart
                            size={windowWidth > 992 ? 25 : 16}
                            color="#167bdf"
                            className=""
                        />}
            </div>
              </div>
              <div className="flex items-center">
                <h1 className="text-[14px] xl:text-base mr-2">Explore For More :</h1>
                <div className="flex items-center space-x-3">
                  <BsInstagram size={20} color='#167bdf' />
                  <FaFacebook size={20} color='#167bdf' />
                  <BsTwitter size={20} color='#167bdf' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Productoverview