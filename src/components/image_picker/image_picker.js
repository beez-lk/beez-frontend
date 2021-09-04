import { Button, IconButton } from "@material-ui/core";
import { Add, Edit } from "@material-ui/icons";
import { uniqueId } from "lodash";
import React, { useEffect, useState } from "react";
import { image_base_url } from "../../config/config";
import useStyles from "./image_picker_styles";

export default function ImagePicker({ imageUrl, setFile, file }) {
  const classes = useStyles();
  const id = uniqueId();
  const [updatedImageUrl, setUpdatedImageUrl] = useState(null);

  const chooseImage = () => {
    document.getElementById(id).click();
  };

  const onChangeFile = (file) => {
    setFile(file);
  };

  const processFile = (file) => {
    var fr = new FileReader();
    fr.onload = function () {
      setUpdatedImageUrl(fr.result);
    };
    fr.readAsDataURL(file);
  };

  useEffect(() => {
    if (file) {
      processFile(file);
    } else {
      setUpdatedImageUrl(null);
    }
  }, [file]);

  return (
    <div className={classes.image_row}>
      <div className={classes.image_container_outer}>
        <div
          className={classes.image_container}
          style={{
            backgroundImage: updatedImageUrl
              ? `url(${updatedImageUrl})`
              : imageUrl
              ? `url(${image_base_url}/${imageUrl})`
              : "none",
          }}
        >
          {!imageUrl && !updatedImageUrl ? (
            <Button onClick={chooseImage} className={classes.add_button}>
              <Add className={classes.add_icon} />
            </Button>
          ) : (
            <div className={classes.edit_button_outer}>
              <IconButton onClick={chooseImage} className={classes.edit_button}>
                <Edit />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        hidden
        id={id}
        onChange={(event) => {
          if (event.target.files[0]) {
            onChangeFile(event.target.files[0]);
          }
        }}
        onClick={(event) => {
          event.target.value = "";
        }}
      />
    </div>
  );
}
