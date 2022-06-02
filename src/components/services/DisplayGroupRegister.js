import axios from 'axios';


let getGroupURL = "https://hostingbackendresearchproject.herokuapp.com/gruops/getAllGroups"; 
let getGroupByIdURL = "https://hostingbackendresearchproject.herokuapp.com/gruops/getGroupsById/";
let updateGroupByIdURL = "https://hostingbackendresearchproject.herokuapp.com/gruops/updateGroupsByID/";
let updateGroupIDByIdURL = "https://hostingbackendresearchproject.herokuapp.com/gruops/updateGroupsIDByID/";
let updatepannelmemberByIDURL = "https://hostingbackendresearchproject.herokuapp.com/gruops/updatepannelmemberByID/";


export async function updateGroupsByID(id,data) {
    const alldata = {
      
        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopLeaderEmail:data.GruopLeaderEmail,
        GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopMembersNames:data.GruopMembersNames,
        pannelmemberName:data.pannelmemberName,
        GruopMembersEmail:data.GruopMembersEmail,
        GruopMembersContectNumber:data.GruopMembersContectNumber,
        GroupID:data.GroupID
    };


    return await axios.patch(updateGroupByIdURL + id,alldata);
}

export async function getAllGroups() { 
    return await axios.get(getGroupURL);
}

export async function getGroupsById(id) { 
    return await axios.get(getGroupByIdURL + id);
}



export async function updateGroupsIDByID(id,data) {
    const alldata = {
      

        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopLeaderEmail:data.GruopLeaderEmail,
         GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopMembersNames:data.GruopMembersNames,
        pannelmemberName:data.pannelmemberName,
        GruopMembersContectNumber:data.GruopMembersContectNumber,
        GruopMembersEmail:data.GruopMembersEmail,
        GroupID:data.GroupID
    };

    return await axios.patch(updateGroupIDByIdURL + id,alldata);
}


//allocated pannel member 

export async function updatepannelmemberByID(id,data) {
    const alldata = {
      

        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopLeaderEmail:data.GruopLeaderEmail,
         GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopMembersNames:data.GruopMembersNames,
        pannelmemberName:data.pannelmemberName,
        GruopMembersContectNumber:data.GruopMembersContectNumber,
        GruopMembersEmail:data.GruopMembersEmail,
        GroupID:data.GroupID
    };

    return await axios.patch(updatepannelmemberByIDURL + id,alldata);
}
