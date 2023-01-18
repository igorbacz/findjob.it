// module.exports = {
//   verbose: true,
//   rootDir: ".",
//   setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   moduleDirectories: ["node_modules", "src"],
//   moduleNameMapper: {
//     "\\.(css|less|scss)$": "identity-obj-proxy",
//   },
//   transform: {
//     "^.+\\.(ts|tsx)?$": "ts-jest",
//     "^.+\\.(js|jsx)$": "babel-jest",
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file.js",
//   },
// };
module.exports = {
  verbose: true,

  rootDir: ".",

  roots: ["./src"],

  projects: [
    {
      displayName: "components",

      testEnvironment: "jsdom",

      testMatch: ["<rootDir>/src/**/*.test.*"],

      // transform: {
      //   "^.+\\.(ts|tsx)$": "ts-jest",
      //   "^.+\\.(js|jsx)$": "babel-jest",
      // },

      moduleFileExtensions: ["tsx", "ts", "js", "jsx"],

      setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
      preset: "ts-jest/presets/js-with-ts",
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
    },
  ],

  collectCoverage: false,
};
