import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updatepannelmemberByID, getGroupsById } from "../services/DisplayGroupRegister";


const AllocatedPanelMemberConfirmEmail = () => {




  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };




  const [GroupID, setGroupID] = useState("");
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [pannelmemberName, setstatus] = useState("");


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

    let data = await getGroupsById(id);

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
      pannelmemberName: pannelmemberName,

    
    };

    let data = await updatepannelmemberByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.GroupID) {
      alert(" failed..");
    } else {

      navigate("/DisplayTopicStatus");
    }
  };

  function sendEmail(e) {

    
    e.preventDefault();

    emailjs.sendForm(
      "service_471dfme",
      "template_mwvhicz",
      e.target,
      "l5NUKPpbvRhbN3ZLl"
    ).then(res=>{
        alert("email send success ")
        navigate("/DisplayTopicStatus")
        console.log(res);
    }).catch(err=> console.log(err));
  }

  return (


    <div >
   
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

    <div

      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>email</label>
        <input type="email" name="email"   value={GruopLeaderEmail}   onChange={handleRoomFloor}  className="form-control" />

        <label>gruopID</label>
        <input type="text" name="id" value={GroupID}  onChange={handleRoomNo} className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="4"   placeholder=" "  value="your panel member is assigned "    className="form-control" />
        <textarea name="message" rows="4"   placeholder="your  panel member is "  value={pannelmemberName}    className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default AllocatedPanelMemberConfirmEmail;
