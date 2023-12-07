import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItem(state, action) {
      const newItemId = action.payload?.uniquepid;
      const label = action.payload?.label;

      // Filter the items based on the label condition
      const filteredItems = state.cartItems.filter(item => {
        if (label != null && label !== undefined) {
          return item?.uniquepid === newItemId && item?.label === label;
        }
        return item?.uniquepid === newItemId;
      });

      // Use the find method on the filtered array
      const existingItem = filteredItems.find(item => true);

      if (existingItem) {
        existingItem.added_quantity++;
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeItem(state, action) {
      const itemID = action.payload?.itemId;
      const { label } = action.payload?.item;
      console.log(label);

      state.cartItems = state.cartItems.filter(item => {
        if (item.label === undefined) {
          return item.uniquepid !== itemID;
        } else {
          return item.uniquepid !== itemID && item.label !== label;
        }
      });
    },

    incrementItem(state, action) {
      const { item, itemId } = action.payload
      const { label } = item
   
      state.cartItems = state.cartItems.map(item => {
        if (item.uniquepid === itemId && (item.variantlabel === label || (item.variantlabel == null && label == null))) {
          item.added_quantity++;
        }
        return item;
      });
    },

    updateproductsListcart: (state, action) => {
      state.cartItems = action.payload;
    },


    decrementItem(state, action) {
      state.cartItems = state.cartItems.map(item => {
        if (item.uniquepid === action.payload) {
          item.added_quantity--;
        }
        return item;
      }).filter(item => item.added_quantity !== 0);
    },

    emptyCart: (state) => {
      state.cartItems = initialState.cartItems; // Clears the cartItems array
    },

    addCarts(state, action) {
      const newItems = action.payload;
      const existingUniqueIds = state.cartItems.map(item => item?.uniquepid);

      // Filter out items with the same uniqueid and label if it exists
      const filteredNewItems = newItems.filter(newItem => {
        return (
          !existingUniqueIds.includes(newItem?.uniquepid) &&
          (!newItem.label || !state.cartItems.some(item => item.label === newItem.label))
        );
      });

      // Append the filtered new items to the existing cartItems array
      state.cartItems = [...state.cartItems, ...filteredNewItems];
    }
  },
});



export const { addItem, removeItem, incrementItem, decrementItem, updateproductsListcart, emptyCart, addCarts } = cartSlice.actions;
export default cartSlice.reducer;