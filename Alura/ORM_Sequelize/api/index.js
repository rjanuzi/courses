const express = require("express");
const routes = require("./routes"); /* Get routes/index.js by default */

const app = express();
const PORT = 80;

/* Initialize the routes module in the ./routes/index.js */
routes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
