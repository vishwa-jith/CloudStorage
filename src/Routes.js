import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Uploads from "./pages/Uploads";
import NewUploads from "./pages/NewUploads";
import Settings from "./pages/Settings";
const Routes = () => {
  return (
    <Switch>
      <Route path="/uploads" exact component={Uploads} />
      <Route path="/newUpload" exact component={NewUploads} />
      <Route path="/settings" exact component={Settings} />
    </Switch>
  );
};
export default Routes;
