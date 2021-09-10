import { Box, FormControl, TextField } from "@material-ui/core";
import React, { useState } from "react";
import Button1 from "../../components/button_1/button_1";
import useStyles from "./set_password_styles";
import TermsAndConditions from "../../components/terms_and_conditions/terms_and_conditions";
import { setPasswordCall } from "../../api_service/api_service";
import UseMyHistory from "../../utils/use_history";

export default function SetPasswordForm({ verificationCode }) {
  const classes = useStyles();
  const { replace } = UseMyHistory();
  const [state, setState] = useState({
    password: "",
    confirmPassword: "",
    loading: false,
  });

  const changeState = (key, value) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const setPasswordAction = () => {
    if (!state.password) {
      return global.showAlert(
        "Please Be Careful!",
        "'Password' is required to login."
      );
    }
    if (!state.confirmPassword) {
      return global.showAlert(
        "Please Be Careful!",
        "Please enter your password again to confirm"
      );
    }
    if (state.password !== state.confirmPassword) {
      return global.showAlert(
        "Please Be Careful!",
        "Your password and confirm password not matched!"
      );
    }
    changeState("loading", true);
    setPasswordCall(verificationCode, state.password).then((response) => {
      changeState("loading", false);
      if (response.success) {
        replace("/home");
      } else {
        global.showAlert("", response.message);
      }
    });
  };

  return (
    <div className={classes.login_form_outer}>
      <Box height={30} />
      <FormControl fullWidth>
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
        <TextField
          className={classes.text_field}
          type="password"
          label="Please confirm your Password"
          placeholder="******"
          InputLabelProps={{ shrink: true }}
          value={state.confirmPassword}
          onChange={(event) => {
            changeState("confirmPassword", event.target.value);
          }}
        />
        <Box height={40} />
        <div className={classes.login_btn_outer}>
          <Button1
            loading={state.loading}
            onClick={setPasswordAction}
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
