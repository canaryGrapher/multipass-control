const { spawnSync } = require("child_process");

const run_command = (cmd, args) => {
  return spawnSync(cmd, args, { shell: true });
};

// return each line as an array with each word separated
const output_split_array = (cmd) => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", cmd, "--format", "json"])
      : run_command(cmd + " --format json");
  return command_output.stdout.toString();
};

module.exports = {
  run_command,
  output_split_array,
};
