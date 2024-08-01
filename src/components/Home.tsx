import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div id="Home" className={styles.home_container}>
      <Box sx={{ pt: { xs: 20, md: 40 } }} className={styles.home_data}>
        <h1>HEY, I&apos;M Yogesh</h1>
        <p className={styles.subtitle}>
          A results-driven web developer specializing in creating and managing
          websites and web applications that contribute to the overall success
          of the product.
        </p>
        <Link href="#Projects">
          <button>Projects</button>
        </Link>
      </Box>
    </div>
  );
}
