import React from "react";
import useStyles from "./terms_and_conditions_styles";

export default function TermsAndConditions() {
  const classes = useStyles();
  return (
    <div className={classes.terms_and_conditions}>
      <span className={classes.words}>Terms</span> and <span className={classes.words}>Conditions</span> &{" "}
      <span className={classes.words}>Privacy Policy</span>
    </div>
  );
}
