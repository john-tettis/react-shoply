import React from "react";
import {useSelector} from "react-redux"
import Product from "./Product"
import DiscountForm from "./DiscountForm"



const Cart=()=>{
    const products = useSelector(state=>state.cart)

    let total = products.reduce((acc, curr)=>{
        return acc + (curr.price * curr.quantity)
    },0)


    return(
        <div className='container d-flex flex-column justify-content-start'>
            <h2 className='text-center'>Cart:</h2>
            <div className='container d-flex flex-row flex-wrap justify-content-start'>
                {products.map(p=><Product data={p} cart/>)}
                {total!==0 && total ? <DiscountForm total={total}/>:<div className='lead w-100 text-center'>No items in Cart!</div>}
            </div>

        </div>
    )

}


export default Cart;