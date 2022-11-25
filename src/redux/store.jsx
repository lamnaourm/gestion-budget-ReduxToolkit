import { configureStore } from "@reduxjs/toolkit";
import DepenseReducer from "./DepenseSlice";

const store = configureStore({reducer: DepenseReducer});

export default store;