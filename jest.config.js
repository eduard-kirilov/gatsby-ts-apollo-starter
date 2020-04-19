/**
* React, Gatsby, Jest, TypeScript, Apollo - Starter
* https://github.com/eduard-kirilov/gatsby-ts-apollo-starter
* Copyright (c) 2020 Eduard Kirilov | MIT License
*/
module.exports = {
  setupFilesAfterEnv: ["<rootDir>./jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^components(.*)$": "<rootDir>/src/components$1",
    "^compose(.*)$": "<rootDir>/src/compose$1",
    "^gql(.*)$": "<rootDir>/src/gql$1",
    "^images(.*)$": "<rootDir>/src/images$1",
    "^pages(.*)$": "<rootDir>/src/pages$1",
    "^styles(.*)$": "<rootDir>/src/styles$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
