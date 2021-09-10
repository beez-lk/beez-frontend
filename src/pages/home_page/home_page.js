import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAuthUserCall } from "../../api_service/api_service";
import useStyles from "./home_page_styles";

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
    </div>
  );
}

const AppBar = () => {
  const [state, setState] = useState({
    user: null,
  });
  const classes = useStyles();
  const getUser = () => {
    getAuthUserCall().then((response) => {
      if (response.success) {
        setState({ ...state, user: response.data });
      }
    });
  };
  useEffect(() => {
    getUser();
  });
  return (
    <div className={classes.app_bar}>
      <div>
        <div className={classes.logo_text}>Beeez.lk</div>
      </div>
      {state.user && (
        <div>
          {state.user.image ? (
            <Avatar src={state.user.image} />
          ) : (
            <Avatar>
              {state.user.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </Avatar>
          )}
        </div>
      )}
    </div>
  );
};
