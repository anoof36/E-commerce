// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF", // White
    10: "#F6F6F6", // Lighter shade of white
    50: "#F0F0F0", // Light shade of white
    100: "#E0E0E0", // Light gray
    200: "#C2C2C2", // Gray
    300: "#A3A3A3", // Dark gray
    400: "#858585", // Darker gray
    500: "#666666", // Dark gray
    700: "#333333", // Very dark gray
    800: "#050505", // Black
  },

  primary: {
    10: "#9000ff",
    50: "#ab00ff", // Shade of purple
    200: "#8300c4", // Darker shade of purple
    400: "#4c00a4", // Deep purple
    600: "#33007b", // Rich dark purple
    800: "#31004a", // Very dark purple
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Palette values for dark mode
            primary: {
              dark: colorTokens.primary[10],
              medium: colorTokens.primary[50],
              main: colorTokens.primary[200],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[500],
            },
            background: {
              default: colorTokens.grey[800],
              alt: colorTokens.grey[900],
            },
            text: {
              primary: "#d4d4d4",
              secondary: "FFFFFF"
            },
          }
        : {
            // Palette values for light mode
            primary: {
              dark: colorTokens.primary[600],
              main: colorTokens.primary[400],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
            text: {
              primary: '#262626',
              secondary: "#000000"
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 48,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
