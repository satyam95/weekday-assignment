import { Box, Grid, ThemeProvider, createTheme } from "@mui/material";
import "@fontsource-variable/lexend";
import JobCard from "./components/JobCard";
import JobFilter from "./components/JobFilter";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import {
  basePays,
  employees,
  experience,
  jobTypes,
  roles,
  techStacks,
} from "./data/FilterOptions";

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
  const [searchQuery, setSearchQuery] = useState("");
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
            <JobFilter placeholderText="Roles" options={roles} />
            <JobFilter
              placeholderText="Number of Employees"
              options={employees}
            />
            <JobFilter placeholderText="Experience" options={experience} />
            <JobFilter placeholderText="Remote" options={jobTypes} />
            <JobFilter placeholderText="Tech Stack" options={techStacks} />
            <JobFilter
              placeholderText="Minimum Base Pay Salary"
              options={basePays}
            />
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
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
