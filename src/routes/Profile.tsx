import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../store";

const Profile: FC = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/");
    }
  }, []);
  return <h1>Profile</h1>;
};

export default Profile;
