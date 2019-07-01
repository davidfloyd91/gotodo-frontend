var url = "http://localhost:8000";
var Todo = /** @class */ (function () {
    function Todo(res) {
        this.id = res.Id;
        this.name = res.name;
        this.description = res.description;
    }
    return Todo;
}());
var todos = [];
document.addEventListener("DOMContentLoaded", function (event) {
    document.addEventListener("click", function (e) {
        if (e["target"]["attributes"]["id"]["value"] === "fetch") {
            getTodos();
        }
        ;
    });
    function getTodos() {
        fetch(url + "/todos/")
            .then(function (res) { return res.json(); })
            .then(function (json) {
            // clear todos only if response is parsed
            todos = [];
            for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
                var todo = json_1[_i];
                todos.push(new Todo(todo));
            }
        })
            .then(function () { return console.log('todos: ', todos); });
    }
});
