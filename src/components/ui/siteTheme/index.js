import { extendTheme } from "@chakra-ui/react";

// TODO: MAKE CUSTOM BUTTON VARIATION/THEME TO HOVER, ECT
// BUTTON
export const Button = {
  // Styles for the base style
  baseStyle: {
    borderRadius: "10px",
    fontFamily: "`main, 'Open Sans', sans-serif`",
    // <-- border radius & font family is same for all variants and sizes
  },
  sizes: {
    // Styles to be to be applied when passed to the Button
    // E.g <Button size='md'>Click</Button>
    sm: {
      fontSize: "12px",
    },
    md: {
      fontsize: "18px",
    },
    lg: {
      fontSize: "22px",
    },
  },
  // Styles for the visual style variations
  variants: {
    rainbow: {
      bgGradient:
        "linear(to-b, #ff96bc, #ffc477 , #fbe84a , #c1f3a1 , #96fce4 )",
      color: "black",
      border: "1px solid break",
    },
  },
  //   // The default `size` or `variant` values
  //   defaultProps: {},
};

// MAIN THEME
const siteTheme = extendTheme({
  components: {
    Button,
  },
  fonts: {
    heading: `main, 'Open Sans', sans-serif`,
    body: `main, 'Open Sans', sans-serif`,
  },
  colors: {
    primary: "darkCyan",
    secondary: "#E97F71",
    tertiary: "#4d2f00",
    "dark-accent-1": "#12574C",
    "accent-1": "#00CBCB",
    text: "#ffff",
    "text-accent-1": "#ECCFB6",
  },
  breakpoints: {
    base: "0em",
    "2xs": "11em",
    xs: "20em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em", // ~1536px
  },
});

export default siteTheme;
