module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        full: "100% 100%",
      },
      fontFamily: {
        header: ["Fraunces", "sans-serif"],
        paragraph: ["Barlow", "sans-serif"],
      },
      colors: {
        "soft-red": "#fe7867",
        "bright-yellow": "#fad400",
        "desaturated-cyan": "#25564b",
        "dark-blue": "#19536b",
        "moderate-cyan": "#458c7e",
        "desaturated-blue": "#23303e",
        "darker-grayish-blue": "#5a636c",
        "dark-grayish-blue": "#818498",
        "grayish-blue": "#a7abae",
        "footer-body": "#82c9bb",
      },
      backgroundImage: {
        "desktop-header": "url('./images/desktop/image-header.jpg')",
        "desktop-transform": "url('./images/desktop/image-transform.jpg')",
        "desktop-stand-out": "url('./images/desktop/image-stand-out.jpg')",
        "desktop-photography": "url('./images/desktop/image-photography.jpg')",
        "desktop-graphic-design":
          "url('./images/desktop/image-graphic-design.jpg')",
        "mobile-header": "url('./images/mobile/image-header.jpg')",
        "mobile-transform": "url('./images/mobile/image-transform.jpg')",
        "mobile-stand-out": "url('./images/mobile/image-stand-out.jpg')",
        "mobile-photography": "url('./images/mobile/image-photography.jpg')",
        "mobile-graphic-design":
          "url('./images/mobile/image-graphic-design.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
