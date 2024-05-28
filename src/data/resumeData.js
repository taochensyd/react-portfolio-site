import {
  Code,
  Storage,
  Cloud,
  Security,
  DesktopWindows,
  SettingsRemote,
  Language,
  DeviceHub,
  Language as CodeIcon,
  Storage as StorageIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  DesktopWindows as DesktopWindowsIcon,
  SettingsRemote as SettingsRemoteIcon,
  Language as LanguageIcon,
  DeviceHub as DeviceHubIcon,
} from '@mui/icons-material';

const resumeData = {
  name: "Tao Chen",
  contact: {
    phone: "0466 337 173",
    email: "taochensyd@gmail.com",
    linkedin: "www.linkedin.com/in/tao-chen-au/",
  },
  careerObjective: "Seeking an IT System Administrator role to leverage over three years of experience in IT support, server maintenance, user support, and network troubleshooting.",
  technicalSkills: {
    "Programming & Scripting": {
      icon: <CodeIcon />,
      skills: ["PowerShell", "Bash", "HTML", "CSS", "JavaScript (React.js)", "Node.js (Express.js)"],
    },
    "Database Management": {
      icon: <StorageIcon />,
      skills: ["SQL", "MySQL", "Microsoft SQL Server"],
    },
    "Cloud & Virtualisation": {
      icon: <CloudIcon />,
      skills: ["AWS", "VMware ESXI", "Microsoft Hyper-V", "Docker", "Kubernetes"],
    },
    "System Administration": {
      icon: <SecurityIcon />,
      skills: ["Active Directory", "Exchange Server", "Citrix", "Remote Desktop Services", "Office 365"],
    },
    "RMM & Ticket Systems": {
      icon: <SettingsRemoteIcon />,
      skills: ["N-central", "Jira", "Freshdesk"],
    },
    "Operating Systems": {
      icon: <DesktopWindowsIcon />,
      skills: ["Windows Server", "Windows 10/11", "Linux", "Android", "iOS", "macOS"],
    },
    "Networking": {
      icon: <DeviceHubIcon />,
      skills: ["DNS", "VPN", "DHCP", "Subnetting", "VLANs"],
    },
  },
  workExperience: [
    {
      title: "IT Support Officer",
      company: "Homart Pharmaceuticals",
      date: "March 2023 - March 2024",
      location: "Rydalmere, NSW",
      responsibilities: [
        "Provided IT support across multiple channels, resolving issues swiftly.",
        "Managed server, network, and desktop infrastructure.",
        "Automated onboarding/offboarding processes, enhancing efficiency.",
        "Developed PowerShell scripts for disaster recovery and backups.",
        "Led API testing with external developers."
      ],
      technologies: ["PowerShell", "Office 365", "Active Directory"],
    },
    {
      title: "IT Support Officer",
      company: "ATOM Supply",
      date: "February 2022 - March 2023",
      location: "Wetherill Park, NSW",
      responsibilities: [
        "Delivered end-user support and troubleshooting.",
        "Managed containerized environments using Docker and Kubernetes.",
        "Maintained IT infrastructure, including VMware Esxi and Citrix.",
        "Developed internal IT documentation."
      ],
      technologies: ["Docker", "Kubernetes", "VMware Esxi"],
    },
    {
      title: "Technical Analyst",
      company: "Thomax Technology",
      date: "July 2021 - January 2022",
      location: "Pymble, NSW",
      responsibilities: [
        "Provided technical support and application implementation.",
        "Handled service requests via Jira Service Desk.",
        "Maintained network and printer hardware."
      ],
      technologies: ["Jira", "Networking", "Printer Hardware"],
    },
    {
      title: "Support Specialist",
      company: "ARINC (Collins Aerospace)",
      date: "January 2019 - June 2020",
      location: "Mascot, NSW",
      responsibilities: [
        "Provided IT and telecommunications support.",
        "Collaborated on IT projects to improve service delivery.",
        "Ensured reliability of IT services for major airlines."
      ],
      technologies: ["IT Support", "Telecommunications", "Project Collaboration"],
    },
  ],
  education: [
    {
      degree: "Master of Information Technology",
      institution: "University of Technology Sydney",
      date: "2021 - 2023",
      gpa: "5.93/7, WAM: 79.36",
      location: "Sydney, NSW",
      coursework: ["Cloud Computing", "Database Management", "Software Development", "Networking", "Linux Bash Scripting"],
    },
    {
      degree: "Bachelor of Information and Communications Technology",
      institution: "Western Sydney University",
      date: "2017 - 9",
      major: "Mobile Computing & Network",
      location: "Sydney, NSW",
      coursework: ["Software Development", "Database Management", "Networking"],
    },
  ],
  projects: [
    {
      title: "Task Manager",
      description: "A web application developed using React.js and Node.js to manage tasks efficiently.",
      githubLink: "https://github.com/yourusername/task-manager",
      liveDemoLink: "#",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      date: "2022",
    },
    {
      title: "Microservice Architecture",
      description: "A containerized microservice architecture implemented using Docker and Kubernetes.",
      githubLink: "https://github.com/yourusername/microservice-architecture",
      liveDemoLink: "#",
      technologies: ["Docker", "Kubernetes", "Node.js"],
      date: "2021",
    },
  ],
  references: "Available upon request.",
};

export default resumeData;
