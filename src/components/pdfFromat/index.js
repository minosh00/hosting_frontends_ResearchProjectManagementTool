import { useState } from "react";
import axios from 'axios';
import FileInput from "../PDFsubmit";
import styles from "./styles.module.css";
import React from 'react';
import { Link , useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SongForm = () => {
	const [data, setData] = useState({
		name: "",
		AssignmentType: "",
		Assignment: "",
		img: "",
	});


	const navigate = useNavigate();


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const url = 'https://hostingbackendresearchproject.herokuapp.com/upload/templateUpload'
			const { data : res } = await axios.post(url, data);
			{   Swal.fire('Congrats' , 'Successfully Upload Template ' , 'success')
			navigate("/AdminAll");
			  }
			console.log(res)
		} catch (error) {
			console.log(error)
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
		 <button  className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
			 Logout
		 </button>
	 </nav>
	
				<br />
			  
			 
				<br />
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit} >
				<h1 >Upload Assignment Template </h1>
				<input
					type="text"
					class="form-control" id="floatingInput" 

					placeholder="Assignments type"
					name="name"
					onChange={handleChange}
					value={data.name}
				/>
				<br></br>
				<input
					type="text"
				class="form-control" id="floatingInput" 
					placeholder="AssignmentType"
					name="AssignmentType"
					onChange={handleChange}
					value={data.AssignmentType}
				/>
				<br></br>
				<FileInput
					name="img"
					label="Choose Image"
					
					
					handleInputState={handleInputState}
					type="image"
					value={data.img}
				/>
				<br></br>
				<FileInput
					name="Assignment"
					label="Choose File"
					handleInputState={handleInputState}
					type="file"
					value={data.Assignment}
				/>
				<br></br>
				<button type="submit"className="btn btn-danger" >
					Submit
				</button>
			</form>


		</div>
		</div>
		</div>
	);
};

export default SongForm;
