import { AppBar } from "@material-ui/core";
import useStyles from "./landing_page_styles";

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <AppBar></AppBar>
    </div>
  );
}
