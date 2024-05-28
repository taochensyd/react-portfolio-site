import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import WorkExperiencePage from './pages/WorkExperiencePage';
import SkillsPage from './pages/SkillsPage';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
