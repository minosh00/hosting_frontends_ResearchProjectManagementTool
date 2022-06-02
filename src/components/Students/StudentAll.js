import React from 'react'
import avatar from "../images/l-removebg-preview.png"
import avatar2 from "../images/lol.png"
import avatar3 from "../images/manager-completing-tasks-in-time-vector-illustration_92753-1226-removebg-preview.png"
import avatar4 from "../images/cluster-sampling-removebg-preview.png"
import { Link } from "react-router-dom";

 const StudentAll = () => {



  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
}




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
            <br />
            <h1>Welcome to the Student Home page</h1>

		<br/>

<div className="container">
  <div style={{marginTop:"100px"}}>
<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card">
    <img src={avatar} alt="" width={"90%"} height={"90%"} />
      <div class="card-body">
        <h5 class="card-title">View All Assignment</h5>
        <p class="card-text">You can view Your all Assignment and Research project.</p>
        <Link  to="/downloadAssigment">
        <button  className="btn btn-outline-success" type="submit" >
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
        <h5 class="card-title"> Register Your Group</h5>
        <p class="card-text">Group leader can register your groups .</p>
        <Link  to="/RegisterGroup">
        <button  className="btn btn-outline-success" type="submit" >
                    Click Here
                </button>     
                </Link>   
                &nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                <Link  to="/DisplayGroupRegisterStatusStudent">
        <button  className="btn btn-danger" type="submit" >
        View Groups Register status
                </button>     
                </Link>   
      </div>
      
    </div>
  </div>



 


  


  
  <div class="col mb-4">
    <div class="card">
    <img src={avatar4} alt="" width={"70%"} height={"70%"} />
      <div class="card-body">
        <h5 class="card-title">Request and Topic Register</h5>
        <p class="card-text">request and register your group Research projects .</p>
        <Link  to="/RequestTopicRegister">
        <button  className="btn btn-outline-success" type="submit" >
                    Click Here
                </button>     
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
                <Link  to="/DisplayApproivedTopicList">
        <button  className="btn btn-danger" type="submit" >
                   View Topic Register Approved List 
                </button>     
                </Link>  
<br></br><br></br>
                <Link  to="/DisplayRejectTopicList">
        <button  className="btn btn-danger" type="submit" >
                   View Topic Register Reject List 
                </button>     
                </Link>  
      </div>
    </div>
  </div>

  <div class="col mb-4">
    <div class="card">
    <img src={avatar3} alt="" width={"60%"} height={"60%"} />
      <div class="card-body">
        <h5 class="card-title">Upload Your Assignments</h5>
        <p class="card-text">Individual or groups assignments you can upload here .</p>
        <Link  to="/uploadAssigment">
        <button  className="btn btn-outline-success" type="submit" >
                    Click Here
                </button>     
                </Link>
               <br></br> 
               &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
               <Link  to="/AllEvaluvateMessage">
        <button  className="btn btn-outline-success" type="submit" >
                   Check Evaluate message
                </button>     
                </Link>
                
      </div>
    </div>
  </div>



  <div class="col mb-4">
    <div class="card">
    <img src={avatar3} alt="" width={"60%"} height={"60%"} />
      <div class="card-body">
        <h5 class="card-title">chat with students Groups</h5>
        <p class="card-text"></p>
        <Link  to="/Chat">
        <button  className="btn btn-outline-success" type="submit" >
                    Click Here
                </button>     
                </Link>
                
      </div>
    </div>
  </div>

 


  <div class="col mb-4">
    <div class="card">
    <img src={avatar4} alt="" width={"60%"} height={"60%"} />
      <div class="card-body">
        <h5 class="card-title">Request Supervisor</h5>
        <p class="card-text">Supervisor request to your project  .</p>
        <div class="card-body">
  
  
        <Link  to="/RequestSupervisor">
        <button  className="btn btn-outline-success" type="submit" >
                    Click Here
                </button>     
                </Link>
                &nbsp;  &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Link  to="/DisplaySuperviorStatus">
        <button  className="btn btn-secondary" type="submit" >
                   Accept  List
                </button>     
                </Link>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <br></br>
                <Link  to="/DisplaySupervisorStatusReject">
        <button  className="btn btn-secondary" type="submit" >
                   Reject  List
                </button>     
                </Link>
  </div>
      
      
      
      
                
      </div>
    </div>
  </div>


  <div class="col mb-4">
    <div class="card">
    <img src={avatar4} alt="" width={"60%"} height={"60%"} />
      <div class="card-body">
        <h5 class="card-title">Request  CO-Supervisor</h5>
        <p class="card-text">CO-Supervisor request to your project .</p>
        <div class="card-body">
  
        <Link  to="/RequestCoSupervios">
        <button  className="btn btn-success" type="submit" >
                    Click Here
                </button>     
                </Link>
                &nbsp;  &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Link  to="">
        <button  className="btn btn-secondary" type="submit" >
                   Accept  List
                </button>     
                </Link>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <br></br>
                <Link  to="">
        <button  className="btn btn-secondary" type="submit" >
                   Reject  List
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
</div>
  )


}


export default StudentAll;