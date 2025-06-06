import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/userDetailSlice"; // Named import

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  // Initialize updateData with default values to prevent uncontrolled inputs
  const [updateData, setUpdateData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    if (id && users.length > 0) {
      const singleUser = users.find((ele) => ele.id === id);
      if (singleUser) {
        setUpdateData(singleUser); // Set the user data when found
      }
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure the payload matches the expected structure for updateUser
    dispatch(
      updateUser({
        id: updateData.id,
        name: updateData.name,
        email: updateData.email,
        age: updateData.age,
        gender: updateData.gender,
      })
    )
      navigate("/read")
      .catch((error) => {
        console.error("Update failed:", error);
      });
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2 className="text-center my-2 mt-4">Edit the data</h2>
      <form className="w-50 mx-auto my-5 mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData.name || ""}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={updateData.email || ""}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={updateData.age || ""}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}