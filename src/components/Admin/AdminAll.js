import React from 'react'
import avatar from "../images/l-removebg-preview.png"
import avatar2 from "../images/lol.png"
import avatar3 from "../images/manager-completing-tasks-in-time-vector-illustration_92753-1226-removebg-preview.png"
import avatar4 from "../images/cluster-sampling-removebg-preview.png"
import avatar5 from "../images/admin.jpg"
import avatar6 from "../images/360_F_261952014_ekDtCY2vkfg7dptx7x2vdcRnJJlCzWNT-removebg-preview.png"
import avatar7 from "../images/istockphoto-1069919200-170667a-removebg-preview.png"

import { Link } from "react-router-dom";

 const AdminAll = () => {

  
  const handleSubmit = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };



  return (

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
     <button onClick={handleSubmit} className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
         Logout
     </button>
 </nav>

            <br />
          
         
            <br />
            <br />
            <h1>Welcome to the  Admin Home page</h1>

         
		<br/>

<div className="container">
  <div style={{marginTop:"100px"}}>
<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card">
    <img src={avatar} alt="" width={"70%"} height={"70%"} />
      <div class="card-body">
        <h6 class="card-title">create marking schema</h6>
        <p class="card-text">.</p>
        <Link  to="/AddMarkingSchems">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                <br></br>
                <Link  to="/AllMarking">
        <button  className="btn btn-danger" type="submit" >
                    All Schema Edit 
                </button>     
                </Link>

      </div>
    </div>
  </div>


  <div class="col mb-4">
    <div class="card">
    <img src={avatar} alt="" width={"100%"} height={"100%"} />
      <div class="card-body">
        <h6 class="card-title"> create Submission</h6>
        <p class="card-text"></p>
        <Link  to="/upload">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>   
      

      </div>
      
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
    <img src={avatar7} alt="" width={"85%"} height={"85%"} />
      <div class="card-body">
        <h6 class="card-title"> All Student </h6>
        <p class="card-text"></p>
        <Link  to="/AllStudents">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>   
      

      </div>
      
    </div>
  </div>  <div class="col mb-4">
    <div class="card">
    <img src={avatar6} alt="" width={"80%"} height={"80%"} />
      <div class="card-body">
        <h6 class="card-title"> All Staff</h6>
        <p class="card-text"></p>
        <Link  to="/AllStaffAccount">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>   
      

      </div>
      
    </div>
  </div>  <div class="col mb-4">
    <div class="card">
    <img src={avatar2} alt="" width={"60%"} height={"60%"} />
      <div class="card-body">
        <h6 class="card-title"> Student Group Registered</h6>
        <p class="card-text"></p>
        <Link  to="/RegisterGropStatus">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>   
      

      </div>
      
    </div>
  </div>


  <div class="col mb-4">
    <div class="card">
    <img src={avatar5} alt="" width={"60%"} height={"60%"} />
      <div class="card-body">
        <h6 class="card-title"> Admin Account Register</h6>
        <p class="card-text"></p>
        <Link  to="/AdminRegister">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>   
      

      </div>
      
    </div>
  </div>


  <div class="col mb-4">
    <div class="card">
    <img src={avatar6} alt="" width={"50%"} height={"50%"} />
      <div class="card-body">
        <h6 class="card-title">Staff Register</h6>
        <p class="card-text"></p>
        <Link  to="/StaffRegister">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>
                
      </div>
    </div>
  </div>



 

  <div class="col mb-4">
    <div class="card">
    <img src={avatar3} alt="" width={"70%"} height={"70%"} />
      <div class="card-body">
        <h6 class="card-title">Upload  Assignments</h6>
        <p class="card-text"></p>
        <Link  to="/UploadPdf">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>
                
      </div>
    </div>
  </div>

  
  <div class="col mb-4">
    <div class="card">
    <img src={avatar4} alt="" width={"90%"} height={"90%"} />
      <div class="card-body">
        <h6 class="card-title">Allocate panel members </h6>
        <p class="card-text"></p>
        <Link  to="/DisplayAllGroupsAddPanelMembers">
        <button  className="btn btn-danger" type="submit" >
                    Click Here
                </button>     
                </Link>
        
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
  )
}


export default AdminAll;