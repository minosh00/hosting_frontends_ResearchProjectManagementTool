import axios from 'axios';


let createCoSupervisorURL = "https://hostingbackendresearchproject.herokuapp.com/CoSupervisorRequest/createCoSupervisor"; 
let getCoSupervisorByIdURL = "https://hostingbackendresearchproject.herokuapp.com/CoSupervisorRequest/getAllCoSupervisorRequest/";
let updateCoSupervisorByIdURL = "https://hostingbackendresearchproject.herokuapp.com/CoSupervisorRequest/updateCoSupervisorByID/";




export async function createCoSupervisorRequest(data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        CosupervisorID:data.CosupervisorID,
        
    };


    return await axios.post(createCoSupervisorURL,alldata);
}



export async function updateGroupsByID(id,data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        CosupervisorID:data.CosupervisorID,
        status:data.status
    };


    return await axios.patch(updateCoSupervisorByIdURL + id,alldata);
}

export async function getAllCoSupervisorRequest(id) { 
    console.log(id);
    return await axios.get(getCoSupervisorByIdURL+id);
}



