import React from 'react';
import '../../../node_modules/tailwindcss/tailwind.css';
import { useDispatch } from 'react-redux';
import './Product.css'
import { addToCart } from '../../features/Cart/cartSlice';


const Product = ( {product} )=>{
    const dispatch = useDispatch()

    const addItemTocart = () => {
        const res = dispatch(addToCart(product.id))
        console.log(res)
    }

  return(
    <li className='production-container'>
        <img src={product.imageUrl} alt='product-pic'/>
        <h4>{product.name}</h4>
        <h5>{product.brand}</h5>
        <p>{product.price}</p>
        <button type='button' onClick={addItemTocart} >Add to cart</button>
    </li>
  )


}


export default Product;