const fs = require("fs");

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

const getPlayerJson = async (req, res, next) => {
  const id = req.params.id.replace(/(\.json)/g, '');
  try {
    const contents = await fs.readFileSync(`./json/${id}.json`);
    res.status(200).send(JSON.parse(contents));
  } catch (err) {
    if (err instanceof Error) {
      res.status(404);
      res.end();
      next(err);
    }
  }
}

app.get("/api/player/:id", getPlayerJson);

app.get("/api/profile/:id", getPlayerJson);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});