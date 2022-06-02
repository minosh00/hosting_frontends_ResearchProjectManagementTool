  

 import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getTopicById, updateTopicRequestByID } from "../services/RequestTopic";


const EvaluateTopic = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };



  const [GroupID, setGroupID] = useState("");
  const [TopicName, setTopicName] = useState("");
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [GruopMembersItNumbers, setGruopMembersItNumbers] = useState("");
  const [GruopLeaderItNumber, setGruopLeaderItNumber] = useState("");
  const [GruopMembersNames, setGruopMembersNames] = useState("");
  const [status, setstatus] = useState("");
  const [Urls, setUrls] = useState("");
  const [Message, setMessage] = useState("");





  const handleRoomNo = (e) => {
    setGroupID(e.target.value);
  };

  const handlesetTopicName = (e) => {
    setTopicName(e.target.value);
  };



  const handleRoomFloor = (e) => {
    setGruopLeaderEmail(e.target.value);
  };

  const handleRoomType = (e) => {
    setGruopMembersItNumbers(e.target.value);
  };

  const handlemember = (e) => {
    setGruopMembersNames(e.target.value);
  };

  const handlegruopleaderitnum = (e) => {
    setGruopLeaderItNumber(e.target.value);
  };
  const handlestatus = (e) => {
    setstatus(e.target.value);
  };


  const handleURL = (e) => {
    setUrls(e.target.value);
  };
  const handlesetMessage = (e) => {
    setMessage(e.target.value);
  };





  const GetTopicData = async () => {
    let data = await getTopicById(id);
    console.log("Update topics", data);
    setGroupID(data?.data?.GroupID);
    setGruopLeaderEmail(data?.data?.GruopLeaderEmail);
    setGruopMembersItNumbers(data?.data?.GruopMembersItNumbers);
    setGruopMembersNames(data?.data?.GruopMembersNames);
    setGruopLeaderItNumber(data?.data?.GruopLeaderItNumber);
    setstatus(data?.data?.status);
    setTopicName(data?.data?.TopicName);
    setUrls(data?.data?.Urls);
    setMessage(data?.data?.Message);

  };

  useEffect(() => {
    GetTopicData();
  }, []);

  const UpdateTopicData = async (e) => {
    e.preventDefault();
    let newdata = {
      GroupID: GroupID,
      GruopLeaderEmail: GruopLeaderEmail,
      GruopMembersItNumbers: GruopMembersItNumbers,
      GruopMembersNames: GruopMembersNames,
      GruopLeaderItNumber: GruopLeaderItNumber,
      status: status,
      Urls:Urls,
      Message:Message,
      TopicName: TopicName,

    };

    let data = await updateTopicRequestByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.GroupID) {
        Swal.fire("success", " successfully  Evaluate  Topic", "success");{

            navigate("/AllTopicsPnelMmeber");

        }
    
    } else {
        Swal.fire("success", " successfully  Evaluate  Topic", "success");{

            navigate("/AllTopicsPnelMmeber");

        }
    }
  };

  return (
    <div >
  







    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <center>
        <br />
        <form>
          

        <div class="form-floating mb-3">
                <label for="floatingInput">  Group ID</label>
                    <input type="text" class="form-control" id="floatingInput"  readOnly={true}  onChange={handleRoomNo}    value={GroupID}   />
     
                </div>

                <div class="form-floating mb-3">
                <label for="floatingPassword">Topic Name</label>
                    <input  class="form-control" id="floatingInput"   readOnly={true}  onChange={handlesetTopicName}    value={TopicName}    />
                  
                </div>


                <div class="form-floating mb-3">
                <label for="floatingInput">  URLS Resources </label>
                 
                    <textarea type="url" class="form-control" id="exampleFormControlTextarea3"   readOnly={true}  onChange={handleURL}    value={Urls}   rows="6">
                    </textarea>

                </div>



        <div class="form-floating mb-3">
                <label for="floatingInput">  Evaluate Message </label>
                 
                    <textarea  class="form-control" id="exampleFormControlTextarea3"  onChange={handlesetMessage}    value={Message}  required  placeholder="Type evaluate message "  rows="6">
                    </textarea>

                </div>
          
         





          <button
            onClick={(e) => UpdateTopicData(e)}
            className="btn btn-outline-danger"
            type="submit"
          >
            evaluate Topic Message
          </button>
        </form>
      </center>
    </div>
    </div>
  );
};

export default EvaluateTopic;


