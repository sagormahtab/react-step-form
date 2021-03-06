import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const FormPersonalDetails = (props) => {
  const classes = useStyles();
  const { handleNext, handleBack, handleChange, values } = props;

  const continueStep = (e) => {
    e.preventDefault();
    handleNext();
  };
  const back = (e) => {
    e.preventDefault();
    handleBack();
  };
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Enter Personal Details
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        placeholder="Enter Your Occupation"
        label="Occupation"
        onChange={handleChange("occupation")}
        defaultValue={values.occupation}
      />
      <br />
      <TextField
        placeholder="Enter Your City"
        label="City"
        onChange={handleChange("city")}
        defaultValue={values.city}
      />
      <br />
      <TextField
        placeholder="Enter Your Bio"
        label="Bio"
        onChange={handleChange("bio")}
        defaultValue={values.bio}
      />
      <br />
      <Button variant="contained" style={styles.button} onClick={back}>
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={styles.button}
        onClick={continueStep}
      >
        Continue
      </Button>
    </React.Fragment>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
