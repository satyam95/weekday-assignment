import {
  Card,
  Box,
  Typography,
  CircularProgress,
  CardContent,
  Button,
} from "@mui/material";

const JobCard = () => {
  return (
    <>
      <Card className="job-card" sx={{ padding: "5px", paddingTop: "11px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px 0",
          }}
        >
          <Box className="badge-container">
            <Box className="badge-outer">
              <Typography fontSize="9px" fontWeight={400} lineHeight={1.5}>
                ⏳ Posted 9 days ago
              </Typography>
            </Box>
          </Box>
          <Box height={50} width={50}>
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={55}
                size={50}
                thickness={7}
                className="progress-bg"
              />
              <CircularProgress
                variant="determinate"
                value={100}
                size={50}
                thickness={7}
                className="track-bg"
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  className="progress-caption"
                  sx={{
                    margin: 0,
                    lineHeight: 1.5,
                    color: "rgb(6, 137, 64)",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  53%
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <CardContent className="card-content-outer">
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <img
              src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713271670811_i1ufp.jpg"
              alt="Pinch"
              className="image-company"
            />
            <Box>
              <Box className="info">
                <Typography variant="h3">Pinch</Typography>
                <Typography variant="h2">Founding Frontend Engineer</Typography>
              </Box>
              <Typography className="country">India</Typography>
            </Box>
          </Box>
          <Typography className="salary">
            Estimated Salary: ₹40 - 60 LPA
            <span aria-label="Offered salary range"> ✅</span>
          </Typography>
          <Box className="description-block">
            <Typography className="content-head">About Company:</Typography>
            <Box className="content-body">
              <Typography fontSize="14px">
                <strong>About us</strong>
              </Typography>
              <Typography fontSize="14px" fontWeight={300}>
                At Pinch, our dream is to transform the home ecosystem around
                families and help them create space for the truly important
                things, allowing them to focus on themselves and their
                well-being to build meaningful lives, filled with purpose and
                joy.
              </Typography>
              <br />
              <Typography fontSize="14px" fontWeight={300}>
                Our aim is to bring comfort & convenience to families in their
                day-to-day household chores and then take them on a journey
                where they find pleasure in exploring the finer aspects of life,
                feel delighted by wonderful experiences & eventually find their
                lives transformed for the better
              </Typography>
            </Box>
          </Box>
          <Box className="link-container">
            <a className="more-link">View More</a>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Typography className="exp">Minimum Experience</Typography>
            <Typography className="exp-yrs">4 years</Typography>
          </Box>
        </CardContent>
        <Box sx={{ padding: "0 15px" }}>
          <Box className="btn-container">
            <Button variant="contained" className="btn-main">
              ⚡ Easy Apply
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default JobCard;
