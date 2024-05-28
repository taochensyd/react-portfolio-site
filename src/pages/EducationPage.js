import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';
import { Container, Typography, Card, CardContent, CardHeader, Chip, Grid, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';

const EducationPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="education-page">
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>Education</Typography>
      <Grid container spacing={3}>
        {resumeData.education.map((edu, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardHeader
                avatar={<SchoolIcon />}
                title={edu.degree}
                subheader={edu.institution}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                  <DateRangeIcon style={{ marginRight: '5px' }} /> {edu.date}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <LocationOnIcon style={{ marginRight: '5px' }} /> {edu.location}
                </Typography>
                <Divider />
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>Major: {edu.major}</Typography>
                <Typography variant="body2" style={{ marginTop: '10px' }}>Relevant Coursework:</Typography>
                <div>
                  {edu.coursework.map((course, idx) => (
                    <Chip key={idx} label={course} style={{ margin: '5px' }} />
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

export default EducationPage;
