const { run_command, output_split_array } = require("./utilities");

const findImages = async () => {
  return JSON.parse(output_split_array("multipass find"));
};

const localImages = async () => {
  return JSON.parse(output_split_array("multipass list"));
};

const imageInfo = async (imageName) => {
  return JSON.parse(output_split_array(`multipass info ${imageName}`));
};

const suspendImage = async (imageName) => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass suspend ${imageName}`])
      : run_command(`multipass suspend ${imageName}`);
  return command_output.status.toString() === "0"
    ? { successful: true, error: null }
    : {
        successful: false,
        error: `Instance "${imageName}" does not exist`,
      };
};

const restartImage = async (imageName) => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass restart ${imageName}`])
      : run_command(`multipass restart ${imageName}`);
  return command_output.status.toString() === "0"
    ? { successful: true, error: null }
    : {
        successful: false,
        error: command_output.stderr.toString().trim(),
      };
};

const startImage = async (imageName) => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass start ${imageName}`])
      : run_command(`multipass start ${imageName}`);
  return command_output.status.toString() === "0"
    ? { successful: true, error: null }
    : {
        successful: false,
        error: command_output.stderr.toString().trim(),
      };
};

const stopImage = async (imageName) => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass stop ${imageName}`])
      : run_command(`multipass stop ${imageName}`);
  return command_output.status.toString() === "0"
    ? { successful: true, error: null }
    : {
        successful: false,
        error: command_output.stderr.toString().trim(),
      };
};

const deleteImage = async (imageName) => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass delete ${imageName}`])
      : run_command(`multipass delete ${imageName}`);
  return command_output.status.toString() === "0"
    ? { successful: true, error: null }
    : {
        successful: false,
        error: command_output.stderr.toString().trim(),
      };
};

//upon recover, image is in stopped state
const recoverImage = async (imageName) => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass recover ${imageName}`])
      : run_command(`multipass recover ${imageName}`);
  return command_output.status.toString() === "0"
    ? { successful: true, error: null }
    : {
        successful: false,
        error: command_output.stderr.toString().trim(),
      };
};

const executeCommand = async (imageObject) => {
  const { name, cmd } = imageObject;
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass exec ${name} -- ${cmd}`])
      : run_command(`multipass exec ${name} -- ${cmd}`);
  return command_output.status.toString() === "0"
    ? {
        successful: true,
        error: null,
        output: command_output.stdout.toString().trim(),
      }
    : {
        successful: false,
        error: command_output.stderr.toString().trim(),
      };
};

const purgeImages = async () => {
  const command_output =
    process.platform === "win32"
      ? run_command("cmd.exe", ["/c", `multipass purge`])
      : run_command("multipass purge");
  return command_output.status.toString() === "0"
    ? {
        successful: true,
        error: null,
        output: command_output.stdout.toString().trim(),
      }
    : {
        successful: false,
        error: command_output.stderr.toString().trim(),
      };
};

const launchImage = async (imageObject) => {
  //input format
  /*
    {
      image: ,
      name: ,
      cpu: ,
      disk: ,
      memory: ,

    }
  */
  const { image, name, cpu, disk, memory } = imageObject;
  if (image) {
    let command_argument = [`multipass launch ${image}`];
    if (process.platform === "win32") command_argument.unshift("/c");
    if (name) command_argument.push(...["-n", name]);
    if (cpu) command_argument.push(...["-c", cpu]);
    if (disk) command_argument.push(...["-d", disk]);
    if (memory) command_argument.push(...["-m", memory]);
    const command_output =
      process.platform === "win32"
        ? run_command("cmd.exe", command_argument)
        : run_command(command_argument);
    return command_output.status.toString() === "0"
      ? {
          successful: true,
          error: null,
          output: (command_output.stdout.toString().trim().split('\r')).slice(-1).pop(),
        }
      : {
          successful: false,
          error: command_output.stderr.toString().trim(),
        };
  } else {
    return {
      successful: false,
      error: "No file name supplied",
    };
  }
};

module.exports = {
  launchImage,
  purgeImages,
  executeCommand,
  recoverImage,
  deleteImage,
  stopImage,
  startImage,
  restartImage,
  suspendImage,
  imageInfo,
  localImages,
  findImages,
};

// console.log("output: ", command_output.output.toString());
// console.log("stderr: ", command_output.stderr.toString());
// console.log("status: ", command_output.status.toString());
// console.log("signal: ", command_output.signal);
// console.log("stdout:  ", command_output.stdout.toString());s