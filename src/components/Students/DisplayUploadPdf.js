
 import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DisplayUploadPdf = () => {


  const [users, setUsers] = useState();


  
  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
}


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://hostingbackendresearchproject.herokuapp.com/pdfupload/`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
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

            <br />
          
         
            <br />
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
       {users?.map((user) => (
         <div className="col-md-3 card me-5 mt-2 p-1 mb-2  d-flex" key={user._id}><br></br>
           <img src={user.avatar} alt="" width={"50%"} height={"50%"} />
        
 
           <a href={user.pdf} download>Click to download Assignment </a>
           <div className="p-2">
             <h3> Assignment Type :{user.name}</h3>
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
  )
};

export default DisplayUploadPdf;
