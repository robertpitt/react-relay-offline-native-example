module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [["relay", { "artifactDirectory": "./src/__generated__" }]]
};
