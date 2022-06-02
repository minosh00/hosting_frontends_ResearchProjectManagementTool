
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Students/Loader";
import { Link } from "react-router-dom";

function AllTopics() {


  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("https://hostingbackendresearchproject.herokuapp.com/topicsrequest/getAlltopiclist/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

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
 
 </nav>
</center>
   <br />
 

   <br />
  

<br/>

    <div className="row">
      {loading && <Loader />}

      <div className="col-md-7">
        <br></br>
<h1>Evaluate All Students Topics </h1>
        <br></br>        <br></br>

        <table className="table table-bordered " style={{marginLeft:"390px" , marginTop:"-20px" , border:'200px'}}>
          <thead className="bs">
            <tr>
              <th>Group ID</th>
              <th>Topic Name</th>
              <th>Gruop Leader ItNumber</th>
              <th>Urls</th>
              <th>status</th>
              <th>Evaluate Message</th>
              <th>EvaluateTopic </th>
              <th>send email </th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.GroupID}</td>
                    <td>{user.TopicName}</td>
                    <td>{user.GruopLeaderItNumber}</td>
                    <td>{user.Urls}</td>
                    <td>{user.status}</td>
                    <td>{user.Message}</td>

                    <td>  <Link to ={{pathname:`/updateEvaluateByID/${user?._id}`}}>
                                    <button  type="button"  className="btn btn-outline-success" style={{marginTop:'10px'}} > Evaluate </button>
                                    </Link>&nbsp;</td>

                                    <td>  <Link to ={{pathname:`/updatesendemailByID/${user?._id}`}}>
                                    <button  type="button"  className="btn btn-outline-success" style={{marginTop:'10px'}} > Evaluate status send to student  </button>
                                    </Link>&nbsp;</td>




                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    
    </div>
    </div>
  );
}

export default AllTopics;
