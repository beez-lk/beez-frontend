import React, { useEffect } from "react";
import {
  getItemCategoriesCall,
  getRestaurantCall,
} from "../../api_service/api_service";
import useStyles from "./home_page_styles";

export default function HomePage() {
  const classes = useStyles();

  useEffect(() => {
    getRestaurantCall();
    getItemCategoriesCall();
  }, []);

  return (
    <div className={classes.root}>
     
    </div>
  );
}
