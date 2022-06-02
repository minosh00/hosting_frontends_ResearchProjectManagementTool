import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";

import axios from "axios";
import e from "cors";
import Swal from "sweetalert2";

const AllMarking = () => {
  const [MarkingSchema, SetMarkingSchema] = useState([]);

  const navigate = useNavigate();

  

const deleteMarking = id =>{
  axios.delete(`https://hostingbackendresearchproject.herokuapp.com/marking/deleteMarkingSchema/${id}`)
  .then(res => 
    
    {Swal.fire('Congrats' , ' remove successfully ' , 'success')

}    )
  SetMarkingSchema(MarkingSchema.filter(elem=>elem._id !== id))
}

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
             <button  className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
                    Logout
                </button>
          </nav>



      <center>
        <h1>All Marking Schemes</h1>
      </center>
      <table className="table">
        <thead>
          <tr className="text-info bg-dark">
            <th scopse="col">#</th>
            <th scopse="col">Assiginment Name</th>
            <th scopse="col">Allocated Full Marks</th>
            <th scopse="col">Discription </th>
            <th scopse="col">Mandory Points</th>
            <th scopse="col">Action</th>
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
              <td>
                {" "}
                <a href={`/updateMarking/${MarkSchema._id}`}>
                  <button type="button" className="btn btn-primary">
                    Update 
                  </button> 
                </a>
                <button onClick={()=>deleteMarking(MarkSchema._id)} type="button" class="btn btn-danger">Remove Schema</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMarking;
