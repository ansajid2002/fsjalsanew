import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
// import "../../assets/images/flags/"
const initialState = {
    defaultCurrency : "Indian Rupee",
    currencyCode : "INR",
    c_symbol : "₹",
    // availablecountries: [
    //   {
    //     name: "India",
    //     image:,
    //     currency: [
    //       { name: "Indian Rupee", code: "INR",symbol:"₹" },
    //       { name: "US Dollar", code: "USD",symbol:"$" }
    //     ],
    //     languages: [
    //       { name: "English", langcode: "en" },
    //       { name: "Hindi", langcode: "hi" }
    //     ]
    //   },
    //   {
    //     name: "Somalia",
    //     image:,
    //     currency: [
    //       { name: "Somali Shilling", code: "SOS" ,symbol:"S"},
    //       { name: "US Dollar", code: "USD",symbol:"$" }
    //     ],
    //     languages: [
    //       { name: "English", langcode: "en" },
    //       { name: "Somali", langcode: "so" },
    //       { name: "Arabic", langcode: "ar" }
    //     ]
    //   },
    //   {
    //     name: "Kenya",
    //     image:,
    //     currency: [
    //       { name: "Kenyan Shilling", code: "KES",symbol:"Ksh" },
    //       { name: "US Dollar", code: "USD",symbol:"$" }
    //     ],
    //     languages: [
    //       { name: "English", langcode: "en" },
    //       { name: "Swahili", langcode: "sw" }
    //     ]
    //   },
    //   {
    //     name: "Ethiopia",
    //     image:require("../../assets/images/flags/ethiopia.png"),
    //     currency: [
    //       { name: "Ethiopian Birr", code: "ETB",symbol:"Br" },
    //       { name: "US Dollar", code: "USD",symbol:"$" }
    //     ],
    //     languages: [
    //       { name: "English", langcode: "en" },
    //       { name: "Amharic", langcode: "am" },
    //     ]
    //   },
    //   {
    //     name: "France",
    //     image:require("../../assets/images/flags/france.png"),
    //     currency: [
    //       { name: "Euro", code: "EUR",symbol:"€" }, 
    //       { name: "US Dollar", code: "USD" ,symbol:"$"}
    //     ],
    //     languages: [
    //       { name: "English", langcode: "en" },
    //       { name: "French", langcode: "fr" }
    //     ]
    //   }
    // ],
    appcountry:"Somalia"
    
    
}




export const currencySlice = createSlice ({
   name:"currencyslice",
   initialState,
   reducers : {
    setCurrency: (state, action) => {
       
        const {name,code ,symbol} = action.payload;
    

        return {
          ...state,
          defaultCurrency : name,
          currencyCode : code,
          c_symbol:symbol
        };
      },
      setAppcountry : (state,action) => {
        return {
          ...state,
          appcountry:action.payload
        }
      }
   } 
})

export const { setCurrency ,setAppcountry} = currencySlice.actions

export default currencySlice.reducer