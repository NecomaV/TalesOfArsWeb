/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '364': '364px',
        '428': '428px',
        '706': '706px',
        '990': '990px',
        '1089': '1089px',
        '1383': '1383px',

      },
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
        'loginBg': "url('img/loginBg.png')",
        'spinner' : "url('img/Spinner.svg')",
        'dlc': "url('img/dlc-bg.png')",
        'herobg': "url('img/hero.png')",
      },
      colors: {
        main: "#102542",
        butg: "#628b48",
        bgfourm: "#26282e",
        change: "#bfd1be",
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

