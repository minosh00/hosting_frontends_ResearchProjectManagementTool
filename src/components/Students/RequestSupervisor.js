
import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetallStudents  } from "../../services/AuthServices";
import DataTable from "react-data-table-component";
import { 
	Badge,
	Card,
	CardHeader,
	CardTitle,
	CardBody,
    Form,
    Input,
	Label,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
   } from "reactstrap";


import { createSupervicor } from "../services/SupervisorRequest";
import Swal from 'sweetalert2';




const RequestSupervisor = () => {
  const navigate = useNavigate();

  const[GroupID,setGroupID]=useState("");
  const[GruopLeaderEmail,setGruopLeaderEmail]=useState("");


  const handleGroupID = (e) => {
    e.preventDefault();
    setGroupID(e.target.value)
  }

  const handleGruopLeaderEmail = (e) => {
    e.preventDefault();
    setGruopLeaderEmail(e.target.value)
  }




	const [staffDetails , setstaffDetails] = useState({});
	const [loading,setLoading] = useState(false);
	const [openModal , setopenModal] = useState(false);
	const [cosuperData,setstaffData] = useState({});

	const requestCoSupervisor = async (e) => {

		const data ={
			supervisorID: cosuperData.supervisorID,
			GroupID: GroupID,
			GruopLeaderEmail: GruopLeaderEmail,
		}
		let response = await createSupervicor(data);
		console.log("supervisorID reg ", response);
		if(response?.status == 201)
		{
			Swal.fire({
				icon: 'success',
				title: 'Congrats!',
				text: 'Request successfull...!',
			  })
              getAllsuperivsor();
			setopenModal(false);
		}
		else{
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Request Failed!',
			  })
		}
	}
  
	const getAllsuperivsor = async () => {
		try{
			setLoading(true);
			let data =  await GetallStudents();
			console.log("all co-spevisor",data);
			let array = [];
			data?.data?.map((item) => {
				if(item?.userRole == "Supervisor")
				{
					array.push(item);
				}
			})
			let newData  = array?.map((item) => {
				return {
                         name:item?.name,
                         email:item?.email,
						password:item?.password,
						userRole:item?.userRole,
						supervisorID:item?._id	
				}
			})

			setstaffDetails(newData);
			setLoading(false);
		}catch(error){
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		getAllsuperivsor();
	},[])

	const assignStaff = (data) => {
		setGroupID("");
		setGruopLeaderEmail("");
		setstaffData(data);
		setopenModal(true);
	}

	
	const columns = [
		{
		  name: (<Badge color="success" style={{fontSize:"15px"}} > Name</Badge>),
		  selector: "name",
		  sortable: false,
		  wrap: true,
		},
		{
		  name: (<Badge color="success" style={{fontSize:"15px"}} >Email</Badge>),
		  selector: "email",
		  cell: (data) => (
			<div style={{ display: "flex", flexDirection: "column" }}>
			  <Label>{ data.email}<br/></Label>
			</div>
		  ),
		},
		{
			name: (<Badge color="success" style={{fontSize:"15px"}} >name </Badge>),
			selector: "name ",
			cell: (data) => (
			  <div style={{ display: "flex", flexDirection: "column" }}>
				<Label>{data.name}<br/></Label>
			  </div>
			),
		  },
		{
			name: (<Badge color="danger" style={{fontSize:"15px"}} >Actions</Badge>),
			cell: (data ) => (
			  <div>
				  	<Button className="btn btn-warning" onClick={()=>assignStaff(data)}>Request</Button>
			  </div>
			),
			sortable: true,
			wrap: true,
		}
	  ];

  return (
    <div style={{marginTop:"70px" , marginBottom:"70px"}}>
		
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
    <div style={{margin:"10px"}}>
<Card>
<CardHeader>
    <CardTitle style={{color:"red" , fontSize:"30px"}}>Request Supervisor</CardTitle>
</CardHeader>
<CardBody>
<DataTable 
style={{backgroundColor:"purple"}}
data={staffDetails}
columns={columns}

progressPending={loading}

/>
</CardBody>
</Card>
</div>

<div>
<Modal
isOpen={openModal}
className="modal-dialog-centered"
fade={true}
backdrop={true}>
<ModalHeader
            toggle={() => {
      setopenModal(false);
      }}>
  <Label>Enter Details</Label>
</ModalHeader>
<ModalBody>
<div style={{width:"400px"}}> 
                  <Form>
                    <Label>Group Leader IT Number </Label>
                    <Input type="text" className="input" placeholder="Leader IT Number" value={GroupID} onChange={(e)=>handleGroupID(e)}/>
                    <br/>
                    <Label>Group Registration Number </Label>
                    <Input type="text" className="input" placeholder="Group Registration Number" value={GruopLeaderEmail} onChange={(e)=>handleGruopLeaderEmail(e)}/>
                    <br/>
                    <Button className="btn btn-success" onClick={(e)=>requestCoSupervisor(e)}>Request</Button>
                  </Form>
</div>
</ModalBody>
</Modal>
</div>
</div>
</div>
</div>
);
};

export default RequestSupervisor;

