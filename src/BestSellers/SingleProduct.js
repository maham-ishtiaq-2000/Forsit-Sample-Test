import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) =>{
    return(
        <>
           <div className='singleProduct'>
              <img src={props.img} height={"300px"} alt={props.descp}></img>
              <h5>{props.brand}</h5>
              <p>{props.descp}</p>
              <p>⭐⭐⭐⭐⭐</p>
              <button>Add To Cart ${props.price}</button>
           </div>
        </>
    )
}

export default SingleProduct;