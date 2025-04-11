import { _electron as electron, test, expect } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro
test("launch electron app", async () => {
  // Launch Electron app
  const electronApp = await electron.launch({ args: ['dist-electron/main/index.js'] });

  // Evaluation expression in the Electron context
  const appPath = await electronApp.evaluate(async ({ app }) => {
    // This runs in the main Electron process, parameter here is always
    // the result of the require('electron') in the main app script
    return app.getAppPath();
  });
  console.log(appPath);

  // Get the first window that the app opens, wait if necessary.
  const window = await electronApp.firstWindow();
  await expect(window).toHaveTitle("Electron + Vite + Vue");
  // Print the title.
  console.log(await window.title());
  // Capture a screenshot.
  await window.screenshot({ path: 'test-results/screenshots/intro.png' });
  // Direct Electron console to Node terminal.
  window.on('console', console.log);
  // Exit app.
  await electronApp.close();
});
