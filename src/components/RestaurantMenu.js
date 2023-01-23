import React from "react";
import { useParams } from "react-router-dom";
import { useMenu } from "../utils";
import MenuHeader from "./MenuHeader";
import MenuMain from "./MenuMain";

const menu = () => {
  const { restid } = useParams();
  const menu = useMenu(restid);

  return (
    <div className="menu">
      <MenuHeader {...menu} />
      <MenuMain {...menu} />
    </div>
  );
};

export default menu;
