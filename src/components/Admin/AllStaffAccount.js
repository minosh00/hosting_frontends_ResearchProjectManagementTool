import React from 'react'
import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";
import { GetallStudents , DeleteAdmin  } from "../../services/AuthServices";
import logo from '../images/admin.jpg'
import Swal from "sweetalert2";


 const AllStaffAccount = () => {

    const navigate = useNavigate();

    const handleSubmit= ()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      navigate("/Login");
    }

	const [staff , setStaff] = useState([])
  

    
    const deleteUser = async (id) =>{
        let data = await DeleteAdmin(id);
        console.log("Delete ",data);
        if(!data?.data?.message)
        {
            alert("delete failed..");
        }
        else
        {
          {   Swal.fire('Congrats' , 'User remove successfully ' , 'success')

            
            window.location.reload();
               }
         
        }
      }



	const GetStudents = async () =>{
        let data = await GetallStudents();

        let staffdata =[];
        console.log("All Users",data?.data);
         data?.data.map((users)=>{
            if(users?.userRole == "Supervisor" || users?.userRole == "CoSupervisor"  ||  users?.userRole == "PanelMember"   )
            {
                staffdata.push(users);
            }
        });
        setStaff(staffdata);
    }
  

	useEffect(() => { 
        GetStudents();
   },[])
  




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
               
                <div >
                    <center >
                    <center><h1 style={{ color: "red" }}><b>All Staff Users List </b></h1></center>
                    </center>
                    
                    <br/><br/><br/>
                    <table className="table table-striped table-dark" style={{width:"1300px" , marginLeft:"180px"}}>
                        <thead>
                            <tr>
                            <th>Temporary_ID</th>
                            <th> Name</th>
                            <th> Email</th>
                            <th> User Role</th>
                            <th> Create Account Date</th>
                            <th>Remove User</th>
                          
                            </tr>
                        </thead>  
                        <tbody>
                            {staff.map((staff,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{staff?.name}</td>
                                    <td>{staff?.email}</td>
                                    <td>{staff?.userRole}</td>
                                    <td>{staff?.date}</td>
                                    <td>  <Link to ="">
                                    <button  type="button"  onClick={()=>deleteUser(staff?._id)}  className="btn btn-danger" style={{marginTop:'10px'}} > Remove User  </button>
                                    </Link>&nbsp;</td>
                                
                                

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
			</div>
		</div>
</div>
    
  )
}



export default AllStaffAccount;