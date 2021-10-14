import React from "react";
import {useSelector} from "react-redux"
import Product from "./Product"



const ProductList=()=>{
    const products = useSelector(state=>state.products)
    

    let formattedProducts=[]

    for(let [key,val] of Object.entries(products)){
        let data = {...val,id:key}
        formattedProducts.push(<Product data={data}/>)
    }

   


    return(
        <div className='container d-flex flex-row flex-wrap justify-content-center'>
            {formattedProducts}
        </div>
    )

}


export default ProductList;