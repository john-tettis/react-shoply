import React, {useState}from "react";
import {useDispatch} from 'react-redux'
import { addToCart,removeFromCart,updateQuantity } from "./actionCreators";
import {Link} from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function Product({data, cart}){
    let {name,price,image_url,id} = data
    let [quantity, setQuantity] = useState(data.quantity)
    let [inCart,setInCart] = useState(cart)
    
    let dispatch= useDispatch()

    const handleChange=(e)=>{
        setQuantity(e.target.value)
        dispatch(updateQuantity(id,e.target.value))
    }
    const addItem=()=>{
        setInCart(true)
        setQuantity(1)
        dispatch(addToCart({...data, quantity:1}))
    }
    const removeItem=(e)=>{
        setInCart(false)
        setQuantity(0)
        dispatch(removeFromCart(id))
    }

   

    return(
        <Card key={id} className='product clickable'>
            <CardImg top className='product-image' src={image_url} alt="Card image cap" />
            <CardBody className='d-flex flex-column justify-content-around'>
            <CardTitle ClassName='display-5'tag="h5">{name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2  text-muted">${price}</CardSubtitle>
            {inCart && <div class="form-outline">
                            <label class="form-label" for="typeNumber">Quantity</label>
                            <input value = {quantity} onChange={handleChange}type="number" id="typeNumber" class="form-control" />
                            
                        </div>}
            
            <Button className='m-2' onClick={inCart ? removeItem:addItem}color='success'>{inCart? 'Remove from Cart':'Add to Cart'}</Button>
            <Link to={`/products/${id}`}>See more on this item</Link>
            
            
            </CardBody>
        </Card>
    )
}