const fs = require("fs");
const {
  launchImage,
  stopImage,
  restartImage,
  startImage,
  imageInfo,
  localImages,
  findImages,
  purgeImages,
  executeCommand,
  recoverImage,
  deleteImage,
  suspendImage,
} = require("./index");

var logStream = fs.createWriteStream(`${Date.now()}.log`, { flags: "a" });

const main = async () => {
  logStream.write(`Starting Test at: ${Date.now()} \n\n`);

  const finding = await findImages();
  logStream.write("Find Log: \n");
  logStream.write(JSON.stringify(finding));
  logStream.write("\n\n");

  const launching = await launchImage({
    name: "flattering-racoons",
    image: "core",
    memory: "512M",
  });
  logStream.write("Launch Log: \n");
  logStream.write(JSON.stringify(launching));
  logStream.write("\n\n");

  const image_informing = await imageInfo("flattering-racoons");
  logStream.write("Image Information Log: \n");
  logStream.write(JSON.stringify(image_informing));
  logStream.write("\n\n");

  const restarting = await restartImage("flattering-racoons");
  logStream.write("Restarting Log: \n");
  logStream.write(JSON.stringify(restarting));
  logStream.write("\n\n");

  const stopping = await stopImage("flattering-racoons");
  logStream.write("Stopping Log: \n");
  logStream.write(JSON.stringify(stopping));
  logStream.write("\n\n");

  listing("List after stopping");

  const starting = await startImage("flattering-racoons");
  logStream.write("Starting Log: \n");
  logStream.write(JSON.stringify(starting));
  logStream.write("\n\n");

  listing("List after starting");

  const executing = await executeCommand({
    name: "flattering-racoons",
    cmd: "pwd",
  });
  logStream.write("Executing Log: \n");
  logStream.write(JSON.stringify(executing));
  logStream.write("\n\n");

  const suspending = await suspendImage("flattering-racoons");
  logStream.write("Suspend Log: \n");
  logStream.write(JSON.stringify(suspending));
  logStream.write("\n\n");

  listing("List after suspending");

  const deleting = await deleteImage("flattering-racoons");
  logStream.write("Deleting Log: \n");
  logStream.write(JSON.stringify(deleting));
  logStream.write("\n\n");

  listing("List after deleting");

  const recovering = await recoverImage("flattering-racoons");
  logStream.write("Recover Log: \n");
  logStream.write(JSON.stringify(recovering));
  logStream.write("\n\n");

  listing("List after recovering");

  const deleting_2 = await deleteImage("flattering-racoons");
  logStream.write("Deleting_2 Log: \n");
  logStream.write(JSON.stringify(deleting_2));
  logStream.write("\n\n");

  const purge = await purgeImages();
  logStream.write("Purge Log: \n");
  logStream.write(JSON.stringify(purge));
  logStream.write("\n\n");

  listing("List after purging");
};

const listing = async (msg) => {
  const listing = await localImages();
  console.log(listing);
  console.log(JSON.stringify(listing));
  logStream.write(`${msg}: \n`);
  logStream.write(JSON.stringify(listing));
  logStream.write("\n\n");
};

// main();
listing();
