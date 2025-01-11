import "./Skills.css";
import { Box, Typography } from "@mui/material";
import {
  Code,
  DataObject,
  Language,
  Web,
  IntegrationInstructions,
  Storage,
  Cloud,
  TrendingUp,
  Api,
  BarChart,
  Science,
} from "@mui/icons-material";
import React from "react";

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: <Code /> },
        { name: "Java", icon: <Code /> },
        { name: "JavaScript", icon: <Code /> },
        { name: "SQL", icon: <DataObject /> },
        { name: "HTML & CSS", icon: <Language /> },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: <Web /> },
        { name: "Next.js", icon: <IntegrationInstructions /> },
        { name: "Flask", icon: <Cloud /> },
        { name: "TensorFlow", icon: <Science /> },
        { name: "Node.js", icon: <Web /> },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Version Control", icon: <Storage /> },
        { name: "Database Systems", icon: <DataObject /> },
        { name: "Docker", icon: <Cloud /> },
      ],
    },
    {
      category: "Methodologies",
      items: [
        { name: "RESTful API Development", icon: <Api /> },
        { name: "Agile Development", icon: <TrendingUp /> },
        { name: "Machine Learning", icon: <Science /> },
        { name: "Data Analysis & Visualization", icon: <BarChart /> },
      ],
    },
  ];

  const skillBoxStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    marginTop: "16px",
  };

  const skillItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    gap: "8px",
  };

  return (
    <Box  id="skills"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 4,
        maxWidth: "900px",
        margin: "20px auto", 
        scrollSnapAlign: "start"
        // Center the entire section
      }}
    >
      {skills.map((skillCategory) => (
        <Box key={skillCategory.category} sx={{ textAlign: "center", width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            {skillCategory.category}
          </Typography>
          <Box sx={skillBoxStyle}>
            {skillCategory.items.map((skill, index) => (
              <Box key={index} sx={skillItemStyle}>
                {skill.icon}
                <Typography variant="body1">{skill.name}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Skills;
