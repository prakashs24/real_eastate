import React ,{useEffect}from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import '../Components/styles.css'

function About(){
   
    return(
        <div id="demo" >
          <h1 className="text-center fw-bold p-3">Welcome</h1>
          <Link to="/">
            <div className="col-12 text-center">
          <button type="button" class="btn btn-primary " >Back</button>
          </div>
          </Link>

        </div>
    )
}export default About;