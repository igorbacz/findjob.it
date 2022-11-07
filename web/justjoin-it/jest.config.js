module.exports = {
  verbose: true,

  rootDir: ".",

  roots: ["./src"],

  projects: [
    {
      displayName: "components",

      testEnvironment: "jsdom",

      testMatch: ["<rootDir>/src/**/*.test.*"],

      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },

      moduleFileExtensions: ["tsx", "ts", "js", "jsx"],

      coveragePathIgnorePatterns,

      setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    },
  ],

  collectCoverage: false,
};
