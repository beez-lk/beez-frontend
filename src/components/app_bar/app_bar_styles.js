import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnset: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  btnStyle2: {
    color: "white",
    fontSize:'10px',
    padding:'0px'
  },
  btnstyle: {
    color: "white",
  },
  appBar: {
    backgroundColor: "#101820",
    borderColor: "#05070a",
    position: "fixed",
    width: "100%",
    overflow: "fixed",
  },
  searchIcon: {
    color: "orange",
  },
  inputRoot: {
    color: "inherit",
  },
  datafactzlogo: {
    cursor: "pointer",
  },
  menuItem: {
    padding:'10px 15px',
    backgroundColor: "#101820",
    color: "white",
    "&:hover,&:active": {
      backgroundColor: "#101820",
      color: "#be5e13",
    },
  },
  dropList:{
    padding:'0px'
  }
}));

export default useStyles;
