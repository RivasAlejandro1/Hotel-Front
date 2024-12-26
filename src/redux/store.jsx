import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers.jsx";

const store = configureStore({
    reducer: userSlice.reducer
});

export default store;