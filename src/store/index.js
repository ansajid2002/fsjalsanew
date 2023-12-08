import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
import currencySlice from "./slices/currencySlice";
import subcategoriesSlice from "./slices/subcategoriesSlice";
import cartSlice from "./slices/cartSlice";
import  wishlistSlice  from "./slices/wishlist";
export const store = configureStore({

    reducer: {
            categories: categorySlice,
            products:productSlice,
            selectedCurrency: currencySlice,
            subcategories:subcategoriesSlice,
            cart:cartSlice,
            wishlist:wishlistSlice

    },

})


