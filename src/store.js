import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/Cart/cartSlice'
import headReducer from './features/HeadPhone/headPhoneSlice'
import modalReducer from './features/Modal/modalSlice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
        head: headReducer,
        modal: modalReducer,
    }
})


export default store