import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { StoreProvider } from "easy-peasy";
import "./App.css";
import AppRouter from "./router/app_router";
import store from "./store/store";
import theme from "./theme";

function App() {
  return (
    <StoreProvider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </MuiThemeProvider>
    </StoreProvider>
  );
}

export default App;
