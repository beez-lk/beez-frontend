import { Box, Card, Grid, IconButton } from "@material-ui/core";
import { Delete, Edit, RestoreFromTrash } from "@material-ui/icons";
import { useStoreActions } from "easy-peasy";
import React, { useState } from "react";
import { updateItemCall } from "../../api_service/api_service";
import { calculateItemPrice } from "../../utils/calculations";
import FadeInAnimatedDiv from "../animated_div/fade_in_animated_div";
import PulseAnimationDiv from "../animated_div/pulse_animated_div";
import useStyles from "./item_styles";
const commaNumber = require("comma-number");

export default function Item({ item, adminView, index }) {
  const classes = useStyles();
  const itemPrice = calculateItemPrice(item);
  const [isHover, setHover] = useState(false);
  return !adminView && !item.is_active ? (
    <div />
  ) : (
    <Grid style={{ backgroundColor: "transparent" }} item xs={3}>
      <PulseAnimationDiv delay={index} show={item.id}>
        <Card
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          elevation={10}
          className={classes.item_outer}
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        >
          <PriceTag itemPrice={itemPrice} showOriginal={false} />
          <div className={classes.name}>{item.name}</div>
          {adminView && !item.is_active && (
            <div className={classes.inactive_seal} />
          )}
          {adminView && isHover && <ItemActions item={item} />}
        </Card>
      </PulseAnimationDiv>
    </Grid>
  );
}

const PriceTag = ({ itemPrice, showOriginal }) => {
  const classes = useStyles();
  return (
    <div className={classes.price}>
      <span>{`Rs. ${commaNumber(itemPrice.discounted_price.toFixed(2))}`}</span>{" "}
      {itemPrice.has_different && showOriginal && (
        <span className={classes.old_price}>
          {commaNumber(itemPrice.item_price.toFixed(2))}
        </span>
      )}
    </div>
  );
};

const ItemActions = ({ item }) => {
  const classes = useStyles();

  const setOpenEditItem = useStoreActions(
    (actions) => actions.setOpenEditItem
  );
  const setItemToEdit = useStoreActions(
    (actions) => actions.setItemToEdit
  );

  const updateItem = () => {
    setItemToEdit(item);
    setOpenEditItem(true);
  };

  const onDeleteItem = (status) => {
    updateItemCall(
      {
        is_active: status,
      },
      item.id
    );
  };

  return (
    <FadeInAnimatedDiv>
      <div className={classes.edit_row}>
        <IconButton onClick={updateItem} className={classes.edit_button}>
          <Edit />
        </IconButton>
        <Box width={10} />
        <IconButton
          onClick={() => onDeleteItem(!item.is_active)}
          className={classes.edit_button}
        >
          {item.is_active ? <Delete /> : <RestoreFromTrash />}
        </IconButton>
      </div>
    </FadeInAnimatedDiv>
  );
};
