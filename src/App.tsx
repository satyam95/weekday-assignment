import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource-variable/lexend";
import JobCard from "./components/JobCard";
import JobFilter from "./components/JobFilter";

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
          <Box
              sx={{
                paddingBottom: "36px",
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <JobFilter/>
            </Box>
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
