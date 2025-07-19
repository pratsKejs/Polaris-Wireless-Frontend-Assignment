import { createSlice } from "@reduxjs/toolkit";
import {
  dressURL1,
  dressURL2,
  dressURL3,
  dressURL4,
  dressURL5,
  dressURL6,
  dressURL7,
  dressURL8,
} from "../assets";

const initialState = {
  products: [
    {
      id: 1,
      name: "Adicolor Classics Joggers",
      category: "Dress",
      price: "$63.85",
      imageURL: dressURL1,
    },
    {
      id: 2,
      name: "Nike Sportswear Futura Luxe",
      category: "Bag",
      price: "$130.00",
      imageURL: dressURL2,
    },
    {
      id: 3,
      name: "Geometric Print Scarf",
      category: "Scarf",
      price: "$53.00",
      imageURL: dressURL3,
    },
    {
      id: 4,
      name: "Yellow Reserved Hoodie",
      category: "Dress",
      oldPrice: "$364.00",
      price: "$155.00",
      imageURL: dressURL4,
    },
    {
      id: 5,
      name: "Basic Dress Green",
      category: "Dress",
      price: "$236.00",
      imageURL: dressURL5,
    },
    {
      id: 6,
      name: "Nike Air Zoom Pegasus",
      category: "Shoe",
      oldPrice: "$230.00",
      price: "$130.00",
      imageURL: dressURL6,
    },
    {
      id: 7,
      name: "Nike Repel Miler",
      category: "Dress",
      price: "$120.50",
      imageURL: dressURL7,
    },
    {
      id: 8,
      name: "Nike Sportswear Futura Luxe",
      category: "Glasses",
      price: "$160.00",
      imageURL: dressURL8,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
