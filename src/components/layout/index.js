import React from "react";
import { Outlet } from "react-router-dom";
import { TopNav } from "../common";

const WebLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};

export default WebLayout;
