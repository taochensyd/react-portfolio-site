import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const WorkExperience = ({ data }) => (
  <Box display="flex" flexWrap="wrap">
    {data.map((job, index) => (
      <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={{ margin: '10px', flex: '1 1 45%' }}>
        <Typography variant="h6">{job.title} at {job.company}</Typography>
        <Typography variant="body2" color="textSecondary">{job.date} | {job.location}</Typography>
        <Typography variant="body2" style={{ marginTop: '10px' }}>
          {job.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </Typography>
      </motion.div>
    ))}
  </Box>
);

export default WorkExperience;
