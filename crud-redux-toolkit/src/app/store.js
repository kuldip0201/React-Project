import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/userDetailSlice";
// import gitUser from "../features/gitUserSlice";
export const store = configureStore({
  reducer: {
  app:userDetail
  },
});