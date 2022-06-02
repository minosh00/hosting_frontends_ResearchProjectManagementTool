import styles from "./styles.module.css";
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Songs = ({ song }) => {
  const [songs, setSongs] = useState([]);

  const getAllSongs = async () => {
    try {
      const { data } = await axios.get("https://hostingbackendresearchproject.herokuapp.com/UploadAssignment/downloadAssigmenntStudnts");
      setSongs(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSongs();
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
	
  <h1>Download Assignment Students</h1>
				<br />
			  
			 
				<br /> 
    <div className="container">
    <div className="">
                  <div className="">
                      <div className="">
               
                          </div>
                          <div className="">
                            
                          <div className="row">
      <br></br><br></br>
      {songs.map((song) => (
        <div className="col-md-3 card me-5 mt-2 p-1 mb-2  d-flex"  key={1}><br></br>
          <img src={song.img} alt="" marginLeft={"200px"} width={"40%"} height={"40%"} />
       

     
          <div className="p-2">
          <h4> Topic :{song.name}</h4>
            <h5> Assignment ID / groupID  :{song.AssignmentType}</h5>

            <a
           className="button"
           style={{ marginLeft: "10%" }}
           href={song.Assignment}
         >
           <button className="btn btn-success">Download</button>
         </a>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<Link to ={{pathname:`/updateAssigment/${song?._id}`}}>
  <button  type="button"  className="btn btn-success"  > Evaluate </button>
 </Link>&nbsp;

    
       

          </div>
        </div>
      ))}
    </div>
                          </div>
                      </div>
                  </div>
         
    </div>
    </div>
    </div>
  );
};

export default Songs;
