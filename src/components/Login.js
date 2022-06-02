import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { LoginStudent } from "../services/AuthServices";
import Swal from "sweetalert2";
import logo from './images/loginnn.webp'
const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		let data = await LoginStudent(formData);
		console.log("data",data);
        if(data.data.token)
        {
            localStorage.setItem("token",data.data.token);
            localStorage.setItem("userRole",data.data.userRole);
			{   Swal.fire('Congrats' , 'Successfully login Your Account ' , 'success')
			navigate("/StudentProfile");
			  }

        }
        else
        {
			   Swal.fire('error' , 'error login Your Account ' , 'error')
			
			  
        }
	}; 


	return (
		<div>
			     <center>
      <div style={{marginTop:"30px"}}>
          <center><h1 style={{"font-family": 'Chilanka'}} ><b>Welcome to  Research Project Management Tool system</b></h1></center> 
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
		<br/>
		<div className="container">
<div className="container mt-5">
              <div className="card card0 border-0">
                  <div className="row d-flex">
                      <div className="col-lg-6">
                          <div className="card1 pb-5">
                     
                              <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={logo} style={{height:"380px" , width:"450px"}} className="image" /> </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                      <form className="form" onSubmit={(e) => onSubmit(e)}>
                              <div className="card2 card border-0 px-4 py-5">
                              <h1> SIGN IN</h1>
                              <br></br>
                                  <div class="form-floating mb-3">
                                      <input class="form-control"  name="email" value={email} onChange={(e) => onChange(e)} required placeholder="Enter Email" />
                                      <label for="floatingInput">Email </label>
                                  </div>

                                  <div class="form-floating mb-3">
                                      <input class="form-control" type="password" placeholder="Password" 	name="password" 	minLength="6" value={password} onChange={(e) => onChange(e)} required />
                                      <label for="floatingPassword">Password</label>
                                  </div>

                                  <div class="form-check mb-3">
                                  <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />&nbsp;
                                  <label class="form-check-label" for="rememberPasswordCheck">
                                      Remember password
                                  </label>
                              </div>
                                  <div className="row mb-3 px-3">
                                      <button type="submit" className="btn btn-blue text-center">Login</button>
                                  </div>
                                  <div>
                                
                                <b><small>Dont have an account? <a href="/register" className="text-danger "><b>Register</b></a></small></b>
                                
                            </div>
                              </div>
                          </form>
                       
                      </div>
                  </div>
              </div>
          </div>
</div>

</div>
	
	);
};

export default Login;