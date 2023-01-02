async function checkHttp(url) {
  try {
    let res = await fetch(url);
    return { url: url, status: res.status, statusText: res.statusText };
  } catch (err) {
    if (err.cause.code === "ENOTFOUND") {
      return { url: url, status: "Not Found", statusText: "Server not found" };
    }
    return { url: url, status: err, statusText: "Unexpected error" };
  }
}

async function checkLinks(links) {
  return await Promise.all(links.map(async (link) => checkHttp(link.url)));
}

export default checkLinks;
