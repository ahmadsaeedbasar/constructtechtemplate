// Theme configurations from your JSON
export const lightTheme = {
  theme: "light",
  colors: {
    background: "#ffffff",
    primary: "#f5f5f5",
    accent: "#facc15",
    text: "#1f2937",
    heading: "#111827",
    buttonPrimary: "#facc15",
    buttonText: "#1f2937",
    navBackground: "#ffffff",
    navText: "#374151",
    highlight: "#fef3c7",
    cardBackground: "#ffffff",
    cardBorder: "#e5e7eb"
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif"
  },
  spacing: {
    padding: "1rem",
    margin: "1rem"
  },
  borderRadius: "0.5rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
};

export const darkTheme = {
  theme: "dark",
  colors: {
    background: "#1f2937",
    primary: "#111827",
    accent: "#facc15",
    text: "#f3f4f6",
    heading: "#ffffff",
    buttonPrimary: "#facc15",
    buttonText: "#111827",
    navBackground: "#111827",
    navText: "#d1d5db",
    highlight: "#4b5563",
    cardBackground: "#1f2937",
    cardBorder: "#374151"
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif"
  },
  spacing: {
    padding: "1rem",
    margin: "1rem"
  },
  borderRadius: "0.5rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
};

export const themeConfig = {
  light: lightTheme,
  dark: darkTheme,
  
  // Helper function to get theme values
  getTheme: (themeName) => {
    return themeConfig[themeName] || themeConfig.light;
  },
  
  // Generate CSS variables for a theme
  generateCSSVariables: (themeName) => {
    const theme = themeConfig.getTheme(themeName);
    const variables = {};
    
    // Colors
    Object.entries(theme.colors).forEach(([key, value]) => {
      variables[`--color-${key}`] = value;
    });
    
    // Fonts
    Object.entries(theme.fonts).forEach(([key, value]) => {
      variables[`--font-${key}`] = value;
    });
    
    // Spacing
    Object.entries(theme.spacing).forEach(([key, value]) => {
      variables[`--spacing-${key}`] = value;
    });
    
    // Other properties
    variables['--border-radius'] = theme.borderRadius;
    variables['--box-shadow'] = theme.boxShadow;
    
    return variables;
  }
};