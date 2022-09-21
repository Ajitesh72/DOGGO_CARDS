import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faTwitter} from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
import {FaLinkedin,FaGithubSquare,FaInstagramSquare,FaRedditSquare } from "react-icons/fa";

export default function header(props){
  
    return(
    <nav className={props.darkmode?"dark_Header_nav":"Header_nav"}>
      <div className="header_title">
        
      
      <img src="public\DOGGO_LOGO.png" alt="" className="logo_image"/>
      
       <h1 className={props.darkmode?"dark_title":"title"}>  DOGGO Card Generator</h1>
       </div>

       <div className="toggler">
            <p className="toggler_light">Light</p>
       
            {/* <div className="toggler_slider" onClick={props.togglerdarkmode}> */}
            <div className={props.darkmode?"dark_toggler_slider":"toggler_slider"} onClick={props.togglerdarkmode}>
                {/* <div className="toggler_slider_circle"> */}
                <div className={props.darkmode?"dark_toggler_slider_circle":"toggler_slider_circle"} >
                </div>
            </div>
            <p className="toggler_dark">Dark</p>
               
       </div>

       <div className="Trial">
        {/* <a href="https://www.linkedin.com/in/ajitesh-dubey-4b5852220/"> */}
            {/* <FontAwesomeIcon icon={faTwitter}/> */}
        {/* </a> */}
        <a href="https://www.linkedin.com/in/ajitesh-dubey-4b5852220/">
            <FaLinkedin size="30px"/>
        </a>
        <a href="https://github.com/Ajitesh72">
            <FaGithubSquare size="30px"/>
        </a>
        <a href="https://www.instagram.com/ajitesh._/">
            <FaInstagramSquare size="30px"/>
        </a>
        <a href="https://www.reddit.com/search/?q=Leading_Dot101">
            <FaRedditSquare size="30px"/>
        </a>
       </div>
       
      

   
       
      
   </nav>
      
    )
  }