import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, InstagramIcon } from '@mui/icons-material';
import WavingHandIcon from '@mui/icons-material/WavingHand';

function Home() {
    return (
        <Box
            sx={{
                textAlign: 'left',
                padding: '5',
                margin: '5%',
                width: '90%'
            }}
        >
            <Typography variant="h2" component="h2" sx={{fontSize:'10vw'}}>
                Hi! I'm Jeena! <WavingHandIcon/>
            </Typography>
            <Typography variant="body1" sx={{fontSize:'2vw'}}>
                With experience in software development, research, machine learning and database management, I specialize in creating innovative, user-focused solutions.
                As an aspiring tech leader, I’m dedicated to leveraging my skills to solve real-world problems and build cutting-edge technologies to help people.
                Feel free to explore my portfolio to learn more about my projects, achievements, and journey in tech!</Typography>
        </Box>

    )
}
export default Home;