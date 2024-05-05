import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource-variable/lexend";
import JobCard from "./components/JobCard";

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
      <Box className="container-view">
        <Box padding="24px 0">
          <Grid container spacing="30px">
            <Grid item xs={4}>
              <JobCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
