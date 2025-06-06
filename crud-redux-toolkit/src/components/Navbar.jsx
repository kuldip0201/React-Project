import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";


const Navbar = () => {
  //Selecter is used to get or use data from gloabal state in that ase use selector hook are used
  //getting data from slice
  const allUsers = useSelector((state) => state.app.users);

  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(searchUser(searchData))
  },[searchData]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <h4 className="navbar-brand">RTK</h4>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Post
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Post ({allUsers.length})
                </Link>
              </li>
            </ul>
          </div>
          <input
            className="form-control me-2 w-50"
            type="search"
            placeholder="Search"
            onChange={(e)=>setSearchData(e.target.value)}
          ></input>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
