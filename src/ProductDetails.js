import React from 'react';
import {useParams, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { addToCart,removeFromCart,updateQuantity } from "./actionCreators";
import {Link} from "react-router-dom"
import {
    Card,CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



const ProductDetails = ()=>{
    let dispatch = useDispatch();
    let {id}=useParams();
    let product = useSelector(state=> state.products[id])
    let cart = useSelector(state=>state.cart)
    let inCart = useSelector(state=>state.cart.some(i=>i.id===id))
    console.log({inCart})
    let quantity;
    const addItem=()=>{
        dispatch(addToCart({...product,id:id, quantity:1}))
    }
    const removeItem=(e)=>{
        dispatch(removeFromCart(id))
    }
    const handleChange=(e)=>{
        dispatch(updateQuantity(id,e.target.value))
    }
    if(inCart){
        quantity = cart.find(item=>item.id===id).quantity
    }
    if(!product){
        return <Redirect to='/'/>
    }
    let {image_url, description, name,price}=product;
    return (
        <div className='container-fluid d-flex justify-content-center text-center'>
            <Card key={id} className='product w-75'>
                <CardImg top className='product-image' src={image_url} alt="Card image cap" />
                <CardBody className='d-flex flex-column justify-content-start'>
                <CardTitle className='display-5' tag="h5">{name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2  text-muted">${price}</CardSubtitle>
                <CardText>{description}</CardText>
                {inCart && <div class="form-outline">
                                <label class="form-label" for="typeNumber">Quantity</label>
                                <input value = {quantity} onChange={handleChange}type="number" id="typeNumber" class="form-control" />
                                
                            </div>}
                
                <Button className='m-2' onClick={inCart ? removeItem:addItem}color='success'>{inCart? 'Remove from Cart':'Add to Cart'}</Button>
                <Link to='/'>Return home</Link>
                
                
                </CardBody>
            </Card>
        </div>
        
    )

}


export default ProductDetails