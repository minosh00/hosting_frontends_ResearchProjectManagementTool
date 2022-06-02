
import React , {useState} from 'react';
import { Link , useNavigate } from "react-router-dom";
import {CreateStaffCoSupervisor} from '../../services/AuthServices';
import Swal from "sweetalert2";
import logo from '../images/funny-cartoon-woman-manager-presenting-whiteboard-vector-19952688-removebg-preview.png'
import '../ClientLogin.css'

const CoSupervisor = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [interestsTopicFiled, setinterestsTopicFiled] = useState('');

 

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


  const handleinterestsTopicFiled = (e) => {
    setinterestsTopicFiled(e.target.value);
  };


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      {   Swal.fire('error' , 'Fill The All Data ' , 'error')
      navigate("/CoSupervisor");
        }
    } else {
        let newdata = {
            name:name,
            email:email,
            password:password,
            interestsTopicFiled:interestsTopicFiled,

        }
        let admindata =  await CreateStaffCoSupervisor(newdata);
        console.log("return data",admindata);
        localStorage.setItem("token",admindata.data.token);
        localStorage.setItem("userRole",admindata.data.userRole);
        {   Swal.fire('Congrats' , 'Successfully create Co Supervisor Account ' , 'success')
        navigate("/CoSupervisor");
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

        <div>
          <br></br>
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                   <div className="card card0 border-0">
                     <br></br>
                   <form >
                       <div className="row d-flex">
                           <div className="col-lg-6">
                               <div className="card1 pb-5">
                          
                                   <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={logo} style={{height:"300px"}} className="image" /> </div>
                               </div>

                       
                           </div>

                           
                           <div className="col-lg-6">
                               <div className="card2 card border-0 px-4 py-5">
                               <h1>Co Supervisor Registration </h1>
                               <br></br>

                               <div class="form-floating mb-3">
                                   <label for="floatingInput">  email </label>
                                       <input type="email" class="form-control" id="floatingInput"    onChange={handleEmail}  value={email}  placeholder="student email" />
                                     
                                   </div>

                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  name </label>
                                       <input type="text" class="form-control" id="floatingInput"  onChange={handleName} value={name}  placeholder="user name" />
                                   
                                   </div>
                                   <div class="form-floating mb-3">
                                   <label for="floatingPassword">Password</label>
                                       <input  class="form-control" id="floatingPassword"  onChange={handlePassword}     value={password} type="password"   placeholder="Password" />
                                     
                                   </div>

                                   <div class="form-floating mb-3">
                                   <label for="floatingInput">  interests Topic Filed </label>
                                       <input type="text" class="form-control" id="floatingInput"    onChange={handleinterestsTopicFiled}  value={interestsTopicFiled}  placeholder="interests Topic Filed" />
                                     
                                   </div>

                            

                              
                                   <div className="row mb-3 px-3">
                                       <a ><button  type="submit" onClick={handleSubmit} className="btn btn-blue text-center">Register</button></a>
                                       
                                   </div>
                                   
                                   <div>
                                     
                               
                                       
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                       </form>
               
                   </div>
               </div>
               
   </div>
   </div>
    </div>
  )
};

export default CoSupervisor;



 

 