import { Card } from "@material-ui/core";
import React, { useState } from "react";
import Button1 from "../../components/button_1/button_1";
import useStyles from "./login_page_styles";
import FadeInUpAnimationDiv from "../../components/animated_div/fade_in_up_animated_div";
import FadeInAnimatedDiv from "../../components/animated_div/fade_in_animated_div";
import useWindowSize from "../../utils/use_window_size";
import LoginForm from "./login_form";
import clsx from "clsx";
import SignUpForm from "./sign_up_form";

export default function LoginPage() {
  const classes = useStyles();
  const { isMobile } = useWindowSize();
  const [state, setState] = useState({
    isLogin: true,
  });

  const toggleLogin = (value) => {
    setState({ ...state, isLogin: value });
  };
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
            <div className={classes.button_bar}>
              <Button1
                title="Sign In"
                isSelected={state.isLogin}
                onClick={() => toggleLogin(true)}
              />
              <Button1
                title="Sign Up"
                isSelected={!state.isLogin}
                onClick={() => toggleLogin(false)}
              />
            </div>
            {state.isLogin ? (
              <FadeInUpAnimationDiv show={state.isLogin}>
                <div className={classes.login_scroll_outer}>
                  <div className={classes.welcome_text}>Welcome</div>
                  <div>Please login to your account!</div>
                  <LoginForm />
                </div>
              </FadeInUpAnimationDiv>
            ) : (
              <FadeInUpAnimationDiv show={state.isLogin}>
                <div className={classes.contact_scroll_outer}>
                  <div className={classes.welcome_text}>Welcome</div>
                  <div>Please send us little bit about you!</div>
                  <SignUpForm />
                </div>
              </FadeInUpAnimationDiv>
            )}
          </div>
        </Card>
      </FadeInAnimatedDiv>
    </div>
  );
}
