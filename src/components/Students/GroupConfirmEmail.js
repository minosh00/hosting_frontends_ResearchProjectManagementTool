
 import emailjs from "emailjs-com";
 import React, { useEffect, useState } from "react";
 import axios from "axios";
 import { Link, useNavigate, useParams } from "react-router-dom";
 import { updateGroupsByID, getGroupsById } from "../services/DisplayGroupRegister";
 import Swal from "sweetalert2";

 

 const GroupConfirmEmail = () => {
 
 

   const navigate = useNavigate();
 
   const { id } = useParams();
 
   const handleSubmit = () => {
     localStorage.removeItem("token");
     localStorage.removeItem("userRole");
     navigate("/Login");
   };
 

 
 const [GroupID, setGroupID] = useState("");
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [GruopMembersItNumbers, setGruopMembersItNumbers] = useState("");


 
 
   const handleGroupID = (e) => {
    setGroupID(e.target.value);
   };
 
   const handleGruopLeaderEmail = (e) => {
    setGruopLeaderEmail(e.target.value);
   };
 
 
 const handleGruopMembersItNumbers = (e) => {
    setGruopMembersItNumbers(e.target.value);
   };
 
 
 
   const GetgruopssData = async () => {
 
     let data = await getGroupsById(id);
 
     console.log("Update gruopid", data);
     setGroupID(data?.data?.GroupID);
     setGruopLeaderEmail(data?.data?.GruopLeaderEmail);
     setGruopMembersItNumbers(data?.data?.GruopMembersItNumbers);
   };
 
   useEffect(() => {
    GetgruopssData();
   }, []);
 
   const UpdateGroupData = async (e) => {
     e.preventDefault();
     
     let newdata = {
       GroupID: GroupID,
       GruopLeaderEmail: GruopLeaderEmail,
       GruopMembersItNumbers: GruopMembersItNumbers,
 
     
     };
 
     let data = await updateGroupsByID(id, newdata);
     console.log("Update success ", data);
     if (!data?.data?.GroupID) {
       alert("Update failed..");
     } else {
 
       navigate("/RegisterGropStatus");
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
      {   Swal.fire('Congrats' , 'Successfully Send Email ' , 'success')

      navigate("/RegisterGropStatus")
			  }
     
      
         console.log(res);
     }).catch(err=> console.log(err));
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
         <input type="email" name="email"   value={GruopLeaderEmail}   onChange={handleGruopLeaderEmail}  className="form-control" />
 
         <label>gruopID</label>
         <input type="text" name="id" value={GroupID}  onChange={handleGroupID} className="form-control" />
 
         <label>Message</label>
         <textarea name="message" rows="4"   placeholder="your Group Topic is "  value={GruopMembersItNumbers}    className="form-control" />
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
   );
 };
 
 export default GroupConfirmEmail;



