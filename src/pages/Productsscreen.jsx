import React, { useEffect, useState } from "react";
import { BsShareFill } from "react-icons/bs";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { Checkbox, Slider } from "antd";
import { addItem } from "../store/slices/cartSlice";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

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

  useEffect(() => {
    getUniqueColors();
    gettags()
  }, [currentURL, categoryId]);

  ///////////////////////PRODUCTS TAG////////////////////////////////// //
  useEffect(() => {
    setproductsToShow(productstoshow.slice(startIndex, endIndex));
  }, [currentURL, categoryId]);
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /////////////////pages logic//////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const totalPages = Math.ceil(productstoshow.length / productsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setTimeout(scrollToTop, 0); // Use setTimeout to ensure smooth scrolling
  };
    /////////////////pages logic//////////////////////////////////




  return (
    <div className="flex ">
      {windowWidth >= 664 && (
        <div className="w-[22%]  hide-on-small-screens border pl-[2%]">
          <h1 className=" font-bold text-2xl my-4 mt-2">
            {originalName}
          </h1>
          <Sidebar/>
        </div>

      )}
      <div className="w-[95%] sm:w-[75%] bg-white my-10 mx-auto">
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
