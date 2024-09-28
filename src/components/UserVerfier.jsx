import axios from "axios";
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/LoginSlice";
import { useNavigate } from "react-router-dom";

const UserVerfier = () => {
  const user = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate=useNavigate()
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
        navigate("/")
      };
      if (!user.username || !user) {
        verfiyUser();
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, user.username,navigate]);

  return null;
};

export default UserVerfier;
