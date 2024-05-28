import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = ({ data }) => (
  <Box display="flex" flexWrap="wrap">
    {data.map((project, index) => (
      <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ margin: '10px', flex: '1 1 45%' }}>
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body2">{project.description}</Typography>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </motion.div>
    ))}
  </Box>
);

export default Projects;
