import React from "react";
import styles from "../styles/Projects.module.css";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const Projects = () => {
  const project = [
    {
      title: "Stock Pod (2020-2021)",
      imgUrl: "/Stockpod.png",
      desc:
        "Stockpod is an Indian platform that provides licensed digital content including but not limited to photos, videos, graphics, audio, and more.",
    },
    {
      title: "Fresh Start (2020-2021)",
      imgUrl: "/FreshStart.png",
      desc:
        "FRESH START is an online general store that delivers items like Dairy products, Grocery, Patanjali, fruits, and Vegetables with Healthy choices and Fast delivery.",
    },
    {
      title: "ED Visualizer",
      imgUrl: "/EncryptionVisualizer.png",
      desc:
        "The Encryption/Decryption Visualizer is a web application built using Angular that aims to demystify the encryption and decryption processes by providing an interactive and educational tool.",
    },
    {
      title: "Attendance Management",
      imgUrl: "/AttendanceManagement.png",
      desc:
        "The Attendance Management project for Android is a mobile application to streamline and automate the tracking of attendance records.",
    },
  ];
  return (
    <section id="Projects" className={styles.projects_section}>
      <h1 className="section_title">Projects</h1>
      <hr className="section_title_hr" />
      {project.map((project) => (
        <div key={project.title} className={styles.project}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={6}>
              <Box
                sx={{
                  width: { xs: "150px", md: "300px", lg: "500px" },
                  height: {
                    xs: "100px",
                    md: "200px",
                    lg: "300px",
                  },
                }}
                className={styles.browser}
              >
                <Image
                  width={100}
                  height={100}
                  src={project.imgUrl}
                  alt={project.title}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <div className={styles.project_content}>
                <h2>{project.title}</h2>
                <p>{project.desc}</p>
                {/* <button>View Project</button> */}
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </section>
  );
};

export default Projects;
