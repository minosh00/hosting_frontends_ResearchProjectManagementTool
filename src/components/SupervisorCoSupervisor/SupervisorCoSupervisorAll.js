 

 import React from 'react'
import avatar from "../images/l-removebg-preview.png"
import avatar2 from "../images/lol.png"
import avatar3 from "../images/manager-completing-tasks-in-time-vector-illustration_92753-1226-removebg-preview.png"
import avatar4 from "../images/cluster-sampling-removebg-preview.png"
import { Link } from "react-router-dom";

 const SupervisorCoSupervisorAll = () => {



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
 
 </nav>

            <br />
          
         
            <br />

            <h1>Welcome to the Co-supervisor supervisor  members Home page</h1>

            <br />
		<br/>

<div className="container">
  <div style={{marginTop:"100px"}}>
<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card">
    <img src={avatar} alt="" width={"130%"} height={"130%"} />
      <div class="card-body">
        <h5 class="card-title">Evaluate Documents</h5>
        <p class="card-text">Evaluate Documents in student .</p>
        <Link  to="">
        <button  className="btn btn-success" type="submit" >
                    Click Here
                </button>     
                </Link>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
    <img src={avatar2} alt="" width={"65%"} height={"65%"} />
      <div class="card-body">
        <h5 class="card-title"> Chat with the groups</h5>
        <p class="card-text">Chat with the student groups.</p>
        <Link  to="/Chat">
        <button  className="btn btn-success" type="submit" >
                    Click Here
                </button>     
                </Link>   
                &nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
              
      </div>
      
    </div>
  </div>


  
  <div class="col mb-4">
    <div class="card">
    <img src={avatar4} alt="" width={"90%"} height={"90%"} />
      <div class="card-body">
        <h5 class="card-title">   View Topic Register pending List</h5>
        <p class="card-text"></p>
        <Link  to="/TopicAcpect">
        <button  className="btn btn-success" type="submit" >
                    Click Here
                </button>     
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
          
<br></br><br></br>
              
      </div>
    </div>
  </div>

  


 


  <div class="col mb-4">
    <div class="card">
    <img src={avatar4} alt="" width={"140%"} height={"140%"} />
      <div class="card-body">
        <h5 class="card-title">Request Supervisor List</h5>
        <p class="card-text"></p>
        <div class="card-body">
  
  
        <Link  to="/RequestSupervisorss">
        <button  className="btn btn-success" type="submit" >
                    Click Here
                </button>     
                </Link>
           
              
  </div>
      
                
      </div>
    </div>
  </div>



  

  <div class="col mb-4">
    <div class="card">
    <img src={avatar4} alt="" width={"100%"} height={"90%"} />
      <div class="card-body">
        <h5 class="card-title">Request  CO-Supervisor list </h5>
        <p class="card-text"> </p>
        <div class="card-body">
  
        <Link  to="/RequestCoSupervisor">
        <button  className="btn btn-success" type="submit" >
                    Click Here
                </button>     
                </Link>
              
  </div>
     
     
                
      </div>
    </div>
  </div>


  <div class="col mb-4">
    <div class="card">
    <img src={avatar2} alt="" width={"85%"} height={"85%"} />
      <div class="card-body">
        <h6 class="card-title">Evaluate Documents  marking scheme</h6>
  
        <Link  to="/downloadAssigmentsup">
        <button  className="btn btn-success" type="submit" >
                    Click Here
                </button>     
                </Link>   
                &nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
              
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


export default SupervisorCoSupervisorAll;