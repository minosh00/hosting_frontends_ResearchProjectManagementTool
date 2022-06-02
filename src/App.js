import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StudentProfile from "./components/StudentProfile";
import AllStudents from "./components/Admin/AllStudents";
import AdminRegister from "./components/Admin/AdminRegister";
import StaffRegisterss from "./components/Admin/StaffRegisterSupervisor";
import StaffRegister from "./components/Admin/Staff";
import CoSupervisor from "./components/Admin/CoSupervisor";
import Panalmemeber from "./components/Admin/panalmemeber";
import {  useEffect, useState } from 'react';
//admin part



//pdf
import UploadPdf from "./components/Students/UploadPdf";
import DisplayUploadPdf from "./components/Students/DisplayUploadPdf";

import AddMarkingSchems from "./components/Admin/AddMarkingSchems";
import AllMarking from "./components/Admin/AllMarking";
import EditMarking from "./components/Admin/EditMarking";

import UpdateRoom from "./components/Admin/UpdateTpoicStatus";
import RegisterGroup from "./components/Students/RegisterGroup";
import RegisterGropStatus from "./components/Admin/RegisterGropStatus";
import GroupConfirmEmail from "./components/Students/GroupConfirmEmail";
import AssignGroupID from "./components/Admin/AssignGroupID";
import Mailer from "./components/Students/Mailer";
import StudentAll from "./components/Students/StudentAll";
import AdminAll from "./components/Admin/AdminAll";
import AllStaffAccount from "./components/Admin/AllStaffAccount";
import Allocatepanelmembers from "./components/Admin/Allocatepanelmembers";
import DisplayAllGroupsAddPanelMembers from "./components/Admin/DisplayAllGroupsAddPanelMembers";
import AllocatedPanelMemberConfirmEmail from "./components/Admin/AllocatedPanelMemberConfirmEmail";
import AllTopics from "./components/PanelMember/AllTopics";
import EvaluateTopic from "./components/PanelMember/EvaluateTopic";
import DisplayGroupRegisterStatusStudent from "./components/Students/DisplayGroupRegisterStatusStudent";
import EvaluateTopicsStatusSendEmail from "./components/PanelMember/EvaluateTopicsStatusSendEmail";
import RequestCoSupervisor from "./components/SupervisorCoSupervisor/RequestCoSupervisor";
import RequestCoSupervios from "./components/Students/RequestCoSupervios";
import RequestSupervisor from "./components/Students/RequestSupervisor";
import DisplayApproivedTopicList from "./components/Students/DisplayApproivedTopicList";
import RequestTopicRegister from "./components/Students/RequestTopicRegister";
import TopicAcpect from "./components/SupervisorCoSupervisor/TopicAcpect";
import DisplayRejectTopicList from "./components/Students/DisplayRejectTopicList";
import RequestSupervisorss from "./components/SupervisorCoSupervisor/RequestSupervisor";
import SupervisorReqStatusUpdate from "./components/SupervisorCoSupervisor/SupervisorReqStatusUpdate";
import DisplaySuperviorStatus from "./components/Students/DisplaySuperviorStatus";
import DisplaySupervisorStatusReject from "./components/Students/DisplaySupervisorStatusReject";
import SupervisorCoSupervisorAll from "./components/SupervisorCoSupervisor/SupervisorCoSupervisorAll";
import UpdateAssigmentevaluate from "./components/Students/Download/UpdateAssigmentevaluate";
import AllEvaluvateMessage from "./components/Students/Download/AllEvaluvateMessage";
import Footer from "./components/Footer/Footer";
import SongForm from './components/pdfFromat';
import React from 'react';
import Song from './components/Download';
import Chat from "./components/Students/Chat/Chat";
import SongForm1 from './components/Students/pdfFromat';
import Song1 from './components/Students/Download';
import AllPnaelMembersInterface from './components/PanelMember/AllPnaelMembersInterface';
import CheckMarkingSChema from './components/PanelMember/CheckMarkingSChema';

import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");


  useEffect(() => {
    setUser(localStorage.getItem("userRole"));
  }, []);



  return (
    <>
      <div>
        <Router>
          <Routes>
     
            <Route  path="/upload" element={<SongForm />} />
            <Route path="/downloadAssigment" element={<Song />} />
            <Route path="/uploadAssigment" element={<SongForm1 />} />
            <Route path="/downloadAssigmentsup" element={<Song1 />} />
            <Route extact  path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/StudentProfile" element={<StudentProfile />} />
            <Route path="/AllStudents" element={<AllStudents />} />
            <Route path="/AdminRegister" element={<AdminRegister />} />
            <Route path="/StaffRegister" element={<StaffRegister />} />
            <Route path="/supervisor" element={<StaffRegisterss />} />
            <Route path="/CoSupervisor" element={<CoSupervisor />} />
            <Route path="/panalmemeber" element={<Panalmemeber />} />
            <Route path="/UploadPdf" element={<UploadPdf />} />
            <Route path="/DisplayUploadPdf" element={<DisplayUploadPdf />} />
            <Route path="/updateTopicByID/:id" element={<UpdateRoom />} />
            <Route path="/updateTopicemailByID/:id" element={<Mailer />} />
            <Route path="/updateGroupsByID/:id" element={<AssignGroupID />} />
            <Route path="/updateGroupsIDByID/:id"element={<GroupConfirmEmail />}/>
            <Route path="/updatePannelMemberByID/:id"element={<Allocatepanelmembers />}/>
            <Route path="/updatepannelmemberByID/:id"element={<AllocatedPanelMemberConfirmEmail />}/>
            <Route path="/DisplayAllGroupsAddPanelMembers" element={<DisplayAllGroupsAddPanelMembers />} />
            <Route path="/updateEvaluateByID/:id"element={<EvaluateTopic />}/>
            <Route path="/AllTopicsPnelMmeber" element={<AllTopics />} />
            <Route path="/updatesendemailByID/:id"element={<EvaluateTopicsStatusSendEmail />}/>
            <Route path="/RegisterGroup" element={<RegisterGroup />} />
            <Route path="/RegisterGropStatus" element={<RegisterGropStatus />} />
            <Route path="/StudentAll" element={<StudentAll />} />
            <Route path="/AdminAll" element={<AdminAll/>} />
            <Route path="/AllStaffAccount" element={<AllStaffAccount/>} />
            <Route path="/DisplayGroupRegisterStatusStudent" element={<DisplayGroupRegisterStatusStudent/>} />
            <Route path="/RequestCoSupervisor" element={<RequestCoSupervisor/>} />
            <Route path="/RequestCoSupervios" element={<RequestCoSupervios/>} />
            <Route path="/RequestSupervisor" element={<RequestSupervisor/>} />
            <Route path="/RequestTopicRegister" element={<RequestTopicRegister/>} />
            <Route path="/TopicAcpect" element={<TopicAcpect/>} />
            <Route path="/DisplayApproivedTopicList" element={<DisplayApproivedTopicList/>} />
            <Route path="/DisplayRejectTopicList" element={<DisplayRejectTopicList/>} />
            <Route path="/RequestSupervisorss" element={<RequestSupervisorss/>} />
            <Route path="/DisplaySuperviorStatus" element={< DisplaySuperviorStatus/>} />
            <Route path="/updateSupervicorByID/:id"element={<SupervisorReqStatusUpdate />}/>
            <Route path="/DisplaySupervisorStatusReject" element={< DisplaySupervisorStatusReject/>} />
            <Route path="/SupervisorCoSupervisorAll" element={< SupervisorCoSupervisorAll/>} />
            <Route path="/AllEvaluvateMessage" element={< AllEvaluvateMessage/>} />
            <Route path="/updateAssigment/:id" element={< UpdateAssigmentevaluate/>} />
            <Route path="/Chat" element={< Chat/>} />
            <Route path="/AllPnaelMembersInterface" element={< AllPnaelMembersInterface/>} />
            <Route path="/AddMarkingSchems" element={< AddMarkingSchems/>} />
            <Route path="/AllMarking" element={< AllMarking/>} />
            <Route path="/CheckMarkingSChema" element={< CheckMarkingSChema/>} />

            <Route path="/updateMarking/:id" element={< EditMarking/>} />

            
            

            
            
            
            
            
            

          </Routes>
          <Footer/>
        </Router>
      
      </div>
    </>
  );
}

export default App;
