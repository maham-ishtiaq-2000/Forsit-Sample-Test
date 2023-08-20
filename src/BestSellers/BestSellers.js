import React from 'react';
import './BestSellers.css';
import GIF1 from './GIF1.gif';
import GIF2 from './GIF2.gif';
import SingleProduct from './SingleProduct';
import productsList from './Product';

const BestSellers = () =>{
    console.log(productsList)
    return(
        <>
          <p className='bestSellerHeader'>BEST SELLERS</p>
          <div className="row bestSellerDescp">
                <div className="col-sm-4 bestSellerItems">4 Items</div>
                <div class="col-sm-8">
                <div class="dropdown">
                    <button class="btn dropdown-toggle filterButton" type="button" data-toggle="dropdown">SORT BY
                    <span class="caret"></span></button>
                    <ul class="dropdown-menu" style={{"marginLeft" : "410px"}}>
                        <li><a className="dropDownElem" href="#">Top Rated</a></li>
                        <li><a className="dropDownElem" href="#">For You</a></li>
                        <li><a className="dropDownElem" href="#">From low to high</a></li>
                        <li><a className="dropDownElem" href="#">From High To Low</a></li>
                    </ul>
                    </div>
                </div>
          </div>
          <div className="row bestSellerContainer">
            <div className="col-sm-10 productsDiv">
                <div class="custom-container">
                <div class="row">
                    {productsList.map((item) => {
                        return(
                            <>
                                <div class="col-sm-4">
                                    <SingleProduct img={item.imgSrc}
                                    brand={item.brand}
                                    descp={item.descp}
                                    price={item.price}></SingleProduct>
                                </div>
                            </>
                        )
                    })}
                    
                    
                    
                </div>
                </div>
            </div>
            <div className="col-sm-2 adsDiv">
                <img src={GIF1} width="250px" height="250px" alt="Ad1"></img>
                <br></br>
                <img src={GIF2} width="250px" height="250px" alt="Ad2"></img>
            </div>
          </div>
       
        </>
    )
}

export default BestSellers;

