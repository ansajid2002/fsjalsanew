import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subcategoriesList: [
    
    {
        "subcategory_id": 54,
        "subcategory_name": "Watch Accessories",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 101,
        "created_at": "2023-09-13T13:11:44.282Z",
        "updated_at": "2023-09-13T13:11:44.282Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 55,
        "subcategory_name": "Women's Jewelery",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 101,
        "created_at": "2023-09-13T13:11:58.362Z",
        "updated_at": "2023-09-13T13:11:58.362Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 56,
        "subcategory_name": "Women's Glasses",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 101,
        "created_at": "2023-09-13T13:12:09.599Z",
        "updated_at": "2023-09-13T13:12:09.599Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 57,
        "subcategory_name": "Men's Glasses",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 101,
        "created_at": "2023-09-13T13:12:21.574Z",
        "updated_at": "2023-09-13T13:12:21.574Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 58,
        "subcategory_name": "Jewelry & Watches",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 101,
        "created_at": "2023-09-13T13:12:38.930Z",
        "updated_at": "2023-09-13T13:12:38.930Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 59,
        "subcategory_name": "Piercings",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 101. 
        ,
        "created_at": "2023-09-13T13:12:51.385Z",
        "updated_at": "2023-09-13T13:12:51.385Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 60,
        "subcategory_name": "Furniture",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 102,
        "created_at": "2023-09-13T13:13:12.268Z",
        "updated_at": "2023-09-13T13:13:12.268Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 61,
        "subcategory_name": "Kitchenware & Appliances",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 102,
        "created_at": "2023-09-13T13:13:22.415Z",
        "updated_at": "2023-09-13T13:13:22.415Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 62,
        "subcategory_name": "Home Decor",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 102,
        "created_at": "2023-09-13T13:13:32.519Z",
        "updated_at": "2023-09-13T13:13:32.519Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 63,
        "subcategory_name": "Tools & DIY",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 102,
        "created_at": "2023-09-13T13:13:45.496Z",
        "updated_at": "2023-09-13T13:13:45.496Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 64,
        "subcategory_name": "Skincare & Makeup",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 102,
        "created_at": "2023-09-13T13:14:07.579Z",
        "updated_at": "2023-09-13T13:14:07.579Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 65,
        "subcategory_name": "Haircare",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 37,
        "created_at": "2023-09-13T13:14:18.680Z",
        "updated_at": "2023-09-13T13:14:18.680Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 66,
        "subcategory_name": "Health & Wellness",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 102,
        "created_at": "2023-09-13T13:14:28.510Z",
        "updated_at": "2023-09-13T13:14:28.510Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 67,
        "subcategory_name": "Fragnances",
        "subcategory_description": " ",
        "subcategory_image_url": " ",
        "parent_category_id": 37,
        "created_at": "2023-09-13T13:14:39.893Z",
        "updated_at": "2023-09-13T13:14:39.893Z",
        "isfeatured": true
    },
    {
        "subcategory_id": 36,
        "subcategory_name": "Women's Abaya",
        "subcategory_description": " ",
        "subcategory_image_url": " https://static.thenounproject.com/png/544892-200.png",
        "parent_category_id": 15,
        "created_at": "2023-08-01T15:34:05.968Z",
        "updated_at": "2023-08-16T10:10:19.787Z",
        "isfeatured": true
    },
    ]
}
// sa
export const categorySlice = createSlice({
  name: "subcategorySlice",
  initialState: initialState,
  reducers: {

  },
}
)

export const {   } = categorySlice.actions

export default categorySlice.reducer