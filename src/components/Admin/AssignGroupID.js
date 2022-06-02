import Swal from "sweetalert2";
 import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getGroupsById, updateGroupsIDByID } from "../services/DisplayGroupRegister";

const AssignGroupID = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };
  const [GroupID, setGroupID] = useState("");
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [GruopLeaderItNumber, setGruopLeaderItNumber] = useState("");
  const [GruopMembersItNumbers, setGruopMembersItNumbers] = useState("");
  const [GruopMembersNames, setGruopMembersNames] = useState("");
  const [GruopMembersEmail, setGruopMembersEmail] = useState("");
  const [GruopMembersContectNumber, setGruopMembersContectNumber] = useState("");



  const handleGruopLeaderEmail = (e) => {
    setGruopLeaderEmail(e.target.value);
  };

  const handleGruopLeaderItNumber = (e) => {
    setGruopLeaderItNumber(e.target.value);
  };

  const handleGruopMembersItNumbers = (e) => {
    setGruopMembersItNumbers(e.target.value);
  };

  const handleGruopMembersNames= (e) => {
    setGruopMembersNames(e.target.value);
  };

  const handleGroupID = (e) => {
    setGroupID(e.target.value);
  };
 
  const handlesetGruopMembersEmail= (e) => {
    setGruopMembersContectNumber(e.target.value);
  };

  const handlesetGruopMembersContectNumber = (e) => {
    setGruopMembersEmail(e.target.value);
  };



  const GetData = async () => {

    let data = await getGroupsById(id);
    console.log("Update groups", data);

    setGruopLeaderEmail(data?.data?.GruopLeaderEmail);
    setGruopLeaderItNumber(data?.data?.GruopLeaderItNumber);
    setGruopMembersItNumbers(data?.data?.GruopMembersItNumbers);
    setGruopMembersNames(data?.data?.GruopMembersNames);
    setGroupID(data?.data?.GroupID);
    setGruopMembersEmail(data?.data?.GruopMembersEmail);
    setGruopMembersContectNumber(data?.data?.GruopMembersContectNumber);

  };

  useEffect(() => {
    GetData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    let newdata = {
      GroupID:GroupID,
        GruopLeaderItNumber:GruopLeaderItNumber,
        GruopLeaderEmail:GruopLeaderEmail,
        GruopMembersItNumbers:GruopMembersItNumbers,
        GruopMembersNames:GruopMembersNames,
        GruopMembersEmail:GruopMembersEmail,
        GruopMembersContectNumber:GruopMembersContectNumber,
    };

    let data = await updateGroupsIDByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.GruopLeaderEmail) {
      {   Swal.fire('Congrats' , 'Assign GroupID successfully ' , 'success')

      navigate("/RegisterGropStatus");
   }


    
    } else {

      {   Swal.fire('Congrats' , 'Assign GroupID successfully ' , 'success')

           navigate("/RegisterGropStatus");
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
     <button onClick={handleSubmit} className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
         Logout
     </button>
 </nav>

            <br />
          
         
            <br />
            <br />



    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <center>
        <br />
        <form>
          <label className="label" style={{color:"red" , fontSize:"30px" }}>Group ID</label>

          <input
          type="text"
            class="form-control"
            id="floatingInput"
            value={GroupID}
            style={{ width: "200px" }}
            onChange={handleGroupID}
          >
        
          </input>
          <br></br>

          <button
            onClick={(e) => UpdateData(e)}
            className="btn btn-outline-danger"
            type="submit">
            Update
          </button>
        </form>
      </center>
    </div>
    </div>
    </div>
  );
};

export default AssignGroupID;


