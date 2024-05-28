import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';
import { Container, Typography, Card, CardContent, CardHeader, Chip, Grid, Divider, Link } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import DateRangeIcon from '@mui/icons-material/DateRange'; // Add this import

const ProjectsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="projects-page">
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>Projects</Typography>
      <Grid container spacing={3}>
        {resumeData.projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardHeader
                avatar={<CodeIcon />}
                title={project.title}
                subheader={<><Typography variant="body2"><DateRangeIcon style={{ marginRight: '5px' }} /> {project.date}</Typography></>}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" style={{ marginBottom: '10px' }}>
                  {project.description}
                </Typography>
                <Divider />
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>Technologies:</Typography>
                <div>
                  {project.technologies.map((tech, idx) => (
                    <Chip key={idx} label={tech} style={{ margin: '5px' }} />
                  ))}
                </div>
                <Divider />
                <div style={{ marginTop: '10px' }}>
                  <Link href={project.githubLink} target="_blank" rel="noopener" style={{ marginRight: '10px', display: 'inline-flex', alignItems: 'center' }}>
                    <GitHubIcon style={{ marginRight: '5px' }} /> GitHub
                  </Link>
                  <Link href={project.liveDemoLink} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center' }}>
                    <LaunchIcon style={{ marginRight: '5px' }} /> Live Demo
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default ProjectsPage;
