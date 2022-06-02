 
  import React from 'react';
  import { Link } from "react-router-dom";
let loadingGif = require("../images/3ffa463173416a5eea503b949da5f56b-removebg-preview.png")

const Staff = ()=>(
   
 

  <div className="">
    <div style={{ textAlign: "center" }}>
 <div style={{ marginTop: "30px" }}>
     <center><h1 style={{ color: "purple" }}><b>Research Project Management Tool Assignment schedule</b></h1></center>
     <img src='' />
 </div>
 <br />
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <div className="container-fluid">
    
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

            <br />
          
         
            <br />
            <br />

<div>
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
       <div className="card card0 border-0">
       <img src={loadingGif} style={{width:"600px" , height:"500px", marginLeft:"100px"}} alt="" />
       <table class="table table-dark" style={{marginLeft:"1000px" , marginTop:"-410px" ,width:"380px" , height:"320px"}}>
             <thead>
             <tr>
                 <td style={{marginLeft:"-300px" ,  fontSize:"20px"}} >Add Staff members</td>
               
               </tr>
               <tr>
                 <th>
                 <Link  to="/panalmemeber">
                      <button type="button" class="btn btn-outline-success">Add Panel Member </button>  </Link>
                      </th>
               <br></br>
               </tr>
             </thead>
             <tbody>
            
               <tr>
                 <td>
                 <Link  to="/supervisor">
                     <button type="button" class="btn btn-outline-danger">Add Supervisor Member </button>
                     </Link>
                     </td>
          
               </tr>
               <tr>
                 <td>
                     <Link  to="/CoSupervisor">
                     <button type="button"  class="btn btn-outline-warning">Add Co-Supervisor Member</button>
                     </Link>
                  
                     </td>
               </tr>
            <tr>
               
               
               </tr>
              
             </tbody>
           </table>
   
       </div>
     
   </div>
   
   </div>
</div>
</div>
  )
;


export default Staff;