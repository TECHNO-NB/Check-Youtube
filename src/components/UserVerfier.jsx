import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/LoginSlice";

const UserVerfier = () => {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const verfiyUser = async () => {
        axios.defaults.withCredentials = true;
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/refreshaccesstoken`
        );
        if (!res.data.data.user) {
          console.log("error");
        }
        dispatch(login(res.data.data.user));
      };
      if (!user.username || !user) {
        verfiyUser();
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch,user.username]);

  return null;
};

export default UserVerfier;
