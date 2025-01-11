import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeIcon from "@mui/icons-material/Code";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Check if scrolling up or down
      if (currentScrollTop > lastScrollTop) {
        setIsScrolling(false); // Scrolling down, hide navbar
      } else {
        setIsScrolling(true); // Scrolling up, show navbar
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Avoid negative scroll value
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.secondary",
        color: "text.primary",
        boxShadow: "none",
        transition: "transform 1s ease-in-out",
        transform: isScrolling ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <Toolbar display="flex-grow">
        {/* Left Icon */}
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <CodeIcon sx={{ fontSize: 40 }}/>
        </IconButton>

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, // Hide on small screens
            gap: 6,
            marginLeft: "auto",
          }}
        >
          {navLinks.map((link) => (
            <Typography
              component="a"
              href={`${link.href}`}
              color="inherit"
              sx={{
                textDecoration: "none",
                fontSize: 21,
              }}
            >
              {link.name}
            </Typography>
          ))}
        </Box>

        {/* Menu Icon for Small Screens */}
        <Box sx={{ display: { xs: "flex", md: "none" , marginLeft: "auto"} }}>
          <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            keepMounted
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.name}
                onClick={handleMenuClose}
                component="a"
                href={link.href}
              >
                {link.name}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
