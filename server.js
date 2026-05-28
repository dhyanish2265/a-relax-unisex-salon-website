const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

// Serve static files with caching headers
app.use(
  express.static(PUBLIC_DIR, {
    maxAge: "1y",
    etag: true,
    // Don't cache the HTML entry point so updates are picked up
    setHeaders(res, filePath) {
      if (path.extname(filePath) === ".html") {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  })
);

// SPA fallback — return index.html for any unknown route
app.get("*", (_req, res) => {
  const indexFile = path.join(PUBLIC_DIR, "index.html");
  if (fs.existsSync(indexFile)) {
    res.sendFile(indexFile);
  } else {
    res.status(404).send("index.html not found — did you run the build?");
  }
});

app.listen(PORT, () => {
  console.log(`A Relax Unisex Salon server running at http://localhost:${PORT}`);
});
