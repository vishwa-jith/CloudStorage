import React from "react";
import BottomNavigationView from "./bottomNavigation.view";

const BottomNavigation = ({ handleTabs, value }) => {
  return (
    <>
      <BottomNavigationView handleTabs={handleTabs} value={value} />
    </>
  );
};
export default BottomNavigation;
