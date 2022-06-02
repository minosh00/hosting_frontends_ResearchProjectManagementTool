 

import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTopicById, SendEmailByid } from "../services/RequestTopic";

import Swal from "sweetalert2";


const EvaluateTopicsStatusSendEmail = () => {


  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };



  const [GroupID, setGroupID] = useState("");
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [TopicName, setTopicName] = useState("");
  const [Message, setMessage] = useState("");

  const handleRoomNo = (e) => {
    setGroupID(e.target.value);
  };

  const handleRoomFloor = (e) => {
    setGruopLeaderEmail(e.target.value);
  };


const handlestatus = (e) => {
    setTopicName(e.target.value);
  };

  const handlesetMessage= (e) => {
    setMessage(e.target.value);
  };




  const GetTopicData = async () => {

    let data = await getTopicById(id);

    console.log("Update data", data);
    setGroupID(data?.data?.GroupID);
    setGruopLeaderEmail(data?.data?.GruopLeaderEmail);
    setTopicName(data?.data?.TopicName);
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
      pannelmemberName: pannelmemberName,
      TopicName:TopicName,
      Message:Message,
      
      


    
    };

    let data = await SendEmailByid(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.GroupID) {
        Swal.fire("error", " please  check again ", "error");{

            navigate("/AllTopicsPnelMmeber");

        }

    } else {
        Swal.fire("success", " Student informed successfully ", "success");{

            navigate("/AllTopicsPnelMmeber");

        }


    
    }
  };

  function sendEmail(e) {

    
    e.preventDefault();

    emailjs.sendForm(
      "service_e05ylcg",
      "template_vqczdev",
      e.target,
      "l5NUKPpbvRhbN3ZLl"
    ).then(res=>{


        Swal.fire("success", " Student informed successfully ", "success");{

            navigate("/AllTopicsPnelMmeber");

        }

        console.log(res);
    }).catch(err=> console.log(err));
  }

  return (


    <div >
  


    <div

      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('../images/360_F_261952014_ekDtCY2vkfg7dptx7x2vdcRnJJlCzWNT-removebg-preview.png')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>panel member send message to student </h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>email</label>
        <input type="email" name="email" readOnly={true}  value={GruopLeaderEmail}   onChange={handleRoomFloor}  className="form-control" />

        <label>gruopID</label>
        <input type="text" name="GroupID" readOnly={true} value={GroupID}  onChange={handleRoomNo} className="form-control" />



        <label>Message</label>
        <textarea name="TopicName" rows="4"   placeholder=" "  value={TopicName}    className="form-control" />
        <textarea name="Message" rows="4"    value={Message}    className="form-control" />
      
      
      
      
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
    </div>
  );
};

export default EvaluateTopicsStatusSendEmail;
