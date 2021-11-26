const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");




// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  const { title, url, techs, likes } = request.body;
  repositoriesFormat = { id: uuid(), title, url, techs, likes }
  if(likes.request.body != 0){
    likes.response.body = 0;
  }
  console.log(repositoriesFormat)


  return response.json(repositoriesFormat)
});

app.post("/repositories", (request, response) => {
  // TODO
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
