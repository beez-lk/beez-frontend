import { Box, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button1 from "../../components/button_1/button_1";
import useStyles from "./login_page_styles";
import TermsAndConditions from "../../components/terms_and_conditions/terms_and_conditions";
import { useHistory } from "react-router-dom";
import { loginCall } from "../../api_service/api_service";

export default function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    userName: "sahanperera1997",
    password: "Test123#",
    loading: false,
  });

  const changeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const loginAction = () => {
    if (!state.userName) {
      return global.showAlert(
        "Please Be Careful!",
        "'User Name' is required to login."
      );
    }
    if (!state.password) {
      return global.showAlert(
        "Please Be Careful!",
        "'Password' is required to login."
      );
    }
    changeState("loading", true);
    loginCall(state.userName, state.password).then((response) => {
      changeState("loading", false);
      if (response.success) {
        history.replace("/home");
      } else {
        return global.showAlert("", response.message);
      }
    });
  };

  return (
    <div className={classes.login_form_outer}>
      <Box height={50} />
      <FormControl fullWidth>
        <TextField
          className={classes.text_field}
          type="text"
          label="Please enter your User Name"
          placeholder="john_doe"
          InputLabelProps={{ shrink: true }}
          value={state.userName}
          onChange={(event) => {
            changeState("userName", event.target.value.toLowerCase());
          }}
        />
        <Box height={50} />
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
        <Box height={50} />
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
