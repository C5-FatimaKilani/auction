import { createSlice } from "@reduxjs/toolkit";


const products = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      //payload:all products
      state.products = action.payload;
    },

    addNewProduct: (state, action) => {
      //payload:new Products
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      //payload : id
      state.products = state.products.filter((product) => {
        return product.id != action.payload;
      });
    },

    setProductByID: (state, action) => {
      //payload:id
      state.products = action.payload;
    },
  },
});

export const { setProducts, addNewProduct, deleteProduct, setProductByID } =
  products.actions;

export default products.reducer;
