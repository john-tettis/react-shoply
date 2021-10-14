import {updateQuantity, addToCart, removeFromCart} from './actionCreators'
import {UPDATE_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes'

describe('cart functions',()=>{

    it('should return properly formatted action',()=>{
        expect(updateQuantity('test_id',67)).toEqual({
            type:UPDATE_QUANTITY,
            payload:{
                id:'test_id',
                quantity:67
            }
        })
        expect(addToCart('TEST ITEM')).toEqual({
            type:ADD_TO_CART,
            payload:'TEST ITEM'
        })
        expect(removeFromCart('TEST ID')).toEqual({
            type:REMOVE_FROM_CART,
            payload:{
                id:'TEST ID'
            }
        })
    })
})