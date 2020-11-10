import React, { useState } from "react";
import BottomNavigation from "./components/bottomNavigation";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  const [value, setValue] = useState(1);
  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <BrowserRouter>
        <Routes />
        <BottomNavigation handleTabs={handleTabs} value={value} />
      </BrowserRouter>
    </>
  );
}
export default App;
