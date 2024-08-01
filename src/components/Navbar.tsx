import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <AppBar className={styles.navbar}>
        <Toolbar>
          <Image
            src="/profile.jpg"
            width={50}
            height={50}
            alt="Picture of the author"
          />
          <Typography
            variant="h6"
            component="div"
            className={styles.nav_bar_title}
          >
            Yogesh
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={styles.link}
                scroll={false}
              >
                {item}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon />
          </IconButton></Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            disableScrollLock={ true }
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {navItems.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Link href={`#${page}`} style={{ textDecoration: "none", color: "black" }} scroll={false}>
                <Typography textAlign="center">{page}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
  );
}
