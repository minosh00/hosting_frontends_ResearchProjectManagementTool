import React from 'react'
import Main from './Main.css'
 const Footer = () => {
  return (
    <div>
   
        <footer>
            <div class="jumbotron jumbotron-fluid bg-secondary p-4 mt-5 mb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 cizgi">
                            <div class="card bg-secondary border-0">
                                <div class="card-body text-light text-center">
                                    <h5 class="card-title text-white display-4" style="font-size:30px">AF PROJECT</h5>
                                <p class="d-inline lead"> © 2022<br></br>
                                <a href="#" class="text-light d-block lead">MERN STACK</a>
                                </p>
        
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 cizgi">
                            <div class="card bg-secondary border-0">
                                <div class="card-body text-center">
                                    <h5 class="card-title text-white display-4" style="font-size:30px">SLIIT Reserach Management</h5>
                                    <a class="text-light d-block lead" style={{marginleft:"20px"}} href="#"><i class="fa fa-phone mr-2"></i>+94 11 3245 242</a>
                                    <a class="text-light d-block lead" href="#"><i class="fa fa-envelope mr-2"></i>SLIIT.LK</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div class="card bg-secondary border-0">
                                <div class="card-body text-center">
                                <h5 class="card-title text-white display-4" style="font-size:30px">Sosyal Media</h5>
                        
                                        <a class="text-light" href="#"><i class="fa fa-facebook-square fa-fw fa-2x"></i></a>
                                    
                                        <a class="text-light" href="#"><i class="fa fa-twitter-square fa-fw fa-2x"></i></a>
                                    
                                        <a class="text-light" href="#"><i class="fa fa-instagram fa-fw fa-2x"></i></a>
                                    
                                        <a class="text-light" href="#"><i class="fa fa-linkedin fa-fw fa-2x"></i></a>
                                    
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
        </footer>
     </div>


  )
}
export default Footer;