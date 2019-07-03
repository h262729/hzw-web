module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-plugin-px2rem":{
      rootValue: 37.5,
      //exclude:/(node_modules)/,
      mediaQuery: false
    }
  }
};
