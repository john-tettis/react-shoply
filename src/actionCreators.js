import {UPDATE_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, ACTIVATE_DISCOUNT, DEACTIVATE_DISCOUNT} from './actionTypes'




export function updateQuantity(id,quantity){

    return{
        type:UPDATE_QUANTITY,
        payload:{
            id,quantity,
        }
    }
}

export function addToCart(product){
    return{
        type:ADD_TO_CART,
        payload:product
    }
}


export function removeFromCart(id){
    return{
        type:REMOVE_FROM_CART,
        payload:{id}
    }
}

export function activateDiscount(payload){
    return {
        type:ACTIVATE_DISCOUNT,
        payload
    }
}

export function deactivateDiscount(){
    return{
        type:DEACTIVATE_DISCOUNT
    }
}