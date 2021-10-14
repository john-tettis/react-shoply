import {createStore, combineReducers} from 'redux'
import data from './data.json'

const INITIAL={
    cart:[],
    products:data.products,
    discount:null
}
Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );

let cartReducer = (state=INITIAL.cart, {type,payload})=>{
    switch(type){
        case 'ADD_TO_CART':
            console.log('adding:',payload)
            return [...state, payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item=>item.id!==payload.id)
        case 'UPDATE_QUANTITY':

            return state.map(i=> i.id!== payload.id ? i: {...i, quantity:payload.quantity})
        default: return state
    }
}

let discountReducer=(state=INITIAL.discount, {type,payload})=>{
    switch(type){
        case 'ACTIVATE_DISCOUNT':
            if(state!==null){
                throw new Error('Can only activate one discount at a time.')
            }
            else{
                return payload
            }
        case 'DEACTIVATE_DISCOUNT':
            return null
        default: return state
    }
}

let productReducer= (state=INITIAL.products)=>{
    return state
}

const rootReducer= combineReducers({cart:cartReducer, products: productReducer, discount:discountReducer})
const store = createStore(rootReducer)
export default store