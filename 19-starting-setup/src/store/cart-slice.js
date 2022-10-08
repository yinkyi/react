import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.development";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQty:0,
        changed:false
    },
    reducers:{
        replaceCart(state,action){
            state.totalQty=action.payload.totalQty;
            state.items = action.payload.items;
        },
        addItemToCart(state,action){
            state.changed = true;
            const newItem = action.payload;  
            console.log(state.items);
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            } 
            
            state.totalQty = state.totalQty +1;
        },
        removeItemCart(state,action){
            state.changed = true;
            const id = action.payload;  
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem){
                if(existingItem.quantity>1){
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                }else{
                    state.items = state.items.filter(item=>item.id !== id);
                }

                state.totalQty = state.totalQty -1>0?state.totalQty -1:0;
            }
            
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;