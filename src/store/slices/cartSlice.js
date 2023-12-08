import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartData : [
    {
      product_id: 1,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 40,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Kalki",
      rating: 4.4,
      reviews: 3456,
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
        { color: "#ff7701", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      product_tag: [
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched blouse fabric", price: 999 },
        { title: "ready size stitching", price: 999 },
  
      ],
      category_id: 101,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 122,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 10,  //in percent
      quantity: 3,
      weight: 250,    //in grams
      brand: "Kalki",
      rating: 4.4,
      reviews: 3456,
      product_care: "Do not use Bleach, Do not tumble dry",
      shipping_fee:
        { Local: 200, Zonal: 400, International: 600 }
      ,
      featured: true,
      created_at: "",
      updated_at: "",
  
      product_type: "simple",
      product_variants: [
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
      ],
      product_tag: [
        { names: ["sajid", "shadab", "danish"] },
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      add_ons: [
        { title: "unstitched blouse fabric", price: 999 },
        { title: "ready size stitching", price: 999 },
  
      ],
      category_id: 101,
      subcategory_id: 1001,
      vendor_id: 501,
    },
    {
      product_id: 123,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 23,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Kalki",
      rating: 4.4,
      reviews: 3456,
      product_care: "Do not use Bleach, Do not tumble dry",
      shipping_fee:
        { Local: 200, Zonal: 400, International: 600 }
      ,
      featured: true,
      created_at: "",
      updated_at: "",
  
      product_type: "variant",
  
  
      product_variants: [
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      category_id: 101,
      subcategory_id: 1001,
      vendor_id: 501,
      add_ons: [
        { title: "unstitched blouse fabric", price: 999 },
        { title: "ready size stitching", price: 999 },
  
      ],
    },
    {
      product_id: 1245,
      product_name: "Candy Pink Sharara Suit",
      description: "Pro desc",
      discount: 30,  //in percent
      quantity: 1,
      weight: 250,    //in grams
      brand: "Kalki",
      rating: 4.4,
      reviews: 3456,
      product_care: "Do not use Bleach, Do not tumble dry",
      shipping_fee:
        { Local: 200, Zonal: 400, International: 600 }
      ,
      product_tag: [
        { names: ["sajid", "shadab", "danish", "Ahmed"] },
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      featured: true,
      created_at: "",
      updated_at: "",
  
      product_type: "variant",
  
  
      product_variants: [
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L"] },
        { color: "#00008b", images: ["/images/productimages/boys1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["M", "XL"] },
      ],
      category_id: 101,
      subcategory_id: 1001,
      vendor_id: 501,
      add_ons: [
        { title: "unstitched blouse fabric", price: 999 },
        { title: "ready size stitching", price: 999 },
  
      ],
    },
    {
      product_id: 126,
      product_name: "product For testing product overview",
      description: "Pro desc",
      discount: 30,  //in percent
      quantity: 2,
      weight: 250,    //in grams
      brand: "Kalki",
      rating: 4.4,
      reviews: 3456,
      product_care: "Do not use Bleach, Do not tumble dry",
      shipping_fee:
        { Local: 200, Zonal: 400, International: 600 }
      ,
      featured: true,
      created_at: "",
      updated_at: "",
      product_tag: [
  
        { fabric: ["Cotton", "Polyester", "Crepe", "Chiffon", "Lace", "Silk"] },
        { Occassion: ["Wedding", "Casual", "Reception", "Cocktail"] },
        { Look: ["Designer", "Traditional", "Fashion", "Contemporary"] }
      ],
      product_type: "variant",
  
      product_variants: [
        { color: "#ff0000", images: ["/images/productimages/men1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg", "/images/productimages/men1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg", "/images/productimages/men1.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 1000, size: ["S", "M", "L", "XL", "XXL"] },
        { color: "#ff7701", images: ["/images/productimages/boys3.jpg", "/images/productimages/boys1.jpg", "/images/productimages/boys2.jpg"], price: 2000, size: ["S", "M", "L"] },
        { color: "#000000", images: ["/images/productimages/men2.jpg", "/images/productimages/boys2.jpg"], price: 4000, size: ["M", "XL"] },
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      category_id: 101,
      subcategory_id: 1001,
      vendor_id: 501,
      add_ons: [
        { title: "unstitched blouse fabric", price: 999 },
        { title: "ready size stitching", price: 999 },
  
      ],
    },
   
  
  ]
  
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.cartData.findIndex(item => item.product_id === newItem.product_id);

      if (existingItemIndex !== -1) {
        state.cartData[existingItemIndex].quantity ++;
      } else {
        state.cartData.push(newItem);
      }
    },
    removeItem(state, action) {
      const productIdToRemove = action.payload;
      console.log(productIdToRemove);
      state.cartData = state.cartData.filter(item => item.product_id !== productIdToRemove);  
    },
    incrementQuantity(state, action) {
      const productIdToIncrement = action.payload;
      const itemToIncrement = state.cartData.find(item => item.product_id === productIdToIncrement);
      
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const productIdToDecrement = action.payload;
      const itemToDecrement = state.cartData.find(item => item.product_id === productIdToDecrement);

      if (itemToDecrement && itemToDecrement.quantity > 1) {
        itemToDecrement.quantity -= 1;
      }
    },
    clearCart(state,action) {
      state.cartData=[]
    }
  },
});



export const { addItem,removeItem,incrementQuantity,decrementQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;