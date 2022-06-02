import React from 'react'
import './Footer.css'
import { blue} from '@material-ui/core/colors';
import {Link,useHistory } from 'react-router-dom'; 
import { Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
 const Footer = () => {
  return (
    <div>
     
     <footer className="px-5">
            <div className="">
                <div className="row">
                    <div className="col-xl-1" align="center">
                        <br/>
                    </div>
                    <div className="col-xl-3"style={{ paddingLeft: 70 }}>
                        <br/>
                        <h3>
                        Research Project Management Tool  
                        </h3>
                    </div>
                    <div className="col-xl-2" align="center">
               
                     
              
                    </div>
                    <div className="col-xl-3" >
               
                    </div>
                    <div className="col-xl-3"align="center">
                        <h5>Research Project Management Tool</h5>    
                        <br/><br/>
                     
                        <br/> <br/>
                        <span>
                            <img src="https://img.icons8.com/color/48/000000/facebook-circled--v4.png" alt="facebook"/>
                            <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram"/>
                            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v2.png" alt="twitter"/>
                        </span>
                    </div>
                </div>
                <div className="col-xl-12 text-center "> 
               
                </div>
            </div>
        </footer>
 </div>


  )
}
export default Footer;
