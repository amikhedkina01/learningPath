import { PlaywrightTestConfig, defineConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: ["tests/basicInteractions.test.ts"],
  use: {
    actionTimeout: 0,
    trace: 'off',
    screenshot: "off",
    //viewport: { width: 1920, height: 1080 },
    // video: 'off',
    contextOptions: {
      // recordVideo: {
      //   dir: './jsonReports' // TODO fix the impossiblility to attach to index.html file 
      // }
    }
  },
  retries: 0,
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "always",
      },
    ],
  ],
};

export default config;
