module.exports = {
  verbose: true,

  rootDir: ".",

  roots: ["./src"],

  projects: [
    {
      displayName: "components",

      testEnvironment: "jsdom",

      testMatch: ["<rootDir>/src/**/*.test.*"],

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
