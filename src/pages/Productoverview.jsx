import React,{useState,useEffect} from 'react'
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Slider from 'react-slick';

const Productoverview = () => {

  const { id } = useParams();
  const { productsList } = useSelector((store) => store.products);
  const { categoriesList } = useSelector((store) => store.categories);
  const { c_symbol } = useSelector((store) => store.selectedCurrency);
  const [colorsfilter,setColorsfilter] = useState([])

  const [selectedcolorvariant,setSelectedcolorvariant] = useState([])


  const location = useLocation();
  const currentURL = location.pathname;
  const parts = currentURL.split('/');
  const originalName = decodeURI(parts[1]);
  console.log(originalName);
  console.log(id);

  const categoryId = categoriesList.filter((single) => {
    if (single.category_name === originalName) {
      return single.category_id;
    }
  })[0].category_id;


  const productToShow = productsList.find((single) => {
    return single.category_id === categoryId && single.product_id == id;
  });
  console.log("productToShow");
  console.log(productToShow);
  console.log("productToShow");

  // console.log(productToShow.product_variants.color["#00008b"].price);
  const {images,brand,product_name,product_id,rating,price,discount,reviews} = productToShow

    useEffect(() => {

      if ( productToShow.hasOwnProperty("product_variants")) {
        if (!selectedcolorvariant) {
          setSelectedcolorvariant(productToShow.product_variants.color[0])
  
        }
        const uniqueColors = [...new Set(productToShow.product_variants.color.map((single) => single.name))]
      
        setColorsfilter(uniqueColors);
      }
      
      setMainImage(productToShow.product_variants ?  productToShow.product_variants.color[0].values.images[0] : images[0])

      
    }, [currentURL, categoryId])

  const changevariant = (single) => {
   
    productToShow.product_variants.color.map((s) => {
      if (s.name === single ){
        setSelectedcolorvariant(s)
        setMainImage(s.values.images[0])
      }
    })
  }
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '1rem',

  };
  const [mainImage, setMainImage] = useState([]);

  const handleImageClick = (newImage) => {
    console.log(newImage);
    console.log(newImage);
    console.log(newImage);
    setMainImage(newImage);
  };
console.log("mainImage");
console.log(images[0]);
console.log("mainImage");
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


  console.log( " productToShow.hasOwnProperty(product_variants)")
  console.log(  productToShow.hasOwnProperty("product_variants"))
  console.log(  "productToShow.hasOwnProperty(product_variants)")
  return (
    <div className="flex  justify-center">
      <div className="w-[35%] ">
        <div className="aspect-[3/4]  mx-auto">
          <img
            src={mainImage}
            alt="ovimg1"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="mx-auto">
        <Slider {...settings}>
                          {(selectedcolorvariant.values.images ? selectedcolorvariant.values.images : images).map((singleimage, index) => (

                            <div className="" key={index}>
                              <div className="m-2 aspect-[3/4]">

                              <img 
                                className="w-full h-full object-cover rounded-lg"
                                src={singleimage}
                                alt={`ovimg${index + 2}`}
                                onClick={() => handleImageClick(singleimage)}
                              />
                              </div>
                            </div>
                          ))}
                        </Slider>
        </div>
      </div>
      <div className="w-[40%] border">
          <h1>{productToShow.brand}</h1>
          <h1>{productToShow.product_name}</h1>
          <div className="flex items-center  space-x-2">
                        <h1 className=" text-base lg:text-lg font-bold">{`${c_symbol} ${(selectedcolorvariant.values.price ? selectedcolorvariant.values.price : price) - (selectedcolorvariant.values.price ? selectedcolorvariant.values.price : price) * (discount / 100)
                          }`}</h1>
                        <h1 className="  text-base lg:text-base text-gray-600 line-through">{`${c_symbol} ${selectedcolorvariant.values.price ? selectedcolorvariant.values.price : price}`}</h1>
                        <h1 className="text-[14px] lg:text-base text-[#00008b] font-medium">{`(${discount}%)`}</h1>
                      </div>
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
                        {(productToShow.hasOwnProperty("product_variants") && productToShow.product_variants.color ) && (
                          <div>
                          {
            colorsfilter.length !== 0 &&
            <><h1 className="text-base md:text-xl font-medium mt-6 mb-1.5">Colors</h1>
            <div className="flex space-x-2">
              {colorsfilter.map((single, index) => {
            
                return (
                  <h1 onClick={() => changevariant(single)}
      key={index}
      style={{ backgroundColor: single, width: '20px', height: '20px', borderRadius: '50%' }}
    ></h1>
                );
              })}
            </div></>
          }
                          </div>
                        )

                        }
      </div>

    </div>
  )
}

export default Productoverview