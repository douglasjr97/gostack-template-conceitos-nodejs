const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
      return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const {title, url, techs, likes} = request.body;
    const repository = {id: uuid(), title, url, techs, likes};
      repositories.push(repository);
        return response.json(repositories)
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
    const { title, owner } = request.body;
      const repositoriesIndex = repositories.findIndex(repository => repository.id === id);
        const repository = {
          id,
          title,
          owner
        };
          repositories[repositoriesIndex] = repository;
            return response.json(repository)
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
    const repositoriesIndex = repositories.findIndex(repository => repository.id === id);
      if(repositoriesIndex < 0){
        return response.status(400).json({error: "Project not found."})
      }

      repositories.splice(repositoriesIndex, 1);
        return response.json("deleted with success")
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  
  const repositoriesIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoriesIndex === -1){
    return response.status(400).json({error: "Project not found."})
  }

  repositories[repositoriesIndex].likes += 1

return response.json(repositories[repositoriesIndex])
    

});

app.listen(3333, () => {
  console.log('backend start! 🚀')
})

module.exports = app;