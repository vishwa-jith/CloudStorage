import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LabelIcon from "@material-ui/icons/Label";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import StorageIcon from "@material-ui/icons/Storage";
import TodayIcon from "@material-ui/icons/Today";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: theme.palette.primary.dark,
    width: "100%",
    height: "90vh",
    alignItems: "center",
    overflow: "hidden",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "50%",
    flexShrink: 0,
    fontWeight: "bold",
    color: theme.palette.text.secondary,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accord: {
    width: "90vw",
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  width: {
    width: "95%",
  },
}));

export default function ControlledAccordions({ expanded, handleChange, list }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        {list &&
          list.map((item, index) => {
            return (
              <Accordion
                className={classes.accord}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}bh-header`}
                  id={`panel${index + 1}bh-header`}
                >
                  <Typography className={classes.heading}>
                    {item.Key}
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    {`${item.Size} B`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accord}>
                  <List className={classes.width}>
                    <ListItem title="StorageClass">
                      <ListItemIcon>
                        <StorageIcon />
                      </ListItemIcon>
                      <ListItemText>{`${item.StorageClass}`}</ListItemText>
                    </ListItem>
                    <ListItem title="LastModified">
                      <ListItemIcon>
                        <TodayIcon />
                      </ListItemIcon>
                      <ListItemText>
                        {`${new Date(item.LastModified).toDateString()}`}
                      </ListItemText>
                    </ListItem>
                    <ListItem title="LastModifiedTime">
                      <ListItemIcon>
                        <AccessTimeIcon />
                      </ListItemIcon>
                      <ListItemText>
                        {`${new Date(item.LastModified).toLocaleTimeString()}`}
                      </ListItemText>
                    </ListItem>
                    <ListItem title="ETag">
                      <ListItemIcon>
                        <LabelIcon />
                      </ListItemIcon>
                      <ListItemText>{`${item.ETag}`}</ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <DeleteIcon />
                      </ListItemIcon>
                      <ListItemText>DELETE</ListItemText>
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <GetAppIcon />
                      </ListItemIcon>
                      <ListItemText>DOWNLOAD</ListItemText>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </Grid>
    </div>
  );
}
