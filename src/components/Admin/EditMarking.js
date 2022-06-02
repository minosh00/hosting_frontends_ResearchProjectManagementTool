import axios from 'axios';
 
import React from "react";
import {useState ,useEffect }from 'react'
import { Link , useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditMarking = () => {
    const[assiginmentName,setAssiginmentName] = useState("");
    const[fullMarks,setFullMarks] = useState("");
    const[discription,setDiscription] = useState("");
    const[MandoryPoints,setMandoryPoints] = useState("");
    const {id} = useParams();

    const changeOnClick = f =>{
      f.preventDefault();
  
      const updatemarking={
        assiginmentName,
        fullMarks,
        discription,
        MandoryPoints,
      };
      setAssiginmentName("");
      setFullMarks("");
      setDiscription("");
      setMandoryPoints("");

  axios.put(`https://hostingbackendresearchproject.herokuapp.com/marking/updateMarking/${id}`,updatemarking)
  .then(res=>
    {   Swal.fire('Congrats' , 'update successfully ' , 'success')

            
    
       }
    
    )
  .catch(err=>{console.log(err)});
    
    };

    useEffect(()=>{
        axios.get(`https://hostingbackendresearchproject.herokuapp.com/marking/oneMark/${id}`)
        .then(res=>[
            setAssiginmentName(res.data.assiginmentName),
            setFullMarks(res.data.fullMarks),
            setDiscription(res.data.discription),
            setMandoryPoints(res.data.MandoryPoints)
        ])
        .catch(err=> console.log(err));
    },[]);
  return (
    <div>
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
      <center>
      <div className="col-lg-6">
      <div className="card2 card border-0 px-4 py-5">
      <form onSubmit={changeOnClick} encType="multipart/form-data">
    <div className="form-group">
      <h1>Update marking scheme</h1>
      <label for="exampleFormControlInput1">Assiginment Name</label>
      <input type="text" 
      onChange={f=>setAssiginmentName(f.target.value)}
      value={assiginmentName}
      class="form-control"  
      placeholder="Enter Assiginment Name"/>
    </div>
    <div className="form-group">
      <label for="exampleFormControlInput1">Allocated Full Marks</label>
      <input type="text" 
      onChange={f=>setFullMarks(f.target.value)}
      class="form-control" 
      value={fullMarks} 
      placeholder="Full Marks"/>
    </div>
    
    
    <div className="form-group">
      <label for="exampleFormControlTextarea1">Discription</label>
      <textarea class="form-control"  
      onChange={f=>setDiscription(f.target.value)}
      value={discription}
      rows="3">
      </textarea>

    </div>
    <div className="form-group">
      <label for="exampleFormControlTextarea1">Mandertory Points and Marks for each Point</label>
      <textarea 
      class="form-control"
      onChange={f=>setMandoryPoints(f.target.value)}
      value={MandoryPoints}
      rows="3">
      </textarea>

    </div>
   <button type="submit" className="btn btn-primary">Update</button>
  </form>
  </div>
  </div>
  </center>
  </div>
  )
}


export default EditMarking