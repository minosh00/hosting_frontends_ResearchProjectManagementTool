 
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Students/Loader";
import { Link } from "react-router-dom";


function DisplayAllGroupsAddPanelMembers() {


  const [serachItem,setserachItem] =useState([]);
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);

  useEffect(async () => {
    try {
      const data = await (
        await axios.get("https://hostingbackendresearchproject.herokuapp.com/gruops/getAllGroups/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);






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

    
<br/>

    <div className="row">
      {loading && <Loader />}

      <div className="col-md-5">
        <br></br>
<h1>All Students Group Reregistration  List</h1>
        <br></br>
        
        <div class="input-group">
  <div className="col-md-9">

  <input type="search" class="form-control rounded" style={{ marginRight:"300px" , marginTop:"30px"}} placeholder="Search by GroupID  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  </div>
</div>
<br></br><br></br>
        <table className="table table-bordered " style={{marginLeft:"230px" , marginTop:"-20px"}}>
          <thead className="bs">
            <tr>
              <th>Gruop Leader Email</th>
              <th>GruopLeaderItNumber</th>
              <th>GruopMembersItNumbers</th>
              <th>GruopMembersNames</th>
               <th>GroupID </th>
               <th>  Panel Member </th>
              <th> Assign Panel Member </th>
         
            </tr>
          </thead>

          <tbody>
          {users &&
              users.filter((users)=>{
                if(serachItem ==""){
                      return users
                }else if(users.GroupID.toLowerCase().includes(serachItem.toLowerCase())){
             
                  return users
   }   })
           .map((user) => {
                return (
                  <tr>
                    <td>{user.GruopLeaderEmail}</td>
                    <td>{user.GruopLeaderItNumber}</td>
                    <td>{user.GruopMembersItNumbers}</td>
                    <td>{user.GruopMembersNames}</td>
                    <td>{user.GroupID}</td>
                    <td>{user.pannelmemberName}</td>
                    <td>  <Link to ={{pathname:`/updatePannelMemberByID/${user?._id}`}}>
                                    <button  type="button"  className="btn btn-outline-success" style={{marginTop:'10px'}} > Assign Panel Member </button>
                                    </Link>&nbsp;</td>




                            
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default DisplayAllGroupsAddPanelMembers;
