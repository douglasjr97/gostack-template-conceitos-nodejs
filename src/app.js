const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");




// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [
  { id: uuid(), title: "Front", url: "http://facebook.com", techs: "React", likes: 20 },
  { id: uuid(), title: "Backend", url: "http://facebook.com", techs: "Node", likes: 30 }
];

app.get("/repositories", (request, response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, tech, url } = request.body;

  const repository = {
    id: uuid(), title, tech, likes: 0, url
  }

  repositories.push(repository)
  return response.json(repository)
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

app.listen(3333, () => {
  console.log('Backend start! 🚀')
})

module.exports = app;
