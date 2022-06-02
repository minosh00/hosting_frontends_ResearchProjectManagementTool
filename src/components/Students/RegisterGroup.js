   
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import logo from '../images/grp-removebg-preview.png'



const RegisterGroup = () => {


  

  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [GruopLeaderItNumber, setGruopLeaderItNumber] = useState();
  const [GruopMembersItNumbers, setGruopMembersItNumbers] = useState("");
  const [GruopMembersNames, setGruopMembersNames] = useState("");
  const [GruopMembersEmail, setGruopMembersEmail] = useState("");
  const [GruopMembersContectNumber, setGruopMembersContectNumber] = useState("");



  const changeOnClick = (f) => {
    

    const addgroup = {

        GruopLeaderEmail,
        GruopLeaderItNumber,
        GruopMembersItNumbers,
        GruopMembersNames,
        GruopMembersEmail,
        GruopMembersContectNumber,
    };

    axios.post("https://hostingbackendresearchproject.herokuapp.com/gruops/createGroup", addgroup);

    Swal.fire("Congrats", " your Group Register  successfully", "success")

  

    
    
  };
  return (

    <div>
			      <center>
      <div style={{marginTop:"30px"}}>
          <center><h1>Welcome to  Research Project Management Tool system</h1></center> 
        </div>
        <br/>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">

  {/* admin Pages */}
  <a style={{ display: localStorage.getItem("userRole") == "Admin" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">Admin Profile</a>
                          
                          <a style={{ display: localStorage.getItem("userRole") == "Admin" ? "flex" : "none" }} className="nav-link active" href="/AdminAll" aria-current="page"> Admin</a>


                          {/* student Pages */}
                          <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
                          <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/StudentAll" aria-current="page">My account</a>



                          

         
                          {/* superviosr Pages */}
                          <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/SupervisorCoSupervisorAll" aria-current="page">Supervisor  </a>
                          <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile  </a>
                     

                          
                          {/* co superviosr Pages */}
                          <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/SupervisorCoSupervisorAll" aria-current="page">account </a>
                          <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
              
                          
                          {/* panel member Pages */}
                          <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/AllPnaelMembersInterface" aria-current="page"> PnaelMembers </a>


                          <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>

         
  
           
           
           
           
                 </div>
                </div>
             </div>
        
          </nav>
        </center>
		<br/>
   
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                   <div className="card card0 border-0">
                     <br></br>
               
                       <div className="row d-flex">
                           <div className="col-lg-6">
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img  src={logo} style={{height:"700px" ,width:"400px"}} className="image" /> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                       
                               <div className="card2 card border-0 px-4 py-5">
                               <form onSubmit={changeOnClick} encType="">
                               <h1 style={{color:"red"}} >Register Your Research Group  </h1>
                               <br></br>
                            
                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Leader Email </label>
                                       <input type="email" class="form-control" id="floatingInput"      onChange={(f) => setGruopLeaderEmail(f.target.value)}  required placeholder="Gruop Leader Email" />
                                   
                                   </div>
                                   <div class="form-floating mb-3">
                                   <label for="floatingPassword">Gruop Leader ItNumber</label>
                                       <input  class="form-control" id="floatingPassword"  onChange={(f) => setGruopLeaderItNumber(f.target.value)}  required  type="text"   placeholder="Gruop Leader ItNumber" />
                                     
                                   </div>

                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Members ItNumbers </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setGruopMembersItNumbers(f.target.value)}  required  placeholder="enter   Gruop Members ItNumbers"    rows="6">
                                       </textarea>

                                   </div>

                                  
                                   
                                   
                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Members names </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setGruopMembersNames(f.target.value)}  required  placeholder=" Gruop Members names"    rows="6">
                                       </textarea>

                                   </div>


                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Members Emails </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setGruopMembersEmail(f.target.value)}  required  placeholder="  Gruop Members emails"  rows="6">
                                       </textarea>

                                   </div>


                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  Gruop Members Contact Number </label>
                                    
                                       <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setGruopMembersContectNumber(f.target.value)}  required  placeholder="  Gruop Members Contact Number"  rows="6">
                                       </textarea>

                                   </div>







                              
                                   <div className="row mb-5 px-4">
                                       <a ><button  type="submit"  className="btn btn-blue ">Register </button></a>
                                      
                                   </div>
                                   </form>
                                   <div>
                                     
                               
                                       
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                     
               
                   </div>
               </div>
               


    </div>
  );
};

export default RegisterGroup;