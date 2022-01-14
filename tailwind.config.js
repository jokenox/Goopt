module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        goonavy: "#153648",
        gooblue: "#259BAB",
        goocyan: "#09B49A",
        gooviolet: "#696CC0",
        googray: {
          text: "#4d5156",
          DEFAULT: "#9AA0A6",
          light: "#DFE1E5",
          ultralight: "#F8F9FA",
          button: "#EFEFEF"
        },
        goolink: {
          DEFAULT: "#1A0DAB",
          visited: "#609"
        }
      }  
    }
  },
  plugins: [],
}
