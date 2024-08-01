import { Box } from "@mui/material";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "C++",
    "HTML",
    "Angular",
    "React.js",
    "Node.js",
    "MySQL",
    "MongoDB",
    "Junit",
    "JMeter",
    "Git",
    "Docker",
    "AWS",
    "Azure",
    "Splunk",
    "Jenkins",
    "REST APIs",
    "Machine Learning",
    "Agile/Scrum",
    "Android Studio",
  ];
  return (
    <section id="skills" className={styles.skills_section}>
      <h1>My Skills</h1>
      {skills.map((skill) => (
        <Box sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
          padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px", lg: "10px 20px" },
          marginBottom: { xs: "8px", sm: "12px", md: "16px", lg: "20px" },
          marginRight: { xs: "8px", sm: "12px", md: "16px", lg: "20px" },
          borderRadius: { xs: "2px", sm: "4px", md: "6px" },
        }} key={skill}>{skill}</Box>
      ))}
    </section>
  );
}
