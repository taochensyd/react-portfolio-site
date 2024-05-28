import React from 'react';

const Resume = ({ data }) => (
  <section>
    <h2>Career Objective</h2>
    <p>{data.careerObjective}</p>

    <h2>Technical Skills</h2>
    <ul>
      {data.technicalSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>

    <h2>Work Experience</h2>
    {data.workExperience.map((job, index) => (
      <div key={index}>
        <h3>{job.title} at {job.company}</h3>
        <p>{job.date} | {job.location}</p>
        <ul>
          {job.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    ))}

    <h2>Education</h2>
    {data.education.map((edu, index) => (
      <div key={index}>
        <h3>{edu.degree}, {edu.institution}</h3>
        <p>{edu.date}</p>
        <p>{edu.gpa}</p>
        <p>Relevant Coursework: {edu.coursework}</p>
      </div>
    ))}

    <h2>References</h2>
    <p>{data.references}</p>
  </section>
);

export default Resume;
