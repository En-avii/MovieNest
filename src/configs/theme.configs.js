import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette = mode === themeModes.dark ? {
      primary: {
        main: "#1976d2", // Deep blue for dark mode
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#90caf9", // Light blue accent
        contrastText: "#ffffff"
      },
      background: {
        default: "#0a1929", // Very dark blue
        paper: "#112233" // Slightly lighter dark blue
      }
    } : {
      primary: {
        main: "#1976d2" // Bright blue for light mode
      },
      secondary: {
        main: "#64b5f6" // Lighter blue accent
      },
      background: {
        default: colors.grey["100"] // Light gray
      }
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true }
        }
      }
    });
  }
};

export default themeConfigs;
