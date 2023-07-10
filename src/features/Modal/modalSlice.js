import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        toggle: false
    },
    reducers: {
        showToggle: (state) => {
            state.toggle = !state.toggle
        }
    }
})


export const { showToggle } = modalSlice.actions

export default modalSlice.reducer