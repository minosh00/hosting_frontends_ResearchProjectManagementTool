 


import styles from "./styles.module.css";
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";



const AllEvaluvateMessage = ({ song }) => {
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


  function pdfGenerat(){
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    
    doc.autoTable({
           
            body: [
                [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
              ],
            })
        autoTable(doc, { html: '#cusdet' })
       doc.save('evaluvate.pdf')
  
          }




  return (
    <div className="">
		<div style={{ textAlign: "center" }}>
	 <div style={{ marginTop: "30px" }}>
		 <center><h1 style={{ color: "purple" }}><b>Research Project Management Tool </b></h1></center>
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
	

    <div>


<h1> All Evaluate message</h1>
<br></br><br></br><br></br>
<button className="btn btn-danger btn-sm"  style={{marginTop:"-100px" , marginLeft:"100px"}} onClick={pdfGenerat}>Download PDF</button>
<br></br><br></br><br></br>

    <table id="cusdet"  className="table table-bordered " style={{ }}>
          <thead className="bs">
            <tr>
              <th  style={{color:"white" , backgroundColor:"black"}} > Assignment name</th>
              <th  style={{color:"white" , backgroundColor:"black"}} >Assignment Type</th>
              <th  style={{color:"white" , backgroundColor:"black"}} >Evaluate Documents Submitted Message</th>
            
           
            </tr>
          </thead>

          <tbody id="cusdet"  >
            {songs &&
              songs .map((songs) => {
              
              
                return (
                  <tr>
                    <td>{songs.name}</td>
                    <td>{songs.AssignmentType}</td>
                    <td>{songs.status}</td>
            
                  </tr>
                );
              })}
          </tbody>
        </table>

    </div>

         
 
    </div>
    </div>
  );
};

export default AllEvaluvateMessage;
