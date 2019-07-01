const url: string = "http://localhost:8000";

class Todo {
  id: number;
  name: string;
  description: string;

  constructor(res: any) {
    this.id = res.Id;
    this.name = res.name;
    this.description = res.description;
  }
}

let todos: Todo[] = [];

document.addEventListener("DOMContentLoaded", event => {
  document.addEventListener("click", e => {
    if (e["target"]["attributes"]["id"]["value"] === "fetch") {
      getTodos()
    };
  });

  function getTodos() {
    fetch(url + "/todos/")
    .then(res => res.json())
    .then(json => {
      // clear todos only if response is parsed
      todos = [];
      for (let todo of json) {
        todos.push(new Todo(todo));
      }
    })
    .then(() => console.log('todos: ', todos))
  }
});
