import { Box, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button1 from "../../components/button_1/button_1";
import useStyles from "./login_page_styles";
import TermsAndConditions from "../../components/terms_and_conditions/terms_and_conditions";
import { signUpCall } from "../../api_service/api_service";
var emailValidator = require("email-validator");

export default function SignUpForm() {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    name: "",
    loading: false,
  });

  const changeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const signUp = () => {
    if (!state.email || !emailValidator.validate(state.email)) {
      return global.showAlert(
        "Please Be Careful!",
        "Enter your valid Email Address. Your Email Address is important to verify the account."
      );
    }
    if (!state.name) {
      return global.showAlert(
        "Please Be Careful!",
        "Enter your Full Name correctly. Your Name is important to us!"
      );
    }
    changeState("loading", true);
    signUpCall(state.email, state.name).then((response) => {
      changeState("loading", false);
      if (response.success) {
        global.showAlert("Welcome to Beeez", response.message);
      } else {
        global.showAlert("", response.message);
      }
    });
  };

  return (
    <div className={classes.login_form_outer}>
      <Box height={20} />
      <FormControl fullWidth>
        <TextField
          className={classes.text_field}
          type="email"
          label="Please enter your Email Address"
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
          label="Please enter your Full Name "
          placeholder="Your full name "
          InputLabelProps={{ shrink: true }}
          value={state.name}
          onChange={(event) => {
            changeState("name", event.target.value);
          }}
        />
        <Box height={35} />
        <div className={classes.login_btn_outer}>
          <Button1
            loading={state.loading}
            onClick={signUp}
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
