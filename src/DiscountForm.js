import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Alert} from 'reactstrap'
import { activateDiscount, deactivateDiscount } from './actionCreators';

const defaul = {
    REMOVE10:{
        name:'REMOVE10',
        discount: '10% off',
        func:function(val){
            return Number((val*.9).toFixed(2))
        }
    },
    REMOVE20:{
        name:'REMOVE20',
        discount: '20% off',
        func:function(val){
            return Number((val*.8).toFixed(2))
        }
    },
    REMOVE30:{
        name:'REMOVE30',
        discount: '30% off',
        func:function(val){
            return Number((val*.7).toFixed(2))
        }
    }
}
export default function DiscountForm({codes=defaul, total}){
    let dispatch = useDispatch();
    let discount = useSelector(state=>state.discount)
    console.log({discount})
    let [input, setInput] = useState('')
    let [error, setError] = useState(null)


    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const addDiscount=(e)=>{
        e.preventDefault();
        if(input in codes){
            setError(null)
            if(discount){
                setError('You can only activate one discount code at a time.')
            }
            else{
                dispatch(activateDiscount(codes[input]))
            }
        }
        else{
            setError('Invalid discount code!')
        }
        setInput('')
    }
    const removeDiscount=()=>{
        dispatch(deactivateDiscount())
    }

    return(
        <form className='discount-form text-start'onSubmit={addDiscount}>
            <p className='lead mb-2 w-100'>Subtotal: <span className='float-right'>${total}</span></p>
            <p className='lead mb-2 w-100'>Total: <span className='float-right'>${discount? discount.func(total):total}</span></p>
            <label className='mb-2' htmlFor='discount'>Add discount code:</label>
            <input className='form-control' id='discount' name='discount' placeholder='REMOVE20' onChange={handleChange} value={input}></input>
            {error&&<p className='text-danger w-100 text-start'>{error
            }</p>}
            {discount&& 
            <Alert onClick={removeDiscount} className='p-2 mt-2 w-100 discount'>
                {discount.name} &nbsp; - &nbsp;
                {discount.discount}
            </Alert>}
        </form>
    )

}