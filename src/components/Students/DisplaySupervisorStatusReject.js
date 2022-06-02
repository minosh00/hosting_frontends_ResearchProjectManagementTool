 


import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";

function DisplaySupervisorStatusReject() {

  const [users, setusers] = useState();
  const [serachItem,setserachItem] =useState([]);
  const [loading, setloading] = useState(true);


  useEffect(async () => {

    try {
      const data = await (
        await axios.get("https://hostingbackendresearchproject.herokuapp.com/SupervisorRequest/AllSupervicorRequestStatus/")
      ).data;
        console.log("all data",data)
        var array =[]
      data?.map((users)=>{
        if(users?.status=="Reject")
        {
            array.push(users);
        }
    });
    setusers(array);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);


  function pdfGenerat(){
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    
    doc.autoTable({
           
            body: [
                [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
              ],
            })
        autoTable(doc, { html: '#cusdet' })
       doc.save('SupervisorRegister.pdf')
  
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

    

<br/>

    <div className="row">
  
      {loading && <Loader />}

      <div className="col-md-9">
      
        <center><h1>SupervisorRequest Reject  Status</h1></center>
    
        <div class="input-group">
  <div className="col-md-9">
  <h4> Now You Can Search Your Group     </h4>
  <input type="search" class="form-control rounded" style={{ marginRight:"120%" , marginTop:"30px"}} placeholder="Search by GroupID  " aria-label="Search"  onChange={event=>{setserachItem(event.target.value)}} 
    aria-describedby="search-addon" />
  </div>
</div>

<br></br> <br></br>
        <br></br>
        <button className="btn btn-danger btn-sm"  style={{marginTop:"-100px" , marginLeft:"100px"}} onClick={pdfGenerat}>Download PDF</button>

        <table className="table table-bordered " style={{marginLeft:"20%" , marginTop:"-20px" , width:""}}>
          <thead className="bs">
            <tr>
              <th  style={{color:"white" , backgroundColor:"black"}} >Group ID</th>
              <th  style={{color:"white" , backgroundColor:"black"}} >Gruop Leader Email</th>
              <th  style={{color:"white" , backgroundColor:"black"}} >status </th>
              <th  style={{color:"white" , backgroundColor:"black"}} >supervisorID</th>
           
            </tr>
          </thead>

          <tbody id="cusdet"  >
            {users &&
              users.filter((users)=>{
                if(serachItem ==""){
                      return users
                }else if(users.GroupID.toLowerCase().includes(serachItem.toLowerCase())){
             
                  return users
   }   })
                
              .map((users) => {
              
              
                return (
                  <tr>
                    <td>{users.GroupID}</td>
                    <td>{users.GruopLeaderEmail}</td>
                    <td>{users.status}</td>
                    <td>{users.supervisorID}</td>
        
                  </tr>
                );
              })}
          </tbody>
        </table>

       
      </div>
      
    </div>
    </div>
    </div>
  );
}

export default DisplaySupervisorStatusReject;


