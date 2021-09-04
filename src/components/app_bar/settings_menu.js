import React from "react";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function SettingsMenu({
  open,
  anchorRef,
  setOpenMenu,
  showAdminPopup,
  isAdminView,
}) {
  const history = useHistory();
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenMenu(false);
  };

  const logout = () => {
    localStorage.clear();
    history.replace("/");
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-list-grow">
                <MenuItem
                  onClick={(event) => {
                    if(isAdminView){
                        history.replace('/home')
                    } else {
                        showAdminPopup();
                    }
                    
                    handleClose(event);
                  }}
                >
                  {isAdminView ? "Cashier Panel" : "Admin Panel"}
                </MenuItem>
                <MenuItem
                  onClick={(event) => {
                    logout();
                    handleClose(event);
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
