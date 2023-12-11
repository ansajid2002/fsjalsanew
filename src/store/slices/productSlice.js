import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [
    {
      product_id: 10,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree10.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 1,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree1.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    }, {
      product_id: 2,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree1.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    }, {
      product_id: 3,
      product_name:"Korams Design Black Kanjivaram",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree3.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    }, {
      product_id: 4,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    }, {
      product_id: 5,
      product_name:"Korams Design Black Kanjivaram",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    }, {
      product_id: 6,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree6.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    }, {
      product_id: 7,
      product_name:"Korams Design Black Kanjivaram",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 8,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree2.jpg", "/fsjalsanewimg/Sarees/saree3.jpg"], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Sarees/saree4.jpg", "/fsjalsanewimg/Sarees/saree5.jpg", "/fsjalsanewimg/Sarees/saree6.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/Sarees/saree7.jpg", "/fsjalsanewimg/Sarees/saree8.jpg", "/fsjalsanewimg/Sarees/saree9.jpg"], price: 1200, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 1,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    

    /////////////////////////second//////////////////////////////////////////////////////
    {
      product_id: 11,
      product_name:"Korams Design Black Kanjivaram",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis1.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 12,
      product_name:"Korams Design Black Kanjivaram",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },
   
    {
      product_id: 13,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 14,
      product_name:"Korams Design Black Kanjivaram",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1200, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 15,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 16,
      product_name:"MAROON WOVEN KATAN SILK ",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 17,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis7.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 18,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/kurtis/kurtis8.jpg", "/fsjalsanewimg/kurtis/kurtis4.jpg", "/fsjalsanewimg/kurtis/kurtis7.jpg"], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b",images: ["/fsjalsanewimg/kurtis/kurtis2.jpg", "/fsjalsanewimg/kurtis/kurtis5.jpg", "/fsjalsanewimg/kurtis/kurtis8.jpg"], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/fsjalsanewimg/kurtis/kurtis3.jpg", "/fsjalsanewimg/kurtis/kurtis6.jpg", "/fsjalsanewimg/kurtis/kurtis9.jpg"], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 2,
      subcategory_id: 1001,
      vendor_id: 501,
    },

    //////THIRD///////////////////////////
    {
      product_id: 28,
      product_name:"MAROON WOVEN KATAN SILK ",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men10.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1200, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1200, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 21,
      product_name:"MAROON WOVEN KATAN SILK ",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men1.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1200, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1200, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },{
      product_id: 22,
      product_name:"MAROON WOVEN KATAN SILK ",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1200, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1200, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },{
      product_id: 23,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1200, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1200, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },{
      product_id: 24,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men4.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1200, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },{
      product_id: 25,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men5.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },{
      product_id: 26,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: false,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men6.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1400, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 27,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Fs Jalsa",
      rating: 4.4,
      reviews: 3456,inFavourite: true,
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
        { color: "#ff7701", images: ["/fsjalsanewimg/Men/Men7.jpg", "/fsjalsanewimg/Men/Men4.jpg","/fsjalsanewimg/Men/Men7.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/fsjalsanewimg/Men/Men2.jpg", "/fsjalsanewimg/Men/Men5.jpg","/fsjalsanewimg/Men/Men8.jpg",], price: 1400, size: ["S", "M", "L"] },
        { color: "#000000",  images: ["/fsjalsanewimg/Men/Men3.jpg", "/fsjalsanewimg/Men/Men6.jpg","/fsjalsanewimg/Men/Men9.jpg",], price: 1200, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched   fabric", price: 999 },
        { title: "ready size stitching", price: 999 },

      ],
      category_id: 3,
      subcategory_id: 1001,
      vendor_id: 501,
    },

////////////////////////FOURTH////////////////////////////////

{
  product_id: 31,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/kids/kids1.jpg","/fsjalsanewimg/kids/kids6.jpg","/fsjalsanewimg/kids/kids7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/kids/kids2.jpg","/fsjalsanewimg/kids/kids5.jpg","/fsjalsanewimg/kids/kids8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/kids/kids3.jpg","/fsjalsanewimg/kids/kids4.jpg","/fsjalsanewimg/kids/kids19.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 4,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 32,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/kids/kids2.jpg","/fsjalsanewimg/kids/kids6.jpg","/fsjalsanewimg/kids/kids7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/kids/kids2.jpg","/fsjalsanewimg/kids/kids5.jpg","/fsjalsanewimg/kids/kids8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/kids/kids3.jpg","/fsjalsanewimg/kids/kids4.jpg","/fsjalsanewimg/kids/kids19.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 4,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 33,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/kids/kids3.jpg","/fsjalsanewimg/kids/kids6.jpg","/fsjalsanewimg/kids/kids7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/kids/kids2.jpg","/fsjalsanewimg/kids/kids5.jpg","/fsjalsanewimg/kids/kids8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/kids/kids3.jpg","/fsjalsanewimg/kids/kids4.jpg","/fsjalsanewimg/kids/kids19.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 4,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 34,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/kids/kids4.jpg","/fsjalsanewimg/kids/kids6.jpg","/fsjalsanewimg/kids/kids7.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/kids/kids2.jpg","/fsjalsanewimg/kids/kids5.jpg","/fsjalsanewimg/kids/kids8.jpg",], price: 1400, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/kids/kids3.jpg","/fsjalsanewimg/kids/kids4.jpg","/fsjalsanewimg/kids/kids19.jpg",], price: 1400, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 4,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 35,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/kids/kids5.jpg","/fsjalsanewimg/kids/kids6.jpg","/fsjalsanewimg/kids/kids7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/kids/kids2.jpg","/fsjalsanewimg/kids/kids5.jpg","/fsjalsanewimg/kids/kids8.jpg",], price: 1400, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/kids/kids3.jpg","/fsjalsanewimg/kids/kids4.jpg","/fsjalsanewimg/kids/kids19.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 4,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 36,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/kids/kids6.jpg","/fsjalsanewimg/kids/kids6.jpg","/fsjalsanewimg/kids/kids7.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/kids/kids2.jpg","/fsjalsanewimg/kids/kids5.jpg","/fsjalsanewimg/kids/kids8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/kids/kids3.jpg","/fsjalsanewimg/kids/kids4.jpg","/fsjalsanewimg/kids/kids19.jpg",], price: 1400, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 4,
  subcategory_id: 1001,
  vendor_id: 501,
},


/////FIFTH/////////////////////////////////////////////////
{
  product_id: 41,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya1.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 48,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya8.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 42,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 43,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 44,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: true,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 45,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1400, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 46,
  product_name: "Candy Pink Sharara Suit",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1400, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},{
  product_id: 47,
  product_name: "Candy Pink Sharara Suit",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Abaya/Abaya7.jpg","/fsjalsanewimg/Abaya/Abaya6.jpg","/fsjalsanewimg/Abaya/Abaya9.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Abaya/Abaya2.jpg","/fsjalsanewimg/Abaya/Abaya5.jpg","/fsjalsanewimg/Abaya/Abaya10.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",  images: ["/fsjalsanewimg/Abaya/Abaya3.jpg","/fsjalsanewimg/Abaya/Abaya4.jpg","/fsjalsanewimg/Abaya/Abaya13.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 5,
  subcategory_id: 1001,
  vendor_id: 501,
},

//SIxth///////////////////////////////////////////////////////////////////////////
{
  product_id: 61,
  product_name: "Candy Pink Sharara Suit",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Lehanga/Lehanga1.jpg","/fsjalsanewimg/Lehanga/Lehanga5.jpg","/fsjalsanewimg/Lehanga/Lehanga4.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/Lehanga/Lehanga2.jpg","/fsjalsanewimg/Lehanga/Lehanga6.jpg","/fsjalsanewimg/Lehanga/Lehanga8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000", images: ["/fsjalsanewimg/Lehanga/Lehanga3.jpg","/fsjalsanewimg/Lehanga/Lehanga7.jpg","/fsjalsanewimg/Lehanga/Lehanga9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 6,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 62,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Lehanga/Lehanga2.jpg","/fsjalsanewimg/Lehanga/Lehanga5.jpg","/fsjalsanewimg/Lehanga/Lehanga4.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/Lehanga/Lehanga2.jpg","/fsjalsanewimg/Lehanga/Lehanga6.jpg","/fsjalsanewimg/Lehanga/Lehanga8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000", images: ["/fsjalsanewimg/Lehanga/Lehanga3.jpg","/fsjalsanewimg/Lehanga/Lehanga7.jpg","/fsjalsanewimg/Lehanga/Lehanga9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 6,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 63,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: true,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Lehanga/Lehanga3.jpg","/fsjalsanewimg/Lehanga/Lehanga5.jpg","/fsjalsanewimg/Lehanga/Lehanga4.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/Lehanga/Lehanga2.jpg","/fsjalsanewimg/Lehanga/Lehanga6.jpg","/fsjalsanewimg/Lehanga/Lehanga8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000", images: ["/fsjalsanewimg/Lehanga/Lehanga3.jpg","/fsjalsanewimg/Lehanga/Lehanga7.jpg","/fsjalsanewimg/Lehanga/Lehanga9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 6,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 64,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Lehanga/Lehanga4.jpg","/fsjalsanewimg/Lehanga/Lehanga5.jpg","/fsjalsanewimg/Lehanga/Lehanga4.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/Lehanga/Lehanga2.jpg","/fsjalsanewimg/Lehanga/Lehanga6.jpg","/fsjalsanewimg/Lehanga/Lehanga8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000", images: ["/fsjalsanewimg/Lehanga/Lehanga3.jpg","/fsjalsanewimg/Lehanga/Lehanga7.jpg","/fsjalsanewimg/Lehanga/Lehanga9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 6,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 65,
  product_name: "Candy Pink Sharara Suit",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Lehanga/Lehanga5.jpg","/fsjalsanewimg/Lehanga/Lehanga5.jpg","/fsjalsanewimg/Lehanga/Lehanga4.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/Lehanga/Lehanga2.jpg","/fsjalsanewimg/Lehanga/Lehanga6.jpg","/fsjalsanewimg/Lehanga/Lehanga8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000", images: ["/fsjalsanewimg/Lehanga/Lehanga3.jpg","/fsjalsanewimg/Lehanga/Lehanga7.jpg","/fsjalsanewimg/Lehanga/Lehanga9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 6,
  subcategory_id: 1001,
  vendor_id: 501,
},

////////////////////seventh////////////////////////////////////////////////
{
  product_id: 71,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez1.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 7,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 72,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 7,
  subcategory_id: 1001,
  vendor_id: 501,
},

{
  product_id: 73,
  product_name: "Candy Pink Sharara Suit",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 7,
  subcategory_id: 1001,
  vendor_id: 501,
},

{
  product_id: 74,
  product_name: "Candy Pink Sharara Suit",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 7,
  subcategory_id: 1001,
  vendor_id: 501,
},

{
  product_id: 75,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 7,
  subcategory_id: 1001,
  vendor_id: 501,
},

{
  product_id: 76,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 7,
  subcategory_id: 1001,
  vendor_id: 501,
},

{
  product_id: 77,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez6.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez2.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez5.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/SalwarKameez/SalwarKameez3.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez4.jpg","/fsjalsanewimg/SalwarKameez/SalwarKameez9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 7,
  subcategory_id: 1001,
  vendor_id: 501,
},

//////////////////////////EIGHT//////////////////////////////////////////////////////


{
  product_id: 81,
  product_name: "Candy Pink Sharara Suit",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Home/Home1.jpg","/fsjalsanewimg/Home/Home6.jpg","/fsjalsanewimg/Home/Home7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Home/Home2.jpg","/fsjalsanewimg/Home/Home5.jpg","/fsjalsanewimg/Home/Home8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Home/Home3.jpg","/fsjalsanewimg/Home/Home4.jpg","/fsjalsanewimg/Home/Home9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  add_ons: [
    { title: "unstitched   fabric", price: 999 },
    { title: "ready size stitching", price: 999 },

  ],
  category_id: 8,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 82,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Home/Home2.jpg","/fsjalsanewimg/Home/Home6.jpg","/fsjalsanewimg/Home/Home7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Home/Home2.jpg","/fsjalsanewimg/Home/Home5.jpg","/fsjalsanewimg/Home/Home8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Home/Home3.jpg","/fsjalsanewimg/Home/Home4.jpg","/fsjalsanewimg/Home/Home9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
 
  category_id: 8,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 83,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Home/Home3.jpg","/fsjalsanewimg/Home/Home6.jpg","/fsjalsanewimg/Home/Home7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Home/Home2.jpg","/fsjalsanewimg/Home/Home5.jpg","/fsjalsanewimg/Home/Home8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Home/Home3.jpg","/fsjalsanewimg/Home/Home4.jpg","/fsjalsanewimg/Home/Home9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
 
  category_id: 8,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 84,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Home/Home4.jpg","/fsjalsanewimg/Home/Home6.jpg","/fsjalsanewimg/Home/Home7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Home/Home2.jpg","/fsjalsanewimg/Home/Home5.jpg","/fsjalsanewimg/Home/Home8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Home/Home3.jpg","/fsjalsanewimg/Home/Home4.jpg","/fsjalsanewimg/Home/Home9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
 
  category_id: 8,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 85,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Home/Home5.jpg","/fsjalsanewimg/Home/Home6.jpg","/fsjalsanewimg/Home/Home7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Home/Home2.jpg","/fsjalsanewimg/Home/Home5.jpg","/fsjalsanewimg/Home/Home8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Home/Home3.jpg","/fsjalsanewimg/Home/Home4.jpg","/fsjalsanewimg/Home/Home9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  
  category_id: 8,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 86,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: true,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Home/Home6.jpg","/fsjalsanewimg/Home/Home6.jpg","/fsjalsanewimg/Home/Home7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Home/Home2.jpg","/fsjalsanewimg/Home/Home5.jpg","/fsjalsanewimg/Home/Home8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Home/Home3.jpg","/fsjalsanewimg/Home/Home4.jpg","/fsjalsanewimg/Home/Home9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],

  category_id: 8,
  subcategory_id: 1001,
  vendor_id: 501,
},
///////////////////////////////NINE///////////////////////////////////////
{
  product_id: 91,
  product_name:"MAROON WOVEN KATAN SILK ",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Jewellery/Jewellery1.jpg","/fsjalsanewimg/Jewellery/Jewellery6.jpg","/fsjalsanewimg/Jewellery/Jewellery7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Jewellery/Jewellery2.jpg","/fsjalsanewimg/Jewellery/Jewellery5.jpg","/fsjalsanewimg/Jewellery/Jewellery8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Jewellery/Jewellery3.jpg","/fsjalsanewimg/Jewellery/Jewellery4.jpg","/fsjalsanewimg/Jewellery/Jewellery9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  
  category_id: 9,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 92,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Jewellery/Jewellery2.jpg","/fsjalsanewimg/Jewellery/Jewellery6.jpg","/fsjalsanewimg/Jewellery/Jewellery7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Jewellery/Jewellery2.jpg","/fsjalsanewimg/Jewellery/Jewellery5.jpg","/fsjalsanewimg/Jewellery/Jewellery8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Jewellery/Jewellery3.jpg","/fsjalsanewimg/Jewellery/Jewellery4.jpg","/fsjalsanewimg/Jewellery/Jewellery9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],

  category_id: 9,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 93,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Jewellery/Jewellery3.jpg","/fsjalsanewimg/Jewellery/Jewellery6.jpg","/fsjalsanewimg/Jewellery/Jewellery7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Jewellery/Jewellery2.jpg","/fsjalsanewimg/Jewellery/Jewellery5.jpg","/fsjalsanewimg/Jewellery/Jewellery8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Jewellery/Jewellery3.jpg","/fsjalsanewimg/Jewellery/Jewellery4.jpg","/fsjalsanewimg/Jewellery/Jewellery9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  
  category_id: 9,
  subcategory_id: 1001,
  vendor_id: 501,
},
{
  product_id: 94,
  product_name:"Korams Design Black Kanjivaram",
  description: "Pro desc",
  discount: 40,  //in percent
  quantity: 1,
  weight: 250,    //in grams
  brand: "Fs Jalsa",
  rating: 4.4,
  reviews: 3456,inFavourite: false,
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
    { color: "#ff7701", images: ["/fsjalsanewimg/Jewellery/Jewellery8.jpg","/fsjalsanewimg/Jewellery/Jewellery6.jpg","/fsjalsanewimg/Jewellery/Jewellery7.jpg",], price: 1200, size: ["S", "M", "L", "XL", "XXL"] },
    { color: "#00008b", images: ["/fsjalsanewimg/Jewellery/Jewellery2.jpg","/fsjalsanewimg/Jewellery/Jewellery5.jpg","/fsjalsanewimg/Jewellery/Jewellery8.jpg",], price: 1200, size: ["S", "M", "L"] },
    { color: "#000000",images: ["/fsjalsanewimg/Jewellery/Jewellery3.jpg","/fsjalsanewimg/Jewellery/Jewellery4.jpg","/fsjalsanewimg/Jewellery/Jewellery9.jpg",], price: 1200, size: ["M", "XL"] },
  ],
  product_tag: [
    { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
    { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
    { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
  ],
  
  category_id: 9,
  subcategory_id: 1001,
  vendor_id: 501,
},



    
  ]
}

export const productSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {

  },
}
)

export const { } = productSlice.actions

export default productSlice.reducer