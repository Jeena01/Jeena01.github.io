import { Timeline, TimelineItem, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";
import { Work, RocketLaunch, School } from "@mui/icons-material";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from "react";

function Experience() {
  const timelineItemStyle = {

  }
  const theme = createTheme({
    palette:{
      mode: 'dark',
    }
  })
  const iconStyle = { width: '70%', height: '70%', margin: 'auto'};
  const timelinedotstyle = { width: '70px', height: '70px' , margin: "auto", backgroundColor: "white"}
  const timelinecontentstyle ={margin: 'auto 10px'}


  return (
    <section>
      <Timeline position="alternate" sx={{
        margin: "70px",
        padding: "50px",
        "@media (max-width: 600px)": {
          margin: "25px",
        }

      }}>
        <TimelineItem style={timelineItemStyle}>
          <TimelineOppositeContent sx={{margin:'auto 10px'}}color="text.secondary">
            <Typography variant="body2" sx={{margin: "auto"}}>October 2024 - Present</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={timelinedotstyle} color="primary">
              <RocketLaunch sx={iconStyle} />
            </TimelineDot>
            <TimelineConnector sx={{height:"50px"}} />
          </TimelineSeparator>
          <TimelineContent sx={timelinecontentstyle}>
            <Typography variant="h6" component="span">
              Software Lead
            </Typography>
            <Typography variant="body1">Space MENs</Typography>
            <Typography variant="body2">Conduscted this that black</Typography>

          </TimelineContent>
        </TimelineItem>


        <TimelineItem style={timelineItemStyle}>
          <TimelineOppositeContent sx={{margin:'auto 10px'}} color="text.secondary">
            <Typography variant="body2" sx={{margin: "auto"}}>August 2023 - August 2024</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={timelinedotstyle} color="primary">
              <Work sx={iconStyle} />
            </TimelineDot>
            <TimelineConnector sx={{height:"50px"}} />
          </TimelineSeparator>
          <TimelineContent sx={timelinecontentstyle}>
            <Typography variant="h6" component="span">
              Research Software Developer
            </Typography>
            <Typography>University of British Columbia</Typography>
          </TimelineContent>
        </TimelineItem>


        <TimelineItem style={timelineItemStyle}>
          <TimelineOppositeContent sx={{margin:'auto 10px'}} color="text.secondary">
            <Typography variant="body2" sx={{margin: "auto"}}>May 2022 - April 2023</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot sx={timelinedotstyle} color="primary">
              <School sx={iconStyle} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={timelinecontentstyle}>
            <Typography variant="h6" component="span">
              Teaching Assistant
            </Typography>
            <Typography>UBC, CMPS Department</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  )
}


export default Experience;