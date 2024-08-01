import React from "react";
import styles from "../styles/Footer.module.css";
import { Grid } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_top}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} className={styles.footer_top_left}>
              <h2 className="heading heading-sm text-lt">Yogesh</h2>
              <p className="main-footer__short-desc">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={2} className={styles.footer_top_right}>
              <h2>Social</h2>
              <div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/yogesh-mujawdiya"
                >
                  <Image
                    width={30}
                    height={30}
                    src="/linkedin-ico.png"
                    alt="Yogesh Linkedin Profile"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Yogesh-Mujawdiya"
                >
                  <Image
                    width={30}
                    height={30}
                    src="/github-ico.png"
                    alt="Yogesh Github Profile"
                  />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={styles.footer_bottom}>
          © Copyright{new Date().getFullYear()}. Made by
          <a rel="noreferrer" target="_blank" href="">
            Yogesh
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
