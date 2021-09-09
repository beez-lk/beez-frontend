import { Box, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button1 from "../../components/button_1/button_1";
import useStyles from "./login_page_styles";
import TermsAndConditions from "../../components/terms_and_conditions/terms_and_conditions";
import { loginCall } from "../../api_service/api_service";
import UseMyHistory from "../../utils/use_history";

export default function LoginForm() {
  const classes = useStyles();
  const { replace } = UseMyHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const changeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const loginAction = () => {
    if (!state.email) {
      return global.showAlert(
        "Please Be Careful!",
        "'Email Address' is required to login."
      );
    }
    if (!state.password) {
      return global.showAlert(
        "Please Be Careful!",
        "'Password' is required to login."
      );
    }
    changeState("loading", true);
    loginCall(state.email, state.password).then((response) => {
      changeState("loading", false);
      if (response.success) {
        replace("/home");
      } else {
        global.showAlert("", response.message)
      }
    });
  };

  return (
    <div className={classes.login_form_outer}>
      <Box height={30} />
      <FormControl fullWidth>
        <TextField
          className={classes.text_field}
          type="text"
          label="Please enter your Email Address"
          placeholder="johndoe@example.com"
          InputLabelProps={{ shrink: true }}
          value={state.email}
          onChange={(event) => {
            changeState("email", event.target.value.toLowerCase());
          }}
        />
        <Box height={40} />
        <TextField
          className={classes.text_field}
          type="password"
          label="Please enter your Password"
          placeholder="******"
          InputLabelProps={{ shrink: true }}
          value={state.password}
          onChange={(event) => {
            changeState("password", event.target.value);
          }}
        />
        <Box height={40} />
        <div className={classes.login_btn_outer}>
          <Button1
            loading={state.loading}
            onClick={loginAction}
            title={"ok"}
            isSelected
            width={150}
          />
        </div>
        <TermsAndConditions />
      </FormControl>
    </div>
  );
}
