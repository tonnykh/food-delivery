import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {

  const { user } = useContext(UserContext);
  return <footer>Footer - {user.name} - {user.email }</footer>;
};

export default Footer;