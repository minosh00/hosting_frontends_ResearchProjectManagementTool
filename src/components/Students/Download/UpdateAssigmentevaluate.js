 
import Swal from "sweetalert2";
 import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getevaluvtAssigmentById, updateAssigment } from "../../services/EvalvateAssigment";

const UpdateAssigmentevaluate = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };
  const [name, setGroupID] = useState("");
  const [AssignmentType, setGruopLeaderEmail] = useState("");
  const [status, setGruopLeaderItNumber] = useState("");
  const [img, setGruopMembersItNumbers] = useState("");
  



  const handleGruopLeaderEmail = (e) => {
    setGroupID(e.target.value);
  };

  const handleGruopLeaderItNumber = (e) => {
    setGruopLeaderEmail(e.target.value);
  };

  const handleGruopMembersItNumbers = (e) => {
    setGruopLeaderItNumber(e.target.value);
  };

  const handleGruopMembersNames= (e) => {
    setGruopMembersItNumbers(e.target.value);
  };

 
 
 



  const GetData = async () => {

    let data = await getevaluvtAssigmentById(id);
    console.log("Update groups", data);


    setGroupID(data?.data?.name);
    setGruopLeaderEmail(data?.data?.AssignmentType);
    setGruopLeaderItNumber(data?.data?.status);
    setGruopMembersItNumbers(data?.data?.img);
 

  };

  useEffect(() => {
    GetData();
  }, []);

  const UpdateData = async (e) => {
    e.preventDefault();
    let newdata = {
        name:name,
        AssignmentType:AssignmentType,
        status:status,
        img:img,
      
    
    };

    let data = await updateAssigment(id, newdata);
    console.log("Update success ", data)
    if (!data?.data?.name) {
      {   Swal.fire('Congrats' , ' Evaluated successfully ' , 'success')

      navigate("/downloadAssigmentsup");
   }


    
    } else {

      {   Swal.fire('Congrats' , 'error ' , 'success')

           navigate("/downloadAssigmentsup");
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
          <label className="label" style={{color:"red" , fontSize:"30px" }}> Evaluate Status</label>

          <input
          type="text"
            class="form-control"
            id="floatingInput"
            value={status}
            style={{ width: "200px" }}
            onChange={handleGruopMembersItNumbers}
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

export default UpdateAssigmentevaluate;