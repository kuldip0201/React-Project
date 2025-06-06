import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./customModal";
import { Link } from "react-router-dom";

export default function Read() {
  const dispatch = useDispatch();
  //this is store state getting user data from store using useSelector hook
  const { users, loading, error, searchData } = useSelector(
    (state) => state.app
  );
  const [id, setId] = useState();

  const [radioData, setRadioData] = useState("");
  //this useState are open popup for view and hide popup
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="text-center">All Data</h2>
      <div className="text-center">
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          checked={radioData === ""}
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label">All</label>
        <input
          className="form-check-input"
          checked={radioData === "Male"}
          name="gender"
          value="Male"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Male</label>

        <input
          className="form-check-input"
          checked={radioData === "Female"}
          name="gender"
          value="Female"
          type="radio"
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Female</label>
      </div>

      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })

            .map((ele) => (
              <div key={ele.id} className="card w-50 mx-auto my-2 text-center">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {ele.email}
                  </h6>
                  <p className="card-text">{ele.gender}</p>

                  <button
                    href="#"
                    className="card-link"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>

                  <Link to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </Link>
                  <Link
                    href="#"
                    className="card-link"
                    onClick={() => dispatch(deleteUser(ele.id))}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
