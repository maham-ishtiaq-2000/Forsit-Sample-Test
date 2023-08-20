import React from "react";
import Header from '../Header/Header';
import './Comments.css';

const Comments = () =>{
    return(
        <>
          <Header></Header>
          
       

        <div class="container commentContainer">
        <form action="/action_page.php">
            <div class="row">
            <div class="col-25">
                <label className="commentLabel" for="fname">First Name</label>
            </div>
            <div class="col-75">
                <input style={{"outline" : "none"}}  type="text" id="fname" name="firstname" placeholder="Your name.." />
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label className="commentLabel" for="lname">Last Name</label>
            </div>
            <div class="col-75">
                <input  style={{"outline" : "none"}}  type="text" id="lname" name="lastname" placeholder="Your last name.." />
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label className="commentLabel" for="fname">Email</label>
            </div>
            <div class="col-75">
                <input style={{"outline" : "none"}}  type="text" id="fname" name="firstname" placeholder="Your Email.." />
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label style={{"outline" : "none"}} className="commentLabel" for="country">Country</label>
            </div>
            <div class="col-75" style={{"outline" : "none"}}>
                <select style={{"outline" : "none"}} id="country" name="country">
                <option style={{"outline" : "none"}} value="australia">Australia</option>
                <option style={{"outline" : "none"}}value="canada">Canada</option>
                <option style={{"outline" : "none"}} value="usa">USA</option>
                </select>
            </div>
            </div>
            <div class="row">
            <div class="col-25">
                <label className="commentLabel" for="subject">Message</label>
            </div>
            <div class="col-75">
                <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px" , "outline" : "none"}}></textarea>
            </div>
            </div>
            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
            <label className="form-check-label checkLabelForm">I agree to all the conditions and privacy policy of Company</label>
            <div className="row submitButton">
            <input type="submit" value="Submit" />
            </div>
        </form>
        </div>
        </>
    )
}

export default Comments;