import { Button, Card, Grid, Tooltip } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useStoreActions, useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import {
  getItemCategoriesCall,
  getRestaurantCall,
} from "../../api_service/api_service";
import AppBar from "../../components/app_bar/app_bar";
import Button1 from "../../components/button_1/button_1";
import EditCategory from "../../components/edit_category/edit_category";
import EditItem from "../../components/edit_item/edit_item";
import Item from "../../components/item/item";
import ItemCategory from "../../components/item_category/item_category";
import useStyles from "./admin_page_styles";

export default function AdminPage() {
  const classes = useStyles();
  const itemCategories = useStoreState((state) => state.itemCategories);
  const setOpenEditCategory = useStoreActions(
    (actions) => actions.setOpenEditCategory
  );
  const setCategoryToEdit = useStoreActions(
    (actions) => actions.setCategoryToEdit
  );

  const setOpenEditItem = useStoreActions(
    (actions) => actions.setOpenEditItem
  );
  const setItemToEdit = useStoreActions(
    (actions) => actions.setItemToEdit
  );


  const selectedItemCategory = useStoreState(
    (state) => state.selectedItemCategory
  );

  const onAddNewCategory = () => {
    setCategoryToEdit(null);
    setOpenEditCategory(true);
  };
  const onAddNewItem = () => {
    setItemToEdit(null);
    setOpenEditItem(true);
  };
  useEffect(() => {
    getRestaurantCall();
    getItemCategoriesCall();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.left_bar}>
        <Card className={classes.logo_outer}></Card>
        <div className={classes.add_category}>
          <Tooltip title="Add new Category">
            <Button
              onClick={onAddNewCategory}
              className={classes.add_category_button}
            >
              <Add className={classes.add_category_icon} />
            </Button>
          </Tooltip>
        </div>
        {itemCategories.map((category, index) => (
          <ItemCategory
            key={index}
            category={category}
            isSelected={
              selectedItemCategory
                ? selectedItemCategory.id === category.id
                : false
            }
          />
        ))}
      </div>
      <div className={classes.right_bar}>
        <AppBar isAdminView={true} />
        <div className={classes.main_row}>
          <div className={classes.main_left_container}>
            <div className={classes.add_item_button_outer}>
              <Button1 onClick={onAddNewItem} title="Add New Item" width="60%" />
            </div>
            <Grid style={{ width: "100%" }} container spacing={3}>
              {selectedItemCategory &&
                selectedItemCategory.items.map((item, index) => (
                  <Item adminView={true} item={item} key={index} index={index} />
                ))}
            </Grid>
          </div>
          <div className={classes.main_right_container}></div>
        </div>
      </div>
      <EditCategory />
      <EditItem />
    </div>
  );
}
