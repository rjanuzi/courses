import fs from "fs"; // Native Node.js module
import chalk from "chalk"; // Third-party module

function digestReadError(err) {
  throw new Error(chalk.red(err.code, "File not finded"));
}

// Sync version
// function readFile(path) {
//   return fs.readFile(path, { encoding: "utf-8", flag: "r" }, (err, data) => {
//     if (err) {
//       digestReadError(err);
//     } else {
//       console.log(chalk.green(data));
//     }
//   });
// }

// Promisses with then/catch
// function readFile(path) {
//   fs.promises
//     .readFile(path, { encoding: "utf-8", flag: "r" })
//     .then((data) => {
//       console.log(chalk.green(data));
//     })
//     .catch(digestReadError);
// }

// Async/Await - Same result as promisse, but more readable
async function readFile(path) {
  try {
    const data = await fs.promises.readFile(path, {
      encoding: "utf-8",
      flag: "r",
    });
    console.log(chalk.greenBright(data));
  } catch (err) {
    digestReadError(err);
  } finally {
    console.log(chalk.blue("Done!"));
  }
}

await readFile("files/text.md");
await readFile("files/texxt.md"); // Error
