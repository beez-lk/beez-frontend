import { Backdrop, Box, Card, MenuItem, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./edit_item_styles";
import { useStoreActions, useStoreState } from "easy-peasy";
import Button1 from "../button_1/button_1";
import ImagePicker from "../image_picker/image_picker";
import { createItemCall, updateItemCall } from "../../api_service/api_service";

export default function EditItem() {
  const classes = useStyles();
  const openEditItem = useStoreState((state) => state.openEditItem);
  const itemToEdit = useStoreState((state) => state.itemToEdit);
  const selectedItemCategory = useStoreState((state) => state.selectedItemCategory);
  const setOpenEditItem = useStoreActions((actions) => actions.setOpenEditItem);

  const [state, setState] = useState({
    image: null,
    image_url: itemToEdit ? itemToEdit.image : "",
    name: itemToEdit ? itemToEdit.name : "",
    description: itemToEdit ? itemToEdit.description : "",
    unit_price: itemToEdit ? itemToEdit.unit_price : "",
    discount_type: itemToEdit ? itemToEdit.discount_type : "AMOUNT",
    discount: itemToEdit ? itemToEdit.discount : 0,
  });
  const changeState = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const setInitialData = () => {
    setState({
      ...state,
      image: null,
      image_url: itemToEdit ? itemToEdit.image : "",
      name: itemToEdit ? itemToEdit.name : "",
      description: itemToEdit ? itemToEdit.description : "",
      unit_price: itemToEdit ? itemToEdit.unit_price : "",
      discount_type: itemToEdit ? itemToEdit.discount_type : "AMOUNT",
      discount: itemToEdit ? itemToEdit.discount : 0,
    });
  };
  useEffect(() => {
    if (openEditItem) {
      setInitialData();
    }
  }, [openEditItem]); // eslint-disable-line react-hooks/exhaustive-deps

  const onClose = () => {
    setOpenEditItem(false);
  };

  const setFile = (file) => {
    changeState("image", file);
  };

  const onSubmit = () => {
    const formData = new FormData();
    if (!state.image_url && !state.image) {
      return global.showAlert(
        "Please be careful!",
        "Please select an image to your 'Item'"
      );
    }
    if (state.image) {
      formData.append("image", state.image);
    }
    if (!state.name) {
      return global.showAlert(
        "Please be careful!",
        "Please enter the name of your 'Item'"
      );
    }
    formData.append("name", state.name);
    if (state.description) {
      formData.append("description", state.description);
    }

    if (!state.unit_price) {
      return global.showAlert(
        "Please be careful!",
        "Please enter the amount of your 'Item'"
      );
    }
    formData.append("unit_price", state.unit_price);
    formData.append("discount_type", state.discount_type);

    if (state.discount === '' || state.discount === null) {
      return global.showAlert(
        "Please be careful!",
        "Please enter the discount of your 'Item'"
      );
    }
    formData.append("discount", state.discount);
    if (itemToEdit) {
      updateItemCall(formData, itemToEdit.id).then((response) => {
        if (response.success) {
          onClose();
        }
      });
    } else {
      formData.append("item_category_id", selectedItemCategory.id);
      createItemCall(formData).then((response) => {
        if (response.success) {
          onClose();
        }
      });
    }
  };
  return (
    <Backdrop className={classes.backdrop} open={openEditItem}>
      <Card className={classes.card}>
        <div className={classes.card_header}>
          {itemToEdit ? "Update Item" : "Add New Item"}
        </div>
        <div style={{ padding: "20px" }}>
          <Box height={10} />
          <ImagePicker
            imageUrl={state.image_url}
            setFile={setFile}
            file={state.image}
          />
          <Box height={30} />
          <TextField
            className={classes.text_field}
            label="Please enter 'Item Name'"
            placeholder="Fried Rice"
            value={state.name}
            onChange={(event) => {
              changeState("name", event.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />
          <Box height={40} />
          <TextField
            className={classes.text_field}
            label="Please enter 'Item Description'"
            placeholder="Delicious fried rice for you"
            value={state.description}
            onChange={(event) => {
              changeState("description", event.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />
          <Box height={40} />
          <TextField
            variant="filled"
            type="number"
            className={classes.text_field}
            style={{ width: "30%" }}
            label="Enter 'Unit Price'"
            placeholder="1,000.00"
            value={state.unit_price}
            onChange={(event) => {
              changeState("unit_price", event.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            variant="filled"
            className={classes.text_field}
            style={{ width: "35%", marginLeft: "3%" }}
            label="Select 'Discount Type'"
            value={state.discount_type}
            onChange={(event) => {
              changeState("discount_type", event.target.value);
            }}
            InputLabelProps={{ shrink: true }}
            select
          >
            <MenuItem value={"AMOUNT"}>Amount</MenuItem>
            <MenuItem value={"PERCENTAGE"}>Percentage</MenuItem>
          </TextField>
          <TextField
            variant="filled"
            type="number"
            className={classes.text_field}
            style={{ width: "29%", marginLeft: "3%" }}
            label="Enter 'Discount'"
            value={state.discount}
            onChange={(event) => {
              changeState("discount", event.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />

          <Box height={40} />
          <div className={classes.button_row}>
            <Button1 onClick={onClose} title="cancel" />
            <Button1 onClick={onSubmit} isSelected title="submit" />
          </div>
        </div>
      </Card>
    </Backdrop>
  );
}
