import { Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import "@fontsource-variable/lexend";

const theme = createTheme({
  typography: {
    fontFamily: '"Lexend Variable", sans-serif',
  },
  palette: {
    primary: {
      main: "#55efc4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>Hello world!</Typography>
    </ThemeProvider>
  );
}

export default App;
