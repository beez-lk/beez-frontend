import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./set_password_styles";
import FadeInUpAnimationDiv from "../../components/animated_div/fade_in_up_animated_div";
import FadeInAnimatedDiv from "../../components/animated_div/fade_in_animated_div";
import useWindowSize from "../../utils/use_window_size";
import clsx from "clsx";
import SetPasswordForm from "./set_password_form";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { primary_color_2 } from "../../themes/colors";
import { verificationCall } from "../../api_service/api_service";
import UseMyHistory from "../../utils/use_history";
const qs = require("querystring");

export default function SetPassword(props) {
  const classes = useStyles();
  const { isMobile } = useWindowSize();
  const [state, setState] = useState({
    isVerified: false,
    loading: false,
    email: "",
    name: "",
    verificationCode:""
  });

  const { replace } = UseMyHistory();

  const verifyUser = async () => {
    const parsed = qs.parse(props.location.search);
    var verificationCode = null;
    if ("?verification_code" in parsed) {
      verificationCode = parsed["?verification_code"];
    }
    if (!verificationCode) {
      replace("/login");
      return global.showAlert(
        "Sorry, We are unable to verify you!",
        "Please Sign up for a new account and try again."
      );
    }
    const response = await verificationCall(verificationCode);
    if (response.success) {
      setState({
        ...state,
        isVerified: true,
        email: response.data.email,
        name: response.data.name,
        verificationCode:verificationCode
      });
    } else {
      replace("/login");
      return global.showAlert("", response.message);
    }
  };

  useEffect(() => {
    verifyUser();
  }, [props.location.search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      <FadeInAnimatedDiv>
        <Card className={classes.login_card} elevation={20}>
          {!isMobile && <div className={classes.left_card} />}
          <div
            className={clsx(
              classes.right_card,
              isMobile && classes.right_card_mobile
            )}
          >
            <FadeInUpAnimationDiv show={true}>
              {state.isVerified ? (
                <div className={classes.login_scroll_outer}>
                  <div className={classes.welcome_text}>Welcome</div>
                  <div>{`Hello ${state.name}, Please set a password for your account!`}</div>
                  <SetPasswordForm verificationCode={state.verificationCode} />
                </div>
              ) : (
                <div className={classes.login_scroll_outer}>
                  <div className={classes.welcome_text}>Welcome to</div>
                  <div>Sri lanka's largest online platform for Freelancers</div>
                  <div className={classes.loader_outer}>
                    <Loader type="Watch" color={primary_color_2} height={100} />
                  </div>
                </div>
              )}
            </FadeInUpAnimationDiv>
          </div>
        </Card>
      </FadeInAnimatedDiv>
    </div>
  );
}
