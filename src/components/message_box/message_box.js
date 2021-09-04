import { Backdrop, Card } from "@material-ui/core";
import React, { useState } from "react";
import PulseAnimationDiv from "../animated_div/pulse_animated_div";
import Button1 from "../button_1/button_1";
import useStyles from "./message_box_styles";

export default function MessageBox() {
  const classes = useStyles();
  const [state, setState] = useState({
    open: false,
    head: "",
    body: "",
    action: null,
    actionName: "",
  });
  const showAlert = (head, body, action, actionName) => {
    setState({ ...state, open: true, head, body, action, actionName });
  };
  const closeAlert = () => {
    setState({
      ...state,
      open: false,
      head: "",
      body: "",
      action: null,
      actionName: "",
    });
  };
  global.showAlert = showAlert;
  return (
    <Backdrop open={state.open} className={classes.backdrop}>
      <PulseAnimationDiv show={state.open}>
        <Card elevation={20} className={classes.message_card}>
          <div className={classes.message_head}>{state.head}</div>
          <div className={classes.message_body}>{state.body}</div>
          <div className={classes.message_buttons}>
            <Button1 isSelected title="Ok" onClick={closeAlert} />
          </div>
        </Card>
      </PulseAnimationDiv>
    </Backdrop>
  );
}
