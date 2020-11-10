import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      color: theme.palette.primary.dark,
      width: "100%",
      height: "100vh",
      alignItems: "center",
    },
    rootFont: {
      color: theme.palette.primary.dark,
      fontSize:
        "calc( 30px + ( 50 - 30 ) * (( 100vw - 300px ) / ( 1600 - 300 )))",
      fontWeight: "bold",
    },
    font: {
      color: theme.palette.primary.dark,
      fontSize:
        "calc( 150px + ( 300 - 150 ) * (( 100vw - 300px ) / ( 1600 - 300 )))",
    },
    margin: {
      marginBottom: "15px",
    },
    input: {
      display: "none",
    },
    greencolor: {
      color: theme.palette.success.main,
      borderColor: theme.palette.success.main,
    },
    redcolor: {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
    },
  })
);
const NewUploadsView = ({
  files,
  handleFileChange,
  handleCancel,
  handleSubmit,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid item container justify="center" alignItems="center" xs={12}>
          <Paper elevation={2}>
            <Box py={2}>
              <Grid container justify="center" alignItems="center">
                <Grid container justify="center" alignItems="center">
                  <Typography className={classes.rootFont}>
                    Cloud Storage
                  </Typography>
                </Grid>
                <Grid container justify="center" alignItems="center">
                  <CloudUploadIcon className={classes.font} />
                </Grid>
                <form onSubmit={handleSubmit}>
                  <Grid container justify="center" alignItems="center">
                    {files ? (
                      <>
                        <ButtonGroup variant="outlined">
                          <Button
                            type="submit"
                            size="large"
                            className={classes.greencolor}
                            onClick={handleSubmit}
                          >
                            <DoneIcon />
                          </Button>
                          <Button
                            size="large"
                            className={classes.redcolor}
                            onClick={handleCancel}
                          >
                            <CloseIcon />
                          </Button>
                        </ButtonGroup>
                      </>
                    ) : (
                      <>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            color="primary"
                            aria-label="add"
                            className={classes.margin}
                            component="span"
                          >
                            <PublishIcon />
                            <Typography style={{ marginLeft: "4px" }}>
                              UPLOAD
                            </Typography>
                          </Button>
                        </label>
                      </>
                    )}
                  </Grid>
                </form>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default NewUploadsView;
