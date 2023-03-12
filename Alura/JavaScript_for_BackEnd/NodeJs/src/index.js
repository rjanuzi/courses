import fs from "fs"; // Native Node.js module
import chalk from "chalk"; // Third-party module

const linksRegex = /\[([^[\]]*?)\]\((https?:\/\/[^s?#.].[^\s]*)\)/gm;

function digestReadError(err) {
  throw err;
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
async function extractLinks(path) {
  try {
    const data = await fs.promises.readFile(path, {
      encoding: "utf-8",
      flag: "r",
    });
    let links = [...data.matchAll(linksRegex)]; // Spread the result and create the array
    let result = links.map((l) => ({ name: l[1], url: l[2] })); // We are interested only in the first and second groups
    return result.length > 0 ? result : null;
  } catch (err) {
    digestReadError(err);
  } finally {
    console.log(chalk.blue("Done!"));
  }
}

export default extractLinks;
