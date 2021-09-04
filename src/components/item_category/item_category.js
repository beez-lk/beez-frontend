import clsx from "clsx";
import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import { image_base_url } from "../../config/config";
import FadeInAnimatedDiv from "../animated_div/fade_in_animated_div";
import useStyles from "./item_category_styles";

export default function ItemCategory({ category, isSelected }) {
  const classes = useStyles();
  const [isHover, setHover] = useState(false);
  const setSelectedItemCategory = useStoreActions(
    (actions) => actions.setSelectedItemCategory
  );
  return (
    <div
      onClick={() => setSelectedItemCategory(category)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(classes.outer, (isHover || isSelected) && classes.outer_hover)}
    >
      <div
        className={classes.item_category}
        style={{
          backgroundImage: `url(${image_base_url}/${category.image})`,
        }}
      >
        {(isHover || isSelected) && (
          <FadeInAnimatedDiv>
            <div className={classes.category_name}>{category.name}</div>
          </FadeInAnimatedDiv>
        )}
      </div>
    </div>
  );
}
