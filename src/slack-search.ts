import { showHUD } from "@raycast/api";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export default async function main() {
  try {
    const appleScript = `
      tell application "System Events"
        tell application "Slack" to activate
        keystroke "t" using command down
      end tell
    `;

    await execAsync(`osascript -e '${appleScript}'`);
  } catch (error) {
    console.error("Error:", error);
    await showHUD("Failed to send keyboard shortcut to Slack");
  }
}
