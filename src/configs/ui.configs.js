const uiConfigs = {
  style: {
    // Gradient Background Styles
    gradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
      },
      light: {
        backgroundImage: "linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))"
      }
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))"
      },
      light: {
        backgroundImage: "linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))"
      }
    },

    // Truncate Text Utility
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines
    }),

    // Main Content Styling
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2
    },

    // Dynamic Background Image
    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`
    }),

    // Card Style
    card: {
      borderRadius: "10px",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      overflow: "hidden",
      backgroundColor: "background.paper"
    },

    // Button Styles
    primaryButton: {
      padding: "0.8rem 1.5rem",
      borderRadius: "50px",
      textTransform: "none",
      fontWeight: "bold",
      color: "white",
      background: "linear-gradient(to right, #ff7e5f, #feb47b)",
      "&:hover": {
        background: "linear-gradient(to right, #feb47b, #ff7e5f)"
      }
    },
    secondaryButton: {
      padding: "0.8rem 1.5rem",
      borderRadius: "50px",
      textTransform: "none",
      fontWeight: "bold",
      color: "primary.main",
      border: "2px solid",
      borderColor: "primary.main",
      "&:hover": {
        backgroundColor: "primary.light",
        color: "white"
      }
    },

    // Overlay Utility
    overlay: (opacity = 0.5, color = "black") => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: color,
      opacity: opacity,
      zIndex: 1
    }),

    // Responsive Container
    responsiveContainer: {
      padding: "1rem",
      margin: "auto",
      maxWidth: {
        xs: "100%",
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px"
      }
    },

    // Avatar Style
    avatar: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      border: "2px solid",
      borderColor: "primary.main"
    }
  },

  // Size Configurations
  size: {
    sidebarWidth: "300px",
    contentMaxWidth: "1366px",
    smallIcon: "24px",
    mediumIcon: "36px",
    largeIcon: "48px"
  },

  // Z-Index Levels
  zIndex: {
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    overlay: 1400
  }
};

export default uiConfigs;
