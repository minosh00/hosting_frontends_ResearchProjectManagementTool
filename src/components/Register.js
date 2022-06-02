import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {RegisterStudent} from '../services/AuthServices';
import Swal from "sweetalert2";
import logo from './images/Easier-task-assignment.png'
import './ClientLogin.css'

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
 

  const handleName = (e) => {
    setName(e.target.value);
  };
 

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handlemobileno = (e) => {
    setMobileno(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      {   Swal.fire('error' , 'Fill The All Data ' , 'error')
      navigate("/register");
        }
    } else {
        let newdata = {
            name:name,
            email:email,
            password:password,
        }
        let studentdata =  await RegisterStudent(newdata);
        console.log("return data",studentdata);
        localStorage.setItem("token",studentdata.data.token);
        localStorage.setItem("userRole",studentdata.data.userRole);
        {   Swal.fire('Congrats' , 'Successfully create Your Account ' , 'success')
        navigate("/StudentProfile");
          }
    }
  };
 


  return (
    <div >
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
        <div>
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                   <div className="card card0 border-0">
                   <form >
                       <div className="row d-flex">
                           <div className="col-lg-6">
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={logo} style={{height:"300px"}} className="image" /> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                               <div className="card2 card border-0 px-4 py-5">
                               <h1>Student Registration </h1>
                               <br></br>
                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">Student  name </label>
                                       <input type="text" class="form-control" id="floatingInput"  onChange={handleName} value={name}  placeholder="user name" />
                                   
                                   </div>
                                   <div class="form-floating mb-3">
                                   <label for="floatingPassword">Password</label>
                                       <input  class="form-control" id="floatingPassword"  onChange={handlePassword}     value={password} type="password"   placeholder="Password" />
                                     
                                   </div>

                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">Student email </label>
                                       <input type="email" class="form-control" id="floatingInput"    onChange={handleEmail}  value={email}  placeholder="student email" />
                                     
                                   </div>

                                  
                                   


                                   <div class="form-check mb-3">
                                       <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />&nbsp;
                                       <label class="form-check-label" for="rememberPasswordCheck">
                                           Remember password
                                       </label>
                                   </div>
                                   <div className="row mb-3 px-3">
                                       <a ><button  type="submit" onClick={handleSubmit} className="btn btn-blue text-center">Register</button></a>
                                       
                                   </div>
                                   
                                   <div>
                                     
                                       <b><small>have an account? <a href="/Login" className="text-danger "><b>Login</b></a></small></b>
                                       
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                       </form>
               
                   </div>
               </div>
               
   </div>
    </div>
  )
};

export default Register;