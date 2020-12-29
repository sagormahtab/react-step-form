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

const FormUserDetails = (props) => {
  const classes = useStyles();
  const {
    handleNext,
    handleChange,
    values: { firstName, lastName, email },
    formErrors,
  } = props;

  // Check if all values are not empty or if there are some error
  const isValid =
    firstName.length > 0 &&
    !formErrors.firstName &&
    lastName.length > 0 &&
    !formErrors.lastName &&
    email.length > 0 &&
    !formErrors.email;

  const continueStep = (e) => {
    e.preventDefault();
    handleNext();
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
            Enter User Details
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        placeholder="Enter Your First Name"
        label="FirstName"
        onChange={handleChange("firstName")}
        value={firstName}
        // Two !! to make the value boolean
        error={!!formErrors.firstName}
        helperText={formErrors.firstName}
        required
      />
      <br />
      <TextField
        placeholder="Enter Your Last Name"
        label="LastName"
        onChange={handleChange("lastName")}
        value={lastName}
        error={!!formErrors.lastName}
        helperText={formErrors.lastName}
        required
      />
      <br />
      <TextField
        placeholder="Enter Your Email"
        label="Email"
        onChange={handleChange("email")}
        value={email}
        error={!!formErrors.email}
        helperText={formErrors.email}
        required
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        disabled={!isValid}
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

export default FormUserDetails;
