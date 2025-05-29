"use client"
import { createTheme } from "@mui/material/styles"

// set base palette
let theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-oldenburg-sans)",
  },
  palette: {
    primary: {
      main: "#f38269",
    },
    secondary: {
      main: "#393734",
    },
    pink: {
      main: "#fde7df",
    },
    cream: {
      main: "#fdefd5",
    },
    sand: {
      main: "#f4dfc4",
    },
    grey: { 200: "#f0f0f0" },
    text: {
      primary: "#292725",
      secondary: "#aaa",
    },
    background: {
      default: "#fff",
      paper: "#ffffff",
    },
  },
})

// augment custom colours
theme = createTheme(theme, {
  palette: {
    pink: theme.palette.augmentColor({
      color: theme.palette.pink,
      name: "pink",
    }),
    cream: theme.palette.augmentColor({
      color: theme.palette.cream,
      name: "cream",
    }),
    sand: theme.palette.augmentColor({
      color: theme.palette.sand,
      name: "sand",
    }),
  },
})

// customize rest of theme
theme = createTheme(theme, {
  shape: { borderRadius: 18 },
  typography: {
    h1: {
      fontFamily: "var(--font-pangolin)",
      fontWeight: 300,
      fontSize: "3.8rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    subtitle1: {
      fontFamily: "var(--font-pangolin)",
      fontSize: "1.8rem",
      letterSpacing: "0.15em",
      textTransform: "lowercase",
    },
    h5: { fontSize: "1.2rem", lineHeight: 1.5 },
    h6: { fontFamily: "var(--font-pangolin)", fontSize: "1.1rem", lineHeight: 1.3 },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "var(--font-geist-sans)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 200,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
        },
      },
    },
    MuiToolbar: {
      variants: [
        {
          props: { variant: "mini" },
          style: {
            minHeight: 30,
            "@media (min-width:600px)": {
              minHeight: 30,
            },
          },
        },
      ],
    },
  },
})

console.log("theme", theme)
export default theme
