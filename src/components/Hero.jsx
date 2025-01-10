import { Avatar, Typography, Box } from "@mui/material";
import "./Hero.css";

function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: { xs: "column", sm: "row" }, // Column for small screens, row for larger screens
        alignItems: "center", // Center-align in column mode
        justifyContent: { sm: "space-between" }, // Add spacing in row mode
        gap: { xs: 2, sm: 4 }, // Space between items
        padding: '10%', // Padding for the section
        margin: '10px auto'
      }}
    >
      {/* Avatar */}
      <Avatar
        sx={{
          width: { xs: "300px", sm: "350px" }, // Larger on small screens
          height: { xs: "300px", sm: "350px" }, // Maintain square shape
          order: { xs: 1, sm: 2 }, // Move avatar below h1 on small screens
          alignSelf: { xs: "center", sm: "flex-start" },
          margin: "10px",
        // Center avatar in column mode
        }}
      >
        J
      </Avatar>

      {/* Typography */}
      <Box
        sx={{
          textAlign: "center", // Center-align text for narrow screens
          order: { xs: 2, sm: 1 }, // Adjust order for small screens
        }}
      >
        <Typography variant="h1" className="title" >
          Hi, I'm Jeena!
        </Typography>
        <Typography variant="subtitle1" className="subtitle">
          Software Developer. Passionate Researcher. Lifelong Learner.
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
