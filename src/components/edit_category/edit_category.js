import { Backdrop, Box, Card, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./edit_category_styles";
import { useStoreActions, useStoreState } from "easy-peasy";
import Button1 from "../button_1/button_1";
import ImagePicker from "../image_picker/image_picker";
// import {
//   createItemCategoryCall,
//   updateItemCategoryCall,
// } from "../../api_service/api_service";

export default function EditCategory() {
  const classes = useStyles();
  const openEditCategory = useStoreState((state) => state.openEditCategory);
  const categoryToEdit = useStoreState((state) => state.categoryToEdit);
  const setOpenEditCategory = useStoreActions(
    (actions) => actions.setOpenEditCategory
  );

  const [state, setState] = useState({
    image: null,
    image_url: categoryToEdit ? categoryToEdit.image : "",
    name: categoryToEdit ? categoryToEdit.name : "",
    description: categoryToEdit ? categoryToEdit.description : "",
  });
  const changeState = (key, value) => {
    setState({ ...state, [key]: value });
  };

  const setInitialData = () => {
    setState({
      ...state,
      image: null,
      image_url: categoryToEdit ? categoryToEdit.image : "",
      name: categoryToEdit ? categoryToEdit.name : "",
      description: categoryToEdit ? categoryToEdit.description : "",
    });
  };
  useEffect(() => {
    if (openEditCategory) {
      setInitialData();
    }
  }, [openEditCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const onClose = () => {
    setOpenEditCategory(false);
  };

  const setFile = (file) => {
    changeState("image", file);
  };

  const onSubmit = () => {
    const formData = new FormData();
    if (!state.image_url && !state.image) {
      return global.showAlert(
        "Please be careful!",
        "Please select an image to your 'Item Category'"
      );
    }
    if (state.image) {
      formData.append("image", state.image);
    }
    if (!state.name) {
      return global.showAlert(
        "Please be careful!",
        "Please enter the name of your 'Item Category'"
      );
    }
    formData.append("name", state.name);
    if (state.description) {
      formData.append("description", state.description);
    }
    if (categoryToEdit) {
      // updateItemCategoryCall(formData, categoryToEdit.id).then((response) => {
      //   if (response.success) {
      //     // global.showAlert('', response.message)
      //     onClose();
      //   }
      // });
    } else {
      // createItemCategoryCall(formData).then((response) => {
      //   if (response.success) {
      //     // global.showAlert('', response.message)
      //     onClose();
      //   }
      // });
    }
  };
  return (
    <Backdrop className={classes.backdrop} open={openEditCategory}>
      <Card className={classes.card}>
        <div className={classes.card_header}>
          {categoryToEdit ? "Update Category" : "Add New Category"}
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
            label="Please enter 'Category Name'"
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
            label="Please enter 'Category Description'"
            placeholder="Delicious fried rice for you"
            value={state.description}
            onChange={(event) => {
              changeState("description", event.target.value);
            }}
            InputLabelProps={{ shrink: true }}
          />
          <Box height={20} />
          <div className={classes.button_row}>
            <Button1 onClick={onClose} title="cancel" />
            <Button1 onClick={onSubmit} isSelected title="submit" />
          </div>
        </div>
      </Card>
    </Backdrop>
  );
}
