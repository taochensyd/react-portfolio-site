import React from 'react';
import { motion } from 'framer-motion';
import { Container, Typography } from '@mui/material';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HomePage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }} 
    className="home-page" 
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}
  >
    <Container maxWidth="md" style={{ textAlign: 'center' }}>
      <motion.h1
        variants={sentence}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block', marginBottom: '20px' }}
      >
        {"Welcome to My Portfolio".split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <Typography variant="h6" component="p">
        {"Hi, I'm Tao Chen. Explore my work, education, skills, and projects.".split("").map((char, index) => (
          <motion.span key={index} variants={letter}>
            {char}
          </motion.span>
        ))}
      </Typography>
    </Container>
  </motion.div>
);

export default HomePage;
