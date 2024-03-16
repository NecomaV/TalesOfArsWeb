/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        100: "400px",
        600: "600px",
        920: "920px",
        1330: "1330px",
      },
      height: {
        100: "400px",
        600: "600px",
        1330: "1330px",
       
      },
      backgroundImage: {
        'LongPic': "url('img/long.png')",
        'sgbg': "url('img/sgbg.png')",
        'pxBg': "url('img/pxBg.png')",
        'BFT': "url('img/animation.gif')",
      },
      colors: {
        main: "#102542",
        butg: "#628b48",
        bgfourm: "#26282e",
      },
      backdropBrightness: {
        60: "60%",
        65: "65%",
        57: "57%",

      },
    },
  },
  plugins: [],
}

