import { createAction, createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalAmount:0,
        totalQuantity:0
    },
    reducers:{
        additemtoCart (state,action){
            const newitem=action.payload
            const existingitem=state.items.find(item=>item.id===newitem.id)
            state.totalQuantity++

            if(!existingitem){
                state.items.push({itemid:newitem.id, price:newitem.price  ,quantity:1 , totalprice:newitem.price ,name:newitem.title})
            }else{
                existingitem.quantity++
                existingitem.totalprice=existingitem.totalprice+newitem.price;
            }
        },
        removeitemfromCart(state,action){
            const id =action.payload;
            const existingitem=state.items.find(item=>item.id===id) ;
            state.totalQuantity--
            if(existingitem.quantity==1){
                state.items=state.items.filter(item=>item.id !==id)

            }
            else{
                existingitem.quantity--
            }
        }
    }
})

export const cartAction=cartSlice.actions
export default cartSlice