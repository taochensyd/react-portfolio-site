import React from 'react';
import { Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = ({ data }) => (
  <Box display="flex" flexWrap="wrap">
    {data.map((skill, index) => (
      <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Chip label={skill} style={{ margin: '5px' }} />
      </motion.div>
    ))}
  </Box>
);

export default Skills;
