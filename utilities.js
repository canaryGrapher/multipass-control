const { spawn } = require("child_process")

const run_command = async (cmd, args) => {
  const proc = spawn(cmd, args, { shell: true })
  var stdin = ""
  var stdout = ""
  proc.stdin.on('data', data => stdin += data.toString())
  proc.stdout.on('data', data => stdout += data.toString())
  return new Promise(res => proc.on('close', (status) => res({ status, stdin, stdout })))
}

// return each line as an array with each word separated
const output_split_array = async (cmd) => {
  const command_output =
    process.platform === "win32"
      ? await run_command("cmd.exe", ["/c", cmd, "--format", "json"])
      : await run_command(cmd + " --format json")
  return command_output.stdout
}

module.exports = {
  run_command,
  output_split_array,
}
