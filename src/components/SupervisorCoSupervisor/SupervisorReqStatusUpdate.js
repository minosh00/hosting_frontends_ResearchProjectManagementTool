 


 import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateGroupsByID, getAllSupervicorRequest } from "../services/SupervisorRequest";
import Swal from "sweetalert2";

const SupervisorReqStatusUpdate = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };



  const [GroupID, setGroupID] = useState("");
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [status, setstatus] = useState("");

  const handleRoomNo = (e) => {
    setGroupID(e.target.value);
  };

  const handleRoomFloor = (e) => {
    setGruopLeaderEmail(e.target.value);
  };

  const handlestatus = (e) => {
    setstatus(e.target.value);
  };


  


  const GetTopicData = async () => {
    let data = await getAllSupervicorRequest(id);
    console.log("Update topics", data);
    setGroupID(data?.data?.GroupID);
    setGruopLeaderEmail(data?.data?.GruopLeaderEmail);
    setstatus(data?.data?.status);
   

  };

  useEffect(() => {
    GetTopicData();
  }, []);

  const UpdateTopicData = async (e) => {
    e.preventDefault();
    let newdata = {
      GroupID: GroupID,
      GruopLeaderEmail: GruopLeaderEmail,
      status: status,
   
    };

    let data = await updateGroupsByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.GroupID) {

      Swal.fire("success", " successfully status updated", "success");{

        navigate("/RequestSupervisorss");
      }


    } else {


      Swal.fire("success", " successfully status updated", "success");{

        navigate("/RequestSupervisorss");
      }


    }
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
  
 </nav>

            <br />
          
         
            <br />
            <br />







    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <center>
        <br />
        <form>
          <label className="label" style={{color:"red" , fontSize:"30px" }}>Status (Topic)</label>

          <select
            class="form-control"
            id="floatingInput"
            value={status}
            style={{ width: "200px" }}
            onChange={handlestatus}
          >
            <option value=""></option>
            <option value="Reject">Reject</option>
            <option value="Approved">Approved</option>

          </select>
          <br></br>

          <button
            onClick={(e) => UpdateTopicData(e)}
            className="btn btn-outline-danger"
            type="submit"
          >
            Update
          </button>
        </form>
      </center>
    </div>
    </div>
    </div>
  );
};

export default SupervisorReqStatusUpdate;


