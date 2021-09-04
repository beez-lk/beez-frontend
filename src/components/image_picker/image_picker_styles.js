import { makeStyles } from "@material-ui/core";
import { primary_gradient, primary_gradient_reverse } from "../../themes/colors";

const useStyles = makeStyles({
  image_row: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  image_container_outer: {
    height: "150px",
    width: "150px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
    padding: "3px",
    backgroundImage: primary_gradient_reverse,
  },
  image_container: {
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
    position:'relative'
  },
  add_button: { width: "100%", height: "100%", backgroundColor:'white', borderRadius:'10px' },
  add_icon: { fontSize:'100px', color:'grey' },
  edit_button_outer:{position:'absolute', right:'-15px', bottom:'-15px'},
  edit_button:{backgroundImage:primary_gradient, color:'white'}
});

export default useStyles;
