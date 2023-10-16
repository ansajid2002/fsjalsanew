import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesList: [
    {
    "category_id": 101,
    "category_name": "Salwar Kameez",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T07:22:46.378Z",
    "updated_at": "2023-09-13T07:22:46.378Z",
    "category_type": "Services"
    },
    {
    "category_id": 102,
    "category_name": "Kurtis",
    "category_description": " ",
    "category_image_url": "https://www.svgrepo.com/show/520749/girl-dress.svg",
    "category_status": true,
    "created_at": "2023-09-01T05:34:35.277Z",
    "updated_at": "2023-09-01T05:34:35.277Z",
    "category_type": "Products"
    },
    {
    "category_id": 103,
    "category_name": "Mens",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:34:31.390Z",
    "updated_at": "2023-09-13T09:34:31.390Z",
    "category_type": "Products"
    },
    {
    "category_id": 104,
    "category_name": "Blouses",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:34:43.165Z",
    "updated_at": "2023-09-13T09:34:43.165Z",
    "category_type": "Products"
    },
    {
    "category_id": 105,
    "category_name": "Wedding",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:34:57.867Z",
    "updated_at": "2023-09-13T09:34:57.867Z",
    "category_type": "Products"
    },
    {
    "category_id": 106,
    "category_name": "Unstitched",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:35:13.289Z",
    "updated_at": "2023-09-13T09:35:13.289Z",
    "category_type": "Products"
    },
    {
    "category_id": 107,
    "category_name": "Kids",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:35:27.274Z",
    "updated_at": "2023-09-13T09:35:27.274Z",
    "category_type": "Products"
    },
    {
    "category_id": 108,
    "category_name": "Home & Living",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:35:39.240Z",
    "updated_at": "2023-09-13T09:35:39.240Z",
    "category_type": "Products"
    },
    {
    "category_id": 109,
    "category_name": "Formal",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:35:51.731Z",
    "updated_at": "2023-09-13T09:35:51.731Z",
    "category_type": "Products"
    },
    {
    "category_id": 110,
    "category_name": "Party Wear",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:36:03.205Z",
    "updated_at": "2023-09-13T09:36:03.205Z",
    "category_type": "Products"
    },
    {
    "category_id": 43,
    "category_name": "Automotive",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:36:16.960Z",
    "updated_at": "2023-09-13T09:36:16.960Z",
    "category_type": "Products"
    },
    {
    "category_id": 44,
    "category_name": "Baby & Kids",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",

    "category_status": true,
    "created_at": "2023-09-13T09:36:29.708Z",
    "updated_at": "2023-09-13T09:36:29.708Z",
    "category_type": "Products"
    },
    {
    "category_id": 45,
    "category_name": "Office & School Supplies",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:36:42.007Z",
    "updated_at": "2023-09-13T09:36:42.007Z",
    "category_type": "Products"
    },
    {
    "category_id": 46,
    "category_name": "Art & Collectibles",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:36:55.764Z",
    "updated_at": "2023-09-13T09:36:55.764Z",
    "category_type": "Products"
    },
    {
    "category_id": 15,
    "category_name": "Women's Clothing",
    "category_description": " ",
    "category_image_url": " https://www.svgrepo.com/show/157325/women-clothing.svg",
    "category_status": true,
    "created_at": "2023-08-01T12:03:19.508Z",
    "updated_at": "2023-08-01T12:03:19.508Z",
    "category_type": "Products"
    },
    {
    "category_id": 49,
    "category_name": "Home Appliances",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:37:30.138Z",
    "updated_at": "2023-09-13T09:37:30.138Z",
    "category_type": "Products"
    },
    {
    "category_id": 50,
    "category_name": "Music & Instruments",
    "category_description": "  ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:37:42.963Z",
    "updated_at": "2023-09-13T09:37:42.963Z",
    "category_type": "Products"
    },
    {
    "category_id": 51,
    "category_name": "Freelance Services",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:38:06.895Z",
    "updated_at": "2023-09-13T09:38:06.895Z",
    "category_type": "Services"
    },
    {
    "category_id": 52,
    "category_name": "Real Estate",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:38:18.805Z",
    "updated_at": "2023-09-13T09:38:18.805Z",
    "category_type": "Services"
    },
    {
    "category_id": 53,
    "category_name": "Event Services",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:38:30.026Z",
    "updated_at": "2023-09-13T09:38:30.026Z",
    "category_type": "Services"
    },
    {
    "category_id": 54,
    "category_name": "Electronics Repair",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:38:44.112Z",
    "updated_at": "2023-09-13T09:38:44.112Z",
    "category_type": "Services"
    },
    {
    "category_id": 55,
    "category_name": "Jobs & Services",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:38:53.874Z",
    "updated_at": "2023-09-13T09:38:53.874Z",
    "category_type": "Services"
    },
    {
    "category_id": 56,
    "category_name": "Health and Fitness Services",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:39:04.316Z",
    "updated_at": "2023-09-13T09:39:04.316Z",
    "category_type": "Services"
    },
    {
    "category_id": 57,
    "category_name": "Business Services",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:39:15.325Z",
    "updated_at": "2023-09-13T09:39:15.325Z",
    "category_type": "Services"
    },
    {
    "category_id": 58,
    "category_name": "Food Delivery Services",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:39:26.116Z",
    "updated_at": "2023-09-13T09:39:26.116Z",
    "category_type": "Services"
    },
    {
    "category_id": 59,
    "category_name": "Education & Learning",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:39:37.996Z",
    "updated_at": "2023-09-13T09:39:37.996Z",
    "category_type": "Services"
    },
    {
    "category_id": 60,
    "category_name": "Beauty Services",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:39:49.564Z",
    "updated_at": "2023-09-13T09:39:49.564Z",
    "category_type": "Services"
    },
    {
    "category_id": 61,
    "category_name": "Travel & Experience",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:40:02.171Z",
    "updated_at": "2023-09-13T09:40:02.171Z",
    "category_type": "Services"
    },
    {
    "category_id": 62,
    "category_name": "Handmade & Crafts",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:40:14.341Z",
    "updated_at": "2023-09-13T09:40:14.341Z",
    "category_type": "Services"
    },
    {
    "category_id": 63,
    "category_name": "Dating",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:40:26.476Z",
    "updated_at": "2023-09-13T09:40:26.476Z",
    "category_type": "Services"
    },
    {
    "category_id": 47,
    "category_name": "Smart Devices",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:37:07.039Z",
    "updated_at": "2023-09-13T09:37:07.039Z",
    "category_type": "Products"
    },
    {
    "category_id": 48,
    "category_name": "Electronic Accessories",
    "category_description": " ",
    "category_image_url": " ",
    "category_status": true,
    "created_at": "2023-09-13T09:37:18.966Z",
    "updated_at": "2023-09-13T09:37:18.966Z",
    "category_type": "Products"
    },
    {
    "category_id": 12,
    "category_name": "Electronics",
    "category_description": "hey this is some text about description\n",
    "category_image_url": "https://i.ibb.co/TYJr94V/electronics.jpg",
    "category_status": true,
    "created_at": "2023-07-27T04:56:21.153Z",
    "updated_at": "2023-07-27T04:56:21.153Z",
    "category_type": "Products"
    }
    ]
}
// sa
export const categorySlice = createSlice({
  name: "categorySlice",
  initialState: initialState,
  reducers: {

  },
}
)

export const {   } = categorySlice.actions

export default categorySlice.reducer