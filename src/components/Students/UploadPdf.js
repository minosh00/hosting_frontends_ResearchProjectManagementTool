import { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { Link , useNavigate } from "react-router-dom";


const UploadPdf = () => {
 
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  const [pdf, setPdf] = useState([]);


  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
}

  const upload = async (e) => {
    try {
      e.preventDefault();
     

      const data = new FormData();

      data.append("name", name);
      for (var x = 0; x < file.length; x++) {
        data.append("uploaded_Image", file[x]);
      }
   
      for (var x = 0; x < pdf.length; x++) {
        data.append("uploaded_Image", pdf[x]);
      }

     


      const res = await fetch(`https://hostingbackendresearchproject.herokuapp.com/pdfupload/`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {

        {   Swal.fire('Congrats' , 'Successfully Upload Your assignments' , 'success')
        navigate("/StudentProfile");
        setName("");
        setFile(null);
        setPdf(null);
       
          }
     
 
      }
    } catch (error) {
      {   Swal.fire('error' , 'Error upload your document please check again' , 'error')
      navigate("/UploadPdf");
      console.log(error);
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
 
 </nav>

            <br />
          
         
            <br />
            <br />
<br />
<div className="container">
    <div className="container mt-5">
                  <div className="card card0 border-0">
                      <div className="row d-flex">
                          <div >
                          <h1 style={{marginLeft:"350px"}}> Upload Your Assignments</h1>
                  
                              
                            
                              </div>
                          </div>
                          <div className="">
                            
                          <form className="form" onSubmit={upload} encType="multipart/form-data" >
                                
                                  <div className="card2 card border-0 px-4 py-1">
                              
                                  <br></br>
                                      <div class="form-floating mb-3">
                                          <input class="form-control"  name="text" value={name} required onChange={e=>{setName(e.target.value)}}  placeholder="Enter The Assignments Type/ Number " />
                                          <label for="floatingInput">assignments Type </label>
                                      </div>
    
                                      <div class="form-floating mb-3">
                                          <input class="form-control" type="file" multiple required filename="uploaded_Image" onChange={e => {setFile(e.target.files)}}  />
                                          <label for="floatingPassword">Upload Images /SS (JPG,PNG)</label>
                                      </div>
    
                                      <div class="form-floating mb-3">
                                          <input class="form-control"  type="file" multiple required filename="uploaded_Image"className="form-control-file" onChange={e => {setPdf(e.target.files)}}  />
                                          <label for="floatingPassword">Upload Pdf </label>
                                      </div>
    
    
                                      <div className="row mb-3 px-3">
                                          <button type="submit" 
      variant="primary"
       size="lg" className="btn btn-blue text-center">Upload</button>
                                      </div>
                                      <div>
                                    
                           
                                    
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

export default UploadPdf;
