import React, { useState } from "react";
import BottomNavigation from "./components/bottomNavigation";

function App() {
  const [value, setValue] = useState(1);
  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <BottomNavigation handleTabs={handleTabs} value={value} />
    </>
  );
}

export default App;
