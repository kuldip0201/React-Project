import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  //to pass data in store for crate call using use disapatch
  const dispatch = useDispatch();
  const getUserData = (e) => {
    //Push data in Users from form
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    navigate("/read");
  };

  return (
    <div>

      <h2 className="text-center my-2 mt-4">Fill the data</h2>
      <form className="w-50 mx-auto my-5 mb-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label" for="radioDefault2">
            Female
          </label>
        </div>
        <button type="submit" className="btn btn-primary mb-2 ">
          Submit
        </button>
      </form>
    </div>
  );
}
