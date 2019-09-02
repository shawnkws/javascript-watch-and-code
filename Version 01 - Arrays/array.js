// store
var todos = ['item 1', 'item 2', 'item 3'];

// display
console.log(todos);
console.log("todos");
console.log("My todos:" + " " + todos);

// add
todos.push("item 4");
console.log(todos);
todos.push("item 5");
console.log(todos);

// edit
todos[0] = "ITEM_1";
console.log(todos);

// delete
todos.splice(0, 2);
console.log(todos);