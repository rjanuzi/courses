import extractLinks from "./index.js";
import checkLinks from "./check-http.js";
import fs from "fs";
import chalk from "chalk";

const path = process.argv[2]; // We expect the path to be the second argument of the command
const check = process.argv.length == 4 ? process.argv[3] == "--check" : false; // We expect the check flag to be the third argument of the command

async function showLinks(filename, links, check) {
  console.log(`Links for file ${chalk.bgBlue(filename)}:\n\n`);
  if (check) {
    checkLinks(links).then((checkedLinks) => {
      for (let cl of checkedLinks) {
        console.log(
          `URL: ${cl.url} | Status: ${cl.status} | Status Text: ${cl.statusText}`
        );
      }
    });
  } else {
    console.log(links);
  }
}

async function processLinks(path, check) {
  try {
    if (fs.lstatSync(path).isDirectory()) {
      let files = await fs.promises.readdir(path);
      for (let file of files) {
        await processLinks(`${path}/${file}`, check);
      }
    } else if (fs.lstatSync(path).isFile()) {
      await extractLinks(path).then((links) => showLinks(path, links, check));
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

processLinks(path, check);
