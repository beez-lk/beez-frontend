import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./app_bar_styles";
import { Button} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function MyAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}></Typography>
        <div className={classes.btnset}>
          <Button
            className={classes.btnstyle}
            aria-controls="about-menu"
            aria-haspopup="true"
          >
            Sign In
          </Button>
          <Button
            className={classes.btnstyle}
            aria-controls="analytics-menu"
            aria-haspopup="true"
          >
            Sign Up
          </Button>
         
          <Button
            className={ classes.btnstyle}
          >
            Contact Us
          </Button>
        </div>
        <SearchIcon className={classes.searchIcon} />
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
