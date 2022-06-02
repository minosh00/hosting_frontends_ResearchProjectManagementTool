import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";

import axios from "axios";
import e from "cors";
import Swal from "sweetalert2";
import autoTable from 'jspdf-autotable'
import { jsPDF } from "jspdf";


const AllMarking = () => {
  const [MarkingSchema, SetMarkingSchema] = useState([]);

  const navigate = useNavigate();


  const getData = async () => {
    console.log("get data executed");
    await axios
      .get("https://hostingbackendresearchproject.herokuapp.com/marking/allMarking")
      .then((data) => {
        console.log("Data ", data);
        SetMarkingSchema(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  function pdfGenerat(){
    var doc = new jsPDF('landscape', 'px', 'a4', 'false');
    
    doc.autoTable({
           
            body: [
                [{ content: '  ', colSpan: 2, rowSpan: 2, styles: { halign: 'center' } }],
              ],
            })
        autoTable(doc, { html: '#cusdet' })
       doc.save('markingshema.pdf')
  
          }




  return (
    <div style={{ textAlign: "center" }}>
           
      <div style={{marginTop:"30px"}}>
          <center><h1>Welcome to  Research Project Management Tool system</h1></center> 
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



      <center>
        <h1>All Evaluvate Marking Schemes</h1>



      </center>
<br></br><br></br><br></br><br></br>
      <button className="btn btn-danger btn-sm"  style={{marginTop:"-100px" , marginLeft:"100px"}} onClick={pdfGenerat}>Download  MarkingShema PDF</button>
      <br></br><br></br><br></br>

      <table className="table" id="cusdet">
        <thead>
          <tr className="text-info bg-dark">
            <th scopse="col">#</th>
            <th scopse="col">Assiginment Name</th>
            <th scopse="col">Allocated Full Marks</th>
            <th scopse="col">Discription </th>
            <th scopse="col">Mandory Points</th>
       
          </tr>
        </thead>
        <tbody>
          {MarkingSchema.map((MarkSchema, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{MarkSchema.assiginmentName}</td>
              <td>{MarkSchema.fullMarks}</td>
              <td>{MarkSchema.discription}</td>
              <td>{MarkSchema.MandoryPoints}</td>
        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMarking;
