import { Box, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button1 from "../../components/button_1/button_1";
import useStyles from "./login_page_styles";
import TermsAndConditions from "../../components/terms_and_conditions/terms_and_conditions";
var emailValidator = require("email-validator");

export default function ContactUsForm() {
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
        "Please enter your valid 'E-Mail' address. Your 'E-Mail' address is important us to contact you later."
      );
    }
    if (!state.restaurant) {
      return global.showAlert(
        "Please Be Careful!",
        "Please enter your 'Restaurant' name. Your 'Restaurant' is important to us!"
      );
    }
    if (!state.message) {
      return global.showAlert(
        "Please Be Careful!",
        "Please leave a message to us. Your words are warmly welcome.."
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
          label="Please enter your 'E-Mail' address"
          placeholder="johndoe@example.com"
          InputLabelProps={{ shrink: true }}
          value={state.email}
          onChange={(event) => {
            changeState("email", event.target.value);
          }}
        />
        <Box height={30} />
        <TextField
          className={classes.text_field}
          type="text"
          label="Please enter your 'Restaurant' name "
          placeholder="Your Restaurant"
          InputLabelProps={{ shrink: true }}
          value={state.restaurant}
          onChange={(event) => {
            changeState("restaurant", event.target.value);
          }}
        />
        <Box height={30} />
        <TextField
          className={classes.text_field}
          type="text"
          multiline
          rows={3}
          label="Please enter your 'Message' here "
          placeholder="Your Message"
          InputLabelProps={{ shrink: true }}
          value={state.message}
          onChange={(event) => {
            changeState("message", event.target.value);
          }}
        />
        <Box height={30} />
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
