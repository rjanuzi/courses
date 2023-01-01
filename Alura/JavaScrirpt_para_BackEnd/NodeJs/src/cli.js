import extractLinks from "./index.js";
import fs from "fs";
import chalk from "chalk";

const path = process.argv[2]; // We expect the path to be the second argument of the command

async function showLinks(filename, links) {
  console.log(`Links for file ${chalk.bgBlue(filename)}:\n\n`);
  console.log(links);
}

async function processLinks(path) {
  try {
    if (fs.lstatSync(path).isDirectory()) {
      let files = await fs.promises.readdir(path);
      for (let file of files) {
        await processLinks(`${path}/${file}`);
      }
    } else if (fs.lstatSync(path).isFile()) {
      let links = await extractLinks(path);
      showLinks(path, links);
    } else {
      console.log("Invalid file/folder path");
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File/folder not found");
    } else {
      throw err;
    }
  }
}

processLinks(path);
