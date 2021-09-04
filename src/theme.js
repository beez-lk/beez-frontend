import { createTheme } from "@material-ui/core/styles";
import { primary_color_1, primary_color_2 } from "./themes/colors";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "5px",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": `inset 0 0 6px ${primary_color_2}63`,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: `${primary_color_1}63`,
          borderRadius:'100px'
        },
      },
    },
  },
});
export default theme;
