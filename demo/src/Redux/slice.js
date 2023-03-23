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
        numberCart: 0,  // The number of items available on the card
        isActive: true, // I'm using that for "Skeleton"...if was "true" then Skeleton is hide blah blah blah...
        selectedItem: [],  // When I click on any item , it populates this data with its information 
        actualImg: 'deneme',
        quantityOfCartItem: []
    },
    reducers: {
        getSelectedItem: (state, { payload }) => {
            state.selectedItem = state.data.filter(item => item.id == payload)
        },
        getCart: (state, { payload }) => {
            state.cart = [
                ...state.cart, { img: payload.image, title: payload.title, price: payload.price, quantity: 1 }
            ]
            state.numberCart = state.cart.length
        },
        increase: (state, { payload }) => {
            state.quantityOfCartItem = state.cart.filter((item => item.title == payload))
            state.quantityOfCartItem[0].quantity += 1
            console.log(state.quantityOfCartItem)
            console.log(state.quantityOfCartItem[0].quantity)

            // console.log(payload)
            // console.log(state.cart[1].title)
        }
    },
    extraReducers: {
        // fulfilled  , pending , rejected

        [fetchProduct.fulfilled]: (state, { payload }) => {
            state.data = payload
            state.isActive = true
            console.log('fulfilled')
        },
        [fetchProduct.pending]: state => {
            state.isActive = true
            console.log('pending')
        },
        [fetchProduct.rejected]: state => {
           console.log('rejected') 
        }
    }
})


export const { getSelectedItem, getCart, increase } = productSlice.actions
export default productSlice.reducer