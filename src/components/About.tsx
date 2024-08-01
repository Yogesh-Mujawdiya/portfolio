import { Grid } from "@mui/material";
import styles from "../styles/About.module.css";
import Skills from "./Skills";
import Link from "next/link";

export default function About() {
  return (
    <section id="About" className={styles.about_container}>
      <div className={styles.about_data}>
        <h1 className="section_title">About Me</h1>
        <hr className="section_title_hr" />
        <div className="section_subtitle">
          Here you&apos;ll find more about me, my work, and my programming and tech
          skills. I specialize in web development, building and managing
          websites and applications that drive product success.
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={styles.about_section}>
              <h1>Get to know me!</h1>
              <p>
                I&apos;m a <b>Frontend Focused Web Developer</b> building and
                managing the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the <b>Projects</b> section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in <b>Web Development</b> so it can help
                other people of the Dev Community. Feel free to Connect or
                Follow me on my Linkedin and Instagram where I post useful
                content related to Web Development and Programming
              </p>
              <p>
                I&apos;m open to <b>Job</b> opportunities where I can contribute,
                learn and grow. If you have a good opportunity that matches my
                skills and experience then don&apos;t hesitate to <b>contact</b> me.
              </p>
              <Link href="#contacts"><button className={styles.btn}>Contact Me</button></Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Skills />
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
