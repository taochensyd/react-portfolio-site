import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Education = ({ data }) => (
  <Box display="flex" flexWrap="wrap">
    {data.map((edu, index) => (
      <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ margin: '10px', flex: '1 1 45%' }}>
        <Typography variant="h6">{edu.degree}</Typography>
        <Typography variant="body2" color="textSecondary">{edu.institution}</Typography>
        <Typography variant="body2" color="textSecondary">{edu.date}</Typography>
        <Typography variant="body2">{edu.gpa}</Typography>
        <Typography variant="body2">Relevant Coursework: {edu.coursework}</Typography>
      </motion.div>
    ))}
  </Box>
);

export default Education;
