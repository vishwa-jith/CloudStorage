import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    color: theme.palette.primary.dark,
    width: "100%",
    height: "90vh",
    alignItems: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
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
                  <Typography>{`LastModified ${new Date(
                    item.LastModified
                  ).toDateString()} ${new Date(
                    item.LastModified
                  ).toLocaleTimeString()}`}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </Grid>
    </div>
  );
}
