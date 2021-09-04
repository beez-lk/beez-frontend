import { Backdrop, Card, TextField } from "@material-ui/core";
import { useStoreState } from "easy-peasy";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setAdminPasswordCall } from "../../api_service/api_service";
import PulseAnimationDiv from "../animated_div/pulse_animated_div";
import Button1 from "../button_1/button_1";
import useStyles from "./app_bar_styles";

export default function AdminPopup({ open, setOpen }) {
  const classes = useStyles();
  const history = useHistory();
  const restaurant = useStoreState((state) => state.restaurant);
  const [state, setState] = useState({
    password: "",
    loading: false,
  });
  const changeState = (key, value) => {
    setState({ ...state, [key]: value });
  };
  const onConfirm = () => {
    if (restaurant.admin_password) {
      if (restaurant.admin_password === state.password) {
        history.push("/admin");
      } else {
        return global.showAlert(
          "Please be careful!",
          "The 'Admin Password' you have entered is incorrect. Please try again."
        );
      }
    } else {
      if (!state.password) {
        return global.showAlert(
          "Please be careful!",
          "The 'Admin Password' should not be empty."
        );
      }
      changeState("loading", true);
      setAdminPasswordCall(state.password).then((response) => {
        changeState("loading", false);
        if (response.success) {
          history.push("/admin");
        }
      });
    }
  };
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <PulseAnimationDiv show={open}>
        <Card elevation={20} className={classes.message_card}>
          <div className={classes.message_head}>
            {restaurant.admin_password
              ? `Please enter your 'Admin Password'`
              : `Please set an 'Admin Password'`}
          </div>
          <div className={classes.message_body}>
            <TextField
              type="password"
              style={{ width: "90%" }}
              label="Please enter 'Admin Password'"
              placeholder="******"
              InputLabelProps={{ shrink: true }}
              value={state.password}
              onChange={(event) => {
                changeState("password", event.target.value);
              }}
            />
          </div>
          <div className={classes.message_buttons}>
            <Button1
              isSelected
              title="cancel"
              loading={state.loading}
              onClick={()=>{
                setOpen(false)
              }}
            />
            <Button1
              isSelected
              title="confirm"
              loading={state.loading}
              onClick={onConfirm}
            />
          </div>
        </Card>
      </PulseAnimationDiv>
    </Backdrop>
  );
}
