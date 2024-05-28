import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';
import { Container, Typography, Card, CardContent, CardHeader, Chip, Grid, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';

const WorkExperiencePage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="work-experience-page">
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>Work Experience</Typography>
      <Grid container spacing={3}>
        {resumeData.workExperience.map((job, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardHeader
                avatar={<WorkIcon />}
                title={job.title}
                subheader={job.company}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                  <DateRangeIcon style={{ marginRight: '5px' }} /> {job.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <LocationOnIcon style={{ marginRight: '5px' }} /> {job.location}
                </Typography>
                <Divider />
                <Typography variant="body1" component="ul" style={{ margin: '10px 0' }}>
                  {job.responsibilities.map((responsibility, idx) => (
                    <motion.div key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <li>{responsibility}</li>
                    </motion.div>
                  ))}
                </Typography>
                <Divider />
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>Technologies:</Typography>
                <div>
                  {job.technologies.map((tech, idx) => (
                    <Chip key={idx} label={tech} style={{ margin: '5px' }} />
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

export default WorkExperiencePage;
