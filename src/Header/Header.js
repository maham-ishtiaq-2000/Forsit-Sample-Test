import React from "react";
import logo from '../logo2.png';
import diamond from '../diamond.png';
import './Header.css';

const Header = () => {
    return(
        <>
           <nav class="navbar navbar-inverse headerContainer">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                <a class="headerLogo" href="/"><img src={logo} width="70px" height="70px" alt="logo" /></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav headerLinks" >
                    <li><a href="#" style={{"color" : "white" , "fontWeight" : "bold"}}>NEW</a></li>
                    <li><a href="#"style={{"color" : "white" , "fontWeight" : "bold"}}>COLLECTIONS</a></li>
                    <li><a className="borderLink" href="#" style={{"color" : "white" , "fontWeight" : "bold"}}>HOT</a></li>
                    <li><a href="#" style={{"color" : "white" , "fontWeight" : "bold"}}>BEST SELLERS</a></li>
                    <li><a href="#" style={{"color" : "white" , "fontWeight" : "bold"}}>
                    <div className="dropdown">
                        <li className="dropdown-toggle" data-toggle="dropdown">MAKEUP</li>
                        <ul class="dropdown-menu headerMakeupProducts">
                        <div class="row">
                        <div class="col-sm-4" >
                            <p style={{"marginLeft" : "38px" , color : "black" , textDecoration : "underline"}}>Face</p>
                            <ul className="makeUpLists">
                                <li>Face Wash</li>
                                <li>Powder</li>
                                <li>Prime & Set</li>
                            </ul>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p style={{"marginLeft" : "38px" , color : "black" , textDecoration : "underline"}}>Minis</p>
                            
                        </div>
                        <div class="col-sm-4">
                        <p style={{"marginLeft" : "38px" , color : "black" , textDecoration : "underline"}}>Lips</p>
                            <ul className="makeUpLists">
                                <li>Lip Gloss</li>
                                <li>Lip Stick</li>
                                <li>Lip Balm</li>
                                <li>Matte & Nude LipsStick</li>
                            </ul>
                        </div>
                        <div class="col-sm-4">
                        <p style={{"marginLeft" : "38px" , color : "black" , textDecoration : "underline"}}>Eyes</p>
                            <ul className="makeUpLists">
                                <li>EyeLiner</li>
                                <li>Mascarra</li>
                                <li>EyeShadows</li>
                                <li>False Lashes</li>
                            </ul>
                        </div>
                        </div>
                        </ul>
                    </div></a></li>
                    <li><a href="#" style={{"color" : "white" , "fontWeight" : "bold"}}>SKINCARE</a></li>
                    <li><a href="#" style={{"color" : "white" , "fontWeight" : "bold"}}>SETS</a></li>
                    <li><a href="/comments" className="borderLink" style={{"color" : "white" , "fontWeight" : "bold"}}>COMMENTS</a></li>
                    <li><a href="#" style={{"color" : "white" , "fontWeight" : "bold"}}>REWARDS <img src={diamond} width="20px" height="20px" alt="logo" style={{"marginBottom" : "2px"}}/></a></li>   
                </ul>
               
                <ul class="nav navbar-nav navbar-right headerRight">    
                    <li >
                    <div class="dropdown">
                        <button className="btn dropdown-toggle headerSignUp" type="button" data-toggle="dropdown"><i class="fa fa-user" style={{"font-size":"30px","color":"white"}}></i></button>
                        <ul class="dropdown-menu headerShoppingCart">
                            <button>Sign IN OR JOIN</button>
                        </ul>
                        </div>
                    </li>
                    <li>
                    <div class="dropdown">
                        <button className="btn dropdown-toggle headerSignUp" type="button" data-toggle="dropdown"><i class="fa fa-heart" style={{"font-size":"30px","color":"white"}}></i></button>
                
                    </div>
                    </li>
                    <li>
                    <div class="dropdown">
                        <button className="btn dropdown-toggle headerSignUp" type="button" data-toggle="dropdown"><i class="fa fa-shopping-cart" style={{"font-size":"30px","color":"white"}}></i></button>
                        <ul class="dropdown-menu headerShoppingCart">
                            <h5>Shopping Bag</h5>
                            <br></br>
                            <p>Please SignIn to view shopping cart</p>
                        </ul>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            
        </>
    );
}

export default Header;