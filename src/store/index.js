import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import currencySlice from "./slices/currencySlice";
export const store = configureStore({

    reducer: {
            categories: categorySlice,
            products:productSlice,
            selectedCurrency: currencySlice,

    },

})


