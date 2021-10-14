
import store from './Store'
import {updateQuantity, addToCart, removeFromCart} from './actionCreators'

//these tests are dependant on the above functions, which are tested independently.
it('should add to store-cart',()=>{
    store.dispatch(addToCart({test:'This is a test for adding to store',id:'test'}))
    expect(store.getState().cart).toEqual([{test:'This is a test for adding to store', id:'test'}])

})
it('should update store-cart',()=>{
    store.dispatch(updateQuantity('test',89))
    expect(store.getState().cart).toEqual([{test:'This is a test for adding to store', id:'test', quantity:89}])

})
it('should delete a product from the cart',()=>{
    store.dispatch(removeFromCart('test'))
    expect(store.getState().cart).toEqual([])
})