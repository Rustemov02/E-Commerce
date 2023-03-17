import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProduct = createAsyncThunk(
    'books/fetchBooks',
    async (type) => {
        const response = await axios.get(`https://fakestoreapi.com/${type}`)
        return response.data
    }
)

export const productSlice = createSlice({

    name: 'product',
    initialState: {
        data: [],
        cart: [],
        numberCart : 0,
        isActive: true,// I'm using that for "Skeleton"...if was "true" then Skeleton is hide blah blah blah...
        selectedItem: [],
        
    },
    reducers: {
        getSelectedItem: (state, { payload }) => {
            state.selectedItem = state.data.filter(item => item.id == payload)
        },
        getCart: (state, { payload }) => {  
            state.cart = [
                ...state.cart, { img: payload.image, title: payload.title, price: payload.price , count : 0 }
            ] 
            state.numberCart = state.cart.length 
             
        }
    },
    extraReducers: {
        // fulfilled  , pending , rejected

        [fetchProduct.fulfilled]: (state, { payload }) => {
            state.data = payload
            state.isActive = true
        },

        [fetchProduct.pending]: state => {
            state.isActive = false
        }
    }
})


export const { getSelectedItem, getCart } = productSlice.actions
export default productSlice.reducer