import { createSlice } from "@reduxjs/toolkit"; 
import { data } from '../../data'


const initialState = {
    headsets: [],
    headPhoneList: data.headPhoneList,
    message: '',
    showCart: false
}

const headPhoneSlice = createSlice({
    name: 'headset',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const item = state.headsets.find(item => item.id === action.payload)
            item.quantity++
            toast.info('Product quantity updated')
        },
        decreaseQuantity: (state, action) => {
            const item = state.headsets.find(item => item.id === action.payload)
            item.quantity = item.quantity <= 1 ? 1 : (item.quantity -= 1)
            toast.info('Product quantity updated')
        },
        addToCart(state, action) {
            const newItem = action.payload
            const itemToAdd = state.headPhoneList.find(item => item.id === newItem)

            if(itemToAdd) {
                // Check if the item already in the cart
                const existingItem = state.headsets.find(item => item.id === newItem)

                if(existingItem) {
                    existingItem.quantity++
                    existingItem.totalPrice += newItem.price
                } else {
                    state.headsets.push({...itemToAdd, quantity: 1})
                }

            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            const existingItem = state.headsets.find(item => item.id === id)

            if(existingItem.quantity === 1) {
                state.headsets = state.headsets.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price;
            }

            state.headsets = state.headsets.filter(item => item.id !== id)
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
          },
    }
})


export const { addToCart, removeFromCart, showCart, increaseQuantity, decreaseQuantity } = headPhoneSlice.actions

export default headPhoneSlice.reducer