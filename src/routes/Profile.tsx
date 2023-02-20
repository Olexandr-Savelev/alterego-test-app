import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Heading from "../components/UI/Heading";

import { useSelector } from "../store";

const Profile: FC = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/");
    }
  }, []);

  return (
    <Heading
      kind={"h1"}
      text={"Profile"}
    />
  );
};

export default Profile;
