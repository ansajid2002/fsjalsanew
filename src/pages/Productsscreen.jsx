import React, { useEffect, useState } from "react";
import { BsShareFill } from "react-icons/bs";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { Checkbox, Slider } from "antd";
import { addItem } from "../store/slices/cartSlice";
import ProductCard from "../components/ProductCard";

const Productsscreen = () => {
  const dispatch = useDispatch()
  const [productsToShow, setproductsToShow] = useState([]);
  const [producttagtoshow, setProducttagtoshow] = useState([])
  const [colorsfilter, setColorsfilter] = useState([])
  const { c_symbol } = useSelector((store) => store.selectedCurrency);
  const location = useLocation();
  const currentURL = location.pathname;

  const originalName = decodeURI(currentURL.substring(1));
  const { productsList } = useSelector((store) => store.products);
  const { categoriesList } = useSelector((store) => store.categories);
  const { subcategoriesList } = useSelector((store) => store.subcategories);

  const categoryId = categoriesList.filter((single) => {
    if (single.category_name === originalName) {
      return single.category_id;
    }
  })[0].category_id;

  const categoryName = categoriesList.filter((single) => {
    if (single.category_name === originalName) {
      return single.category_id;
    }
  })[0].category_name;

  const productstoshow = productsList.filter((single) => {
    return single.category_id === categoryId;
  });

  const subcategoriestoshow = subcategoriesList.filter((single) => {
    return single.parent_category_id === categoryId;
  });


  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  console.log(colorsfilter);
  ///////////////////////PRODUCTS TAG////////////////////////////////////

  const gettags = () => {

    const producttagfilterarr = productstoshow.filter((product) => product.product_tag).map((single) => single.product_tag).flat()


    // Step 1: Merge the array with the same object keys
    const mergedObject = {};

    producttagfilterarr.forEach(obj => {
      for (const key in obj) {
        if (mergedObject[key] === undefined) {
          mergedObject[key] = [];
        }
        mergedObject[key] = mergedObject[key].concat(obj[key]);
      }
    });

    // Step 2: Remove duplicate values from the merged arrays
    for (const key in mergedObject) {
      mergedObject[key] = [...new Set(mergedObject[key])];
    }

    // Step 3: Convert the dictionary back into an array
    const mergedArray = Object.keys(mergedObject).map(key => ({ [key]: mergedObject[key] }));
    setProducttagtoshow(mergedArray)


  }

  const getUniqueColors = () => {

    // const uniqueColors = [...new Set(productstoshow.filter((product) => product.product_variants).map((single) => single.product_variants.color.map((single) => single.name)).flat())]

    const uniqueColors = [...new Set(productstoshow.map((single) => single.product_variants.map((single) => single.color)).flat())]

    setColorsfilter(uniqueColors);


  }
  console.log("colorsfilter");
  console.log(colorsfilter);
  console.log("colorsfilter");
  useEffect(() => {
    getUniqueColors();
    gettags()
  }, [currentURL, categoryId]);

  const discountfilter = [
    { name: "Upto 20% off" },
    { name: "Upto 30% off" },
    { name: "Upto 50% off" },
  ];
  const ratingfilter = [
    { name: "1.0 to 5.0" },
    { name: "2.0 to 5.0" },
    { name: "3.0 to 5.0" },
    { name: "4.0 to 5.0" },
  ];


  ///////////////////////PRODUCTS TAG////////////////////////////////////

  useEffect(() => {
    setproductsToShow(productstoshow.slice(startIndex, endIndex));
  }, [currentURL, categoryId]);

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(productstoshow.length / productsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setTimeout(scrollToTop, 0); // Use setTimeout to ensure smooth scrolling
  };



  return (
    <div className="flex ">
      {windowWidth >= 664 && (
        <div className="w-[25%]  hide-on-small-screens border pl-[2%]">
          <h1 className=" font-bold text-2xl my-4 mt-2">
            {originalName}
          </h1>
          <div className="">

            <div>
              {
                subcategoriestoshow.length !== 0 &&
                <h1 className="text-base md:text-xl font-medium mt-6 mb-1.5">More Categories</h1>
              }
              <div className="">
                {subcategoriestoshow.map((single, index) => {
                  return (
                    <div className="block">
                      <Checkbox key={index} onChange={onChange}>
                        {single.subcategory_name}{" "}
                        {/* You can replace this with the property name you want to display */}
                      </Checkbox>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* /////////////////Product tags///////////////////////// */}
            <div>
              {producttagtoshow.map((single, index) => (
                <div key={index}>
                  <h1 className="text-base md:text-xl font-medium mt-6 mb-1.5">{`Shop By ${Object.keys(single)}`}</h1>
                  {Object.values(single).map((val, valIndex) => (
                    <div key={valIndex}>
                      {val.map((ss, ssIndex) => (
                        <div className="block" key={ssIndex}>
                          <Checkbox onChange={onChange}>
                            <h1>{ss}</h1>
                          </Checkbox>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}


            </div>

            {/* /////////////////Product tags///////////////////////// */}
            <div>
              <h1 className="text-base md:text-xl font-medium mt-6 mb-1.5">Shop By Discount</h1>
              {discountfilter.map((single, index) => {
                return (
                  <div className="block">
                    <Checkbox key={index} onChange={onChange}>
                      {single.name}{" "}
                      {/* You can replace this with the property name you want to display */}
                    </Checkbox>
                  </div>
                );
              })}
            </div>
            <div>
              {
                colorsfilter.length !== 0 &&
                <><h1 className="text-base md:text-xl font-medium mt-6 mb-1.5">Colors</h1>
                  <div className="flex space-x-2">
                    {colorsfilter.map((single, index) => {

                      return (
                        <h1
                          key={index}
                          style={{ backgroundColor: single, width: '20px', height: '20px', borderRadius: '50%' }}
                        ></h1>
                      );
                    })}
                  </div></>
              }
            </div>
            <div>
              <h1 className="text-base md:text-xl font-medium mt-6 mb-1.5" >Price</h1>
              <Slider
                range={{
                  draggableTrack: true,
                }}
                className="w-[80%]"
                defaultValue={[20, 50]}
              />
            </div>
            <div>
              <h1 className="text-base md:text-xl font-medium mt-6 mb-1.5">Shop By Rating</h1>
              {ratingfilter.map((single, index) => {
                return (
                  <div className="block">
                    <Checkbox key={index} onChange={onChange}>
                      {single.name}{" "}
                      {/* You can replace this with the property name you want to display */}
                    </Checkbox>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      )}
      <div className="w-[95%] sm:w-[70%] bg-white my-10 mx-auto">
      <div className="grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2">
  {productsToShow.map((single, index) => {
    const url = `/${categoryName}/${single.product_id}`; // Construct the URL
    return <ProductCard key={index} data={single} url={url} />; // Pass the URL as a prop
  })}
</div>
        <div className="mt-8">
          {totalPages > 1 && (
            <div className="flex justify-center mt-4 space-x-4 text-base ">
              <button
                className="bg-black text-white px-2 py-0.5 rounded-md"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`${number === currentPage
                    ? "bg-gray-600 text-white rounded-full w-[25px] h-[25px]"
                    : ""
                    }`}
                >
                  {number}
                </button>
              ))}
              <button
                className="bg-black text-white px-2 py-0.5 rounded-md"
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
  );
};

export default Productsscreen;
