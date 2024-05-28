import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';
import { Container, Typography, Card, CardContent, CardHeader, Chip, Grid, Divider } from '@mui/material';

const SkillsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="skills-page">
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>Skills</Typography>
      <Grid container spacing={3}>
        {Object.keys(resumeData.technicalSkills).map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardHeader
                avatar={resumeData.technicalSkills[category].icon}
                title={category}
              />
              <CardContent>
                <Divider />
                <div style={{ marginTop: '10px' }}>
                  {resumeData.technicalSkills[category].skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} style={{ margin: '5px' }} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default SkillsPage;
