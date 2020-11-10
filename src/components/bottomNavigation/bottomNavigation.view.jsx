import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SettingsIcon from "@material-ui/icons/Settings";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100vw",
      boxShadow: theme.shadows[5],
      position: "fixed",
      bottom: 0,
      background: theme.palette.background.default,
    },
  })
);
const BottomNavigationView = ({ handleTabs, value }) => {
  const classes = useStyles();
  return (
    <BottomNavigation
      value={value}
      onChange={handleTabs}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={NavLink}
        to="/newUpload"
        label="New"
        icon={<AddCircleOutlineIcon />}
      />
      <BottomNavigationAction
        component={NavLink}
        to="/uploads"
        label="Uploads"
        icon={<CloudUploadIcon />}
      />
      <BottomNavigationAction
        component={NavLink}
        to="/settings"
        label="Settings"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
};
export default BottomNavigationView;
