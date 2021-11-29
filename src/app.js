const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");
const { stringify } = require("uuid");

// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request,response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, url, techs, likes} = request.body;
    const repository = { id: uuid(), title, url, techs, likes}
      repositories.push(repository)
      return response.json(repository)
})

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
    const { title, url, techs, likes } = request.body;
    const repositoryIndex = repositories.findIndex(repository => repository.id === id);
      if(repositoryIndex < 0){
        return response.status(400).json({ error: "Project not found"})
      }

      const repository = { id , title, url, techs, likes}

      repositories[repositoryIndex] = repository;


      return response.json(repository)
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
