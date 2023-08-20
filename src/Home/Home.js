import React,{useEffect} from "react";
import Header from "../Header/Header";
import logo from '../logo2.jpg';
import BestSellers from "../BestSellers/BestSellers";
import './Home.css';

const Home = () =>{
    useEffect(() => {
      alert("You can access comment page while pressing Comment in header and Home page while pressing the logo of the header")
    },[])
    return(
        <>
          <Header></Header>
          <div className="homeHeader">
            <p className="homeHeading"><i><b>Elevate Your Style: Shop Now and Embrace Effortless Elegance!</b></i></p>
            <hr className="homeHorizontalLine"></hr>
          </div>
          <div className="container" >

          <div id="myCarousel" className="carousel slide carouselHome" data-ride="carousel" >



            <div class="carousel-inner" style={{"height" : "400px"}}>
              <div class="item active">
                <img src="https://www.nykaa.com/media/wysiwyg/640x320_mobile_bestbeauty_30aug.jpg" alt="Slide1" style={{"width":"100%", "height":"auto", "max-height":"600px"}} />
              </div>

              <div class="item">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Slide2" style={{"width":"100%", "height":"auto", "max-height":"500px"}} />
              </div>
            
              <div class="item">
                <img src="https://static.toiimg.com/thumb/msid-78297631,width-1070,height-580,imgsize-253006,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="New york" style={{"width":"100%", "height":"auto", "max-height":"400px"}} />
              </div>
            </div>

            
          </div>
        </div>

          
        
<BestSellers></BestSellers>
        </>
    )
}

export default Home;