import React from "react";
import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, showPopup, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);
  console.log("singleUSer", singleUser);

  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <button onClick={()=>setShowPopup(false)} className="d-flex align-item-end justify-content-end">Close</button>
          <h2>{singleUser[0].name}</h2> 
          <h2>{singleUser[0].email}</h2>
          <h2>{singleUser[0].age}</h2>
          <h2>{singleUser[0].gender}</h2>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
