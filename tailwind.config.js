module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: false,
  theme: {
    extend: {
      colors: {
        dark: "#242424",
        darker: "#121212",
        wayblue: "#54B0B1",
        light: "#f5f5f5",
      },
    },
    fontFamily: {
      sans: ["Inter", "Open Sans"],
      serif: ["Source Serif Pro", "Georgia", "Cambria"],
      mono: ["SFMono-Regular", "Menlo"],
      display: ["Oswald"],
      body: ["Inter", "Open Sans"],
    },
  },
  variants: {},
  plugins: [],
}
