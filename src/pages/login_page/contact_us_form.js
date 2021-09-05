import { Box, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button1 from "../../components/button_1/button_1";
import useStyles from "./login_page_styles";
import TermsAndConditions from "../../components/terms_and_conditions/terms_and_conditions";
var emailValidator = require("email-validator");

export default function SignUpForm() {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    restaurant: "",
    message: "",
    loading: false,
  });

  const changeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const contactAction = () => {
    if (!state.email || !emailValidator.validate(state.email)) {
      return global.showAlert(
        "Please Be Careful!",
        "Enter your valid email address. Your email address is important to verify the account."
      );
    }
    if (!state.restaurant) {
      return global.showAlert(
        "Please Be Careful!",
        "Enter your full name currectly. Your full name is important to us!"
      );
    }
  };

  return (
    <div className={classes.login_form_outer}>
      <Box height={20} />
      <FormControl fullWidth>
        <TextField
          className={classes.text_field}
          type="email"
          label="Please enter your email address"
          placeholder="johndoe@example.com"
          InputLabelProps={{ shrink: true }}
          value={state.email}
          onChange={(event) => {
            changeState("email", event.target.value);
          }}
        />
        <Box height={35} />
        <TextField
          className={classes.text_field}
          type="text"
          label="Please enter your full name "
          placeholder="Your full name "
          InputLabelProps={{ shrink: true }}
          value={state.restaurant}
          onChange={(event) => {
            changeState("restaurant", event.target.value);
          }}
        />
        <Box height={35} />
        <div className={classes.login_btn_outer}>
          <Button1
            loading={state.loading}
            onClick={contactAction}
            title={"Submit"}
            isSelected
            width={150}
          />
        </div>
        <TermsAndConditions />
      </FormControl>
    </div>
  );
}
