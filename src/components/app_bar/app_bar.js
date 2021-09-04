import { Avatar, Box, IconButton } from "@material-ui/core";
import { Edit, SettingsOutlined } from "@material-ui/icons";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useRef, useState } from "react";
import { image_base_url } from "../../config/config";
import { shorten } from "../../utils/string_functions";
import AdminPopup from "./admin_popup";
import useStyles from "./app_bar_styles";
import SettingsMenu from "./settings_menu";

export default function AppBar({ isAdminView }) {
  const classes = useStyles();
  const restaurant = useStoreState((state) => state.restaurant);
  const selectedItemCategory = useStoreState(
    (state) => state.selectedItemCategory
  );

  const setOpenEditCategory = useStoreActions(
    (actions) => actions.setOpenEditCategory
  );
  const setCategoryToEdit = useStoreActions(
    (actions) => actions.setCategoryToEdit
  );

  const [openMenu, setOpenMenu] = useState(false);
  const [openAdminPopup, setOpenAdminPopup] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const showAdminPopup = () => {
    setOpenAdminPopup(true);
  };

  const onEditCategory = ()=>{
    setCategoryToEdit(selectedItemCategory)
    setOpenEditCategory(true)
  }

  return restaurant ? (
    <div className={classes.root}>
      <div style={{ width: "100%" }}>
        <div className={classes.main_text}>
          {selectedItemCategory ? selectedItemCategory.name : restaurant.name}
          {(selectedItemCategory && isAdminView) && (
            <IconButton onClick={onEditCategory} style={{ marginLeft: "10px" }}>
              <Edit />
            </IconButton>
          )}
        </div>
        <div className={classes.sub_text}>
          {selectedItemCategory
            ? selectedItemCategory.description
            : restaurant.address}
        </div>
      </div>
      <div className={classes.restaurant_name_card}>
        <Avatar src={`${image_base_url}/${restaurant.logo}`} />
        <Box width={10} />
        <div>{shorten(restaurant.name, 20)}</div>
      </div>
      <IconButton
        ref={anchorRef}
        onClick={handleToggle}
        className={classes.setting_button}
      >
        <SettingsOutlined className={classes.setting_icon} />
      </IconButton>
      <SettingsMenu
        open={openMenu}
        anchorRef={anchorRef}
        setOpenMenu={setOpenMenu}
        showAdminPopup={showAdminPopup}
        isAdminView={isAdminView}
      />
      <AdminPopup open={openAdminPopup} setOpen={setOpenAdminPopup} />
    </div>
  ) : <div/>;
}
