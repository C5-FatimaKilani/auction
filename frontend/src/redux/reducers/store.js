import {configureStore} from '@reduxjs/toolkit'

import auction from "./auction";
import authReducer from "./auth";
import productsReducer from "./products";

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    auctions: auction,
  },
});
