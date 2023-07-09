import { createSlice } from "@reduxjs/toolkit"; 
import { data } from '../../data'
import { toast } from "react-toastify";



const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    products: [...data.dealsList, ...data.headPhoneList],
    message: '',
    showCart: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            item.quantity++
            toast.info('Product quantity updated', {
                position: "bottom-left"
            })
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload)
            // item.quantity = item.quantity <= 1 ? 1 : (item.quantity -= 1)
            if(item.quantity <= 1) {
                item.quantity = 1
            } else {
                item.quantity--
                toast.info('Product quantity updated', {
                    position: 'bottom-left'
                })
            }
           
        },
        addToCart(state, action) {
            const newItem = action.payload
            const itemToAdd = state.products.find(item => item.id === newItem)

            if(itemToAdd) {
                // Check if the item already in the cart
                const existingItem = state.cartItems.find(item => item.id === newItem)

                if(existingItem) {
                    existingItem.quantity++
                    existingItem.totalPrice += newItem.price
                    toast.info('Product quantity updated', {
                        position: 'bottom-left'
                    })
                } else {
                    state.cartItems.push({...itemToAdd, quantity: 1})
                    toast.success('Product added to cart', {
                        position: "bottom-left"
                    })
                }

            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const id = action.payload

            state.cartItems = state.cartItems.filter(item => item.id !== id)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            toast.success('Product remove from cart successfully', {
                position: "bottom-left"
            })
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
          },
    }
})


export const { addToCart, removeFromCart, showCart, increaseQuantity, decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer