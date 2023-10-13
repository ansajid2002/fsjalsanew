import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsList: [
    {
      product_id:1,
    product_name:"Candy Pink Sharara Suit",
    description:"Pro desc",
    discount:40,  //in percent
    quantity:10,
    weight:250,    //in grams
    brand:"Kalki",
    rating:4.4,
      reviews:3456,
    product_care:"Do not use Bleach, Do not tumble dry",
    shipping_fee :
    {Local:200 , Zonal:400 , International:600}
    ,
    featured:true,
    created_at:"",
    updated_at:"",
   
    product_type:"variant",
    currency_symbol:"INR",
    price:1000,
    images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
   
    product_variants:{
        color:{
            "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
            "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
            "#000000":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
        }
    },
    product_tag:[
      {fabric:["Cotton","Polyester","Crepe","Chiffon","Lace","Silk"]},
      {Occassion:["Wedding","Casual","Reception","Cocktail"]},
      {Look:["Designer","Traditional","Fashion","Contemporary"]}
    ],
    category_id:101,
    subcategory_id:1001,
    vendor_id:501,
    add_ons:[
        {title:"unstitched blouse fabric",price:999},
        {title:"ready size stitching",price:999},

    ],
    },
    {
        product_id:122,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:10,  //in percent
      quantity:10,
      weight:250,    //in grams
      brand:"Kalki",
      rating:4.4,
      reviews:3456,
      product_care:"Do not use Bleach, Do not tumble dry",
      shipping_fee :
      {Local:200 , Zonal:400 , International:600}
      ,
      featured:true,
      created_at:"",
      updated_at:"",
      
      product_type:"variant",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      product_tag:[
        {names: ["sajid","shadab","danish"]},
        {fabric:["Cotton","Polyester","Crepe","Chiffon","Lace","Silk"]},
        {Occassion:["Wedding","Casual","Reception","Cocktail"]},
        {Look:["Designer","Traditional","Fashion","Contemporary"]}
      ],
      product_variants:{
          color:{
              "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
              "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
          }
      },
      category_id:101,
      subcategory_id:1001,
      vendor_id:501,
      add_ons:[
          {title:"unstitched blouse fabric",price:999},
          {title:"ready size stitching",price:999},
  
      ],
      },
      {
        product_id:123,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:23,  //in percent
      quantity:10,
      weight:250,    //in grams
      brand:"Kalki",
      rating:4.4,
      reviews:3456,
      product_care:"Do not use Bleach, Do not tumble dry",
      shipping_fee :
      {Local:200 , Zonal:400 , International:600}
      ,
      featured:true,
      created_at:"",
      updated_at:"",
    
      product_type:"variant",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],

      product_variants:{
          color:{
              "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
              "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
          }
      },
      category_id:101,
      subcategory_id:1001,
      vendor_id:501,
      add_ons:[
          {title:"unstitched blouse fabric",price:999},
          {title:"ready size stitching",price:999},
  
      ],
      },
      {
        product_id:1245,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      quantity:10,
      weight:250,    //in grams
      brand:"Kalki",
      rating:4.4,
      reviews:3456,
      product_care:"Do not use Bleach, Do not tumble dry",
      shipping_fee :
      {Local:200 , Zonal:400 , International:600}
      ,
      product_tag:[
        {names: ["sajid","shadab","danish","Ahmed"]},
        {fabric:["Cotton","Polyester","Crepe","Chiffon","Lace","Silk"]},
        {Occassion:["Wedding","Casual","Reception","Cocktail"]},
        {Look:["Designer","Traditional","Fashion","Contemporary"]}
      ],
      featured:true,
      created_at:"",
      updated_at:"",
     
      product_type:"variant",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
 
      product_variants:{
          color:{
              "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
              "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
          }
      },
      category_id:101,
      subcategory_id:1001,
      vendor_id:501,
      add_ons:[
          {title:"unstitched blouse fabric",price:999},
          {title:"ready size stitching",price:999},
  
      ],
      },
      {
        product_id:126,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      quantity:10,
      weight:250,    //in grams
      brand:"Kalki",
      rating:4.4,
      reviews:3456,
      product_care:"Do not use Bleach, Do not tumble dry",
      shipping_fee :
      {Local:200 , Zonal:400 , International:600}
      ,
      featured:true,
      created_at:"",
      updated_at:"",
      product_tag:[
     
        {fabric:["Cotton","Polyester","Crepe","Chiffon","Lace","Silk"]},
        {Occassion:["Wedding","Casual","Reception","Cocktail"]},
        {Look:["Designer","Traditional","Fashion","Contemporary"]}
      ],
      product_type:"variant",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],

      product_variants:{
          color:{
              "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
              "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
          }
      },
      category_id:101,
      subcategory_id:1001,
      vendor_id:501,
      add_ons:[
          {title:"unstitched blouse fabric",price:999},
          {title:"ready size stitching",price:999},
  
      ],
      },
    {
        product_id:2,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      quantity:10,
      weight:250,    //in grams
      brand:"Kalki",
      rating:4.4,
      reviews:3456,
      product_care:"Do not use Bleach, Do not tumble dry",
      shipping_fee :
      {Local:200 , Zonal:400 , International:600}
      ,
      featured:true,
      created_at:"",
      updated_at:"",
     
      product_type:"variant",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      
      product_variants:{
        color:{
            "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
            "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
        }
      },
      category_id:101,
      subcategory_id:1001,
      vendor_id:501,
      add_ons:[
          {title:"unstitched blouse fabric",price:999},
          {title:"ready size stitching",price:999},
  
      ],
      },
      {
        product_id:3,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      quantity:10,
      weight:250,    //in grams
      brand:"Kalki",
     
      reviews:3456,
      rating:4.4,
      
      product_care:"Do not use Bleach, Do not tumble dry",
      shipping_fee :
      {Local:200 , Zonal:400 , International:600}
      ,
      featured:true,
      created_at:"",
      updated_at:"",
     
      product_type:"variant",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      product_variants:{
        color:{
            "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
            "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
        }
      },
      category_id:101,
      subcategory_id:1001,
      vendor_id:501,
      add_ons:[
          {title:"unstitched blouse fabric",price:999},
          {title:"ready size stitching",price:999},
  
      ],
      },


      ////EXTRA Products//////////
      {
        product_id:4,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:101,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:4,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:101,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:5,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:101,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:6,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:101,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:7,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:101,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:8,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:101,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:9,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:101,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:10,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:102,
      product_tag:[
        {names: ["urtis","shadab","danish"]},
        {fabric:["Cotton","Polyester"]},
        {Occassion:["Wedding","Reception","Cocktail"]},
        {Look:["Designer","Traditional","Fashion","Contemporary"]}
      ],
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:11,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:102,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:12,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:102,
      product_variants:{
        color:{
            "#00008b":{images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],price:1000},
            "#ff7701":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
            // "#000000":{images:["/images/productimages/boys3.jpg","/images/productimages/boys1.jpg"],price:2000},
        }
    },
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:13,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:104,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:14,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:105,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:15,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:106,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:16,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:104,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:17,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:108,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:18,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:108,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:19,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:107,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:20,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:104,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:21,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:104,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:22,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:104,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:23,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:105,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      },
      {
        product_id:24,
      product_name:"Candy Pink Sharara Suit",
      description:"Pro desc",
      discount:30,  //in percent
      product_type:"simple",
      price:1000,
      images:["/images/productimages/boys1.jpg","/images/productimages/boys2.jpg"],
      category_id:106,
      rating:4.4,
       brand:"Kalki",
      reviews:3456,
      }
  ]
}

export const productSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {

  },
}
)

export const {   } = productSlice.actions

export default productSlice.reducer