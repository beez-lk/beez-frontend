import { Card, Grid } from "@material-ui/core";
import { useStoreState } from "easy-peasy";
import React, { useEffect } from "react";
import {
  getItemCategoriesCall,
  getRestaurantCall,
} from "../../api_service/api_service";
import AppBar from "../../components/app_bar/app_bar";
import Item from "../../components/item/item";
import ItemCategory from "../../components/item_category/item_category";
import useStyles from "./home_page_styles";

export default function HomePage() {
  const classes = useStyles();
  const itemCategories = useStoreState((state) => state.itemCategories);

  const selectedItemCategory = useStoreState(
    (state) => state.selectedItemCategory
  );

  useEffect(() => {
    getRestaurantCall();
    getItemCategoriesCall();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.left_bar}>
        <Card className={classes.logo_outer}></Card>
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
        <AppBar />
        <div className={classes.main_row}>
          <div className={classes.main_left_container}>
            <Grid style={{ width: "100%" }} container spacing={3}>
              {selectedItemCategory &&
                selectedItemCategory.items.map((item, index) => (
                  <Item adminView={false} item={item} key={index} index={index} />
                ))}
            </Grid>
          </div>
          <div className={classes.main_right_container}></div>
        </div>
      </div>
    </div>
  );
}
