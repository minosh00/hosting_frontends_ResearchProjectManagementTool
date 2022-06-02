
 import React from "react";
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../services/AuthServices";
import logo from './images/profileeee-removebg-preview.png'

const StudentProfile = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/Login");
    }

    const [UserName, setUserName] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [currentUserID, setcurrentUserID] = useState("");


    const handleUserName = (e) => {
        setUserName(e.target.value);
    };


    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);
    };

  

    const StudentDetails = async () => {
        let token = localStorage.getItem('token');
        let data = await AuthUser(token);
        console.log("current User", data?.data);
        setcurrentUserID(data?.data?._id);
        setUserName(data?.data?.name);
        setUserEmail(data?.data?.email);
       
    }


    useEffect(() => {
        StudentDetails();
    }, [])

    

    return (
        <div style={{ textAlign: "center" }}>
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
             <button onClick={handleSubmit} className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
                    Logout
                </button>
          </nav>
        </center>
            <br />
          
         
            <br />
            <br />

            <div>
            <div class="card" style={{ width:"1000px" , marginLeft:"400px"}}>
  <img class="card-img-top" src={logo}  alt="Card image cap" style={{width:"300px" , height:"300px" , marginLeft:"330px"}}/>
  <div class="card-body">
    <h2 class="card-title">My Profile</h2>
    <p class="card-text">Check this all details your profile.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{color:"red"}} > Name  <input onChange={handleUserName} style={{color:"red"}} className="input"
        value={UserName} type="text" readOnly={true} /></li>
    <li class="list-group-item" style={{color:"red"}} > Email <input onChange={handleUserEmail} style={{color:"red"}} className="input"
        value={UserEmail} type="email" readOnly /></li>
 
  </ul>

</div>
                <br />
                <br />
                <div  >
             
             
                 
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};


export default StudentProfile;