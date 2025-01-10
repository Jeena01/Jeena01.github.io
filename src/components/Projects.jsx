import { Box, Card, CardContent, CardActions, Paper, Typography, IconButton } from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material"; // Example icons

function Projects() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, padding: 2 }}>
      {/* Development Projects */}
      <Paper
        sx={{
          maxWidth: "600px",
          padding: 4,
          margin: 2,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
        variant="outlined"
      >
        <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 3 }}>
          Development Projects
        </Typography>
        {[
          {
            title: "The Watcher",
            description: "User Behaviour Analytics Plugin designed to monitor in-IDE LLM usage and code changes",
          },
          {
            title: "Tarot Click Mobile App",
            description: "Image Recognition mobile application for recreational fortune telling",
          },
          {
            title: "Cultural Care Compass",
            description: "Hackathon Winning Backend-only Recommendation System Project",
          },
        ].map((project, index) => (
          <Card
            key={index}
            sx={{
              marginBottom: 3,
              padding: 2,
              borderRadius: 2,
              boxShadow: 1,
              backgroundColor: "background.default",
            }}
          >
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              {/* Example icons for links */}
              <IconButton aria-label="GitHub">
                <GitHub />
              </IconButton>
              <IconButton aria-label="Launch">
                <Launch />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Paper>

      {/* Research Projects */}
      <Paper
        sx={{
          maxWidth: "600px",
          padding: 4,
          margin: 2,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
        variant="outlined"
      >
        <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 3 }}>
          Research Projects
        </Typography>
        {[
          {
            title: "Space MENs - CAN-RGX Challenge",
            description: "Fluid mechanics in microgravity using computer vision",
          },
          {
            title: "Dishing the Dirt on Citation Bias",
            description: "Network Science research paper exploring an approach to quantification of citation bias",
          },
          {
            title: "Cracking the CodeWhisperer",
            description: "Google funded research project investigating LLM adoption in developer workflows",
          },
        ].map((project, index) => (
          <Card
            key={index}
            sx={{
              marginBottom: 3,
              padding: 2,
              borderRadius: 2,
              boxShadow: 1,
              backgroundColor: "background.default",
            }}
          >
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              {/* Example icons for links */}
              <IconButton aria-label="GitHub">
                <GitHub />
              </IconButton>
              <IconButton aria-label="Launch">
                <Launch />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Box>
  );
}

export default Projects;
