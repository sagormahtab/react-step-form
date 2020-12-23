import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  listWrapper: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FormUserDetails = (props) => {
  const classes = useStyles();
  const {
    values: { firstName, lastName, email, occupation, city, bio },
    handleNext,
    handleBack,
  } = props;

  const continueStep = (e) => {
    e.preventDefault();
    // PROCESS FORM (API Call)
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
            Confirm User Data
          </Typography>
        </Toolbar>
      </AppBar>
      <List className={classes.listWrapper}>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={firstName}
            inset={true}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} inset={true} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={email} inset={true} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Occupation"
            secondary={occupation}
            inset={true}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={city} inset={true} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bio" secondary={bio} inset={true} />
        </ListItem>
      </List>
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
        Confirm & Continue
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
