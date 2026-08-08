import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: `'Cascadia Mono', monospace`,
  },
});

theme = responsiveFontSizes(theme);

export default theme;