import { PlaywrightTestConfig, defineConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: ["tests/loginE2E.test.ts"],
  

  // Shared account in all tests

  projects: [
    { name: "setup", testMatch: /.*\.setup\.ts/ },
    {
      name: "Google Chrome",
      use: { 
        ...devices["Desktop Chrome"], 
        channel: "chrome",
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup']
    }, 
  ],
  // fullyParallel: true,
  use: {
    headless: false,
    // actionTimeout: 0,
    trace: "off",
    screenshot: "on",
    // launchOptions: {
    //   slowMo: 1000
    // },
    //viewport: { width: 1920, height: 1080 },
    // video: 'off',
    contextOptions: {
      // recordVideo: {
      //   dir: './jsonReports' // TODO fix the impossiblility to attach to index.html file
      // }
    },
    baseURL: "https://ecommerce-playground.lambdatest.io"
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
