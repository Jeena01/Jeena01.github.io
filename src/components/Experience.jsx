import "./Experience.css";
import React, { useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box } from "@mui/material";
import { RocketLaunch, Work, School } from "@mui/icons-material";

const timelineItemStyle = { cursor: "pointer" };
const iconStyle = { width: "70%", height: "70%", margin: "auto" };
const timelinedotstyle = {
  width: "70px",
  height: "70px",
  margin: "auto",
  backgroundColor: "white",
  cursor: "pointer",
};
const timelinecontentstyle = { margin: "auto 10px" };

const TimelineWithHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const timelineData = [
    {
      date: "October 2024 - Present",
      title: "Software Lead",
      company: "Space MENs",
      details: [
        "Led a team of 5 developers.",
        "Implemented CI/CD pipelines.",
        "Optimized system performance by 30%.",
      ],
      icon: <RocketLaunch sx={iconStyle} />,
    },
    {
      date: "August 2023 - August 2024",
      title: "Research Software Developer",
      company: "University of British Columbia",
      description: "",
      details: [
        "Developed research tools for data analysis.",
        "Authored 2 research papers.",
        "Collaborated with cross-functional teams.",
      ],
      icon: <Work sx={iconStyle} />,
    },
    {
      date: "May 2022 - April 2023",
      title: "Teaching Assistant",
      company: "UBC, CMPS Department",
      description: "",
      details: [
        "Assisted in teaching 3 undergraduate courses.",
        "Provided 1:1 support to students.",
        "Graded assignments and exams.",
      ],
      icon: <School sx={iconStyle} />,
    },
  ];

  return (
    <Timeline
      position="alternate"
      sx={{
        margin: "70px",
        padding: "50px",
        "@media (max-width: 600px)": {
          margin: "25px",
        },
      }}
    >
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          style={timelineItemStyle}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <TimelineOppositeContent
            sx={{ margin: "auto 10px" }}
            color="text.secondary"
          >
            <Typography variant="body2" sx={{ margin: "auto" }}>
              {item.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={timelinedotstyle} color="primary">
              {item.icon}
            </TimelineDot>
            <TimelineConnector
              sx={{
                opacity: index < timelineData.length - 1 ? "1" : "0",
                height: index === hoveredIndex ? "100px" : "30px",
                transition: "height 1s ease, opacity 1s ease",
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={timelinecontentstyle}>
            <Typography variant="h6" component="span">
              {item.title}
            </Typography>
            <Typography variant="body1">{item.company}</Typography>
            <Typography variant="body2">{item.description}</Typography>
            {hoveredIndex === index && (
              <Box className="m-2">
                <Typography variant="body2">
                  <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </Typography>
              </Box>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimelineWithHover;
