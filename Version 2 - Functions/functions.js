// store
var todos = ["item 1", "item 2", "item 3"];

// display
function display(object) {
  console.log(object);
}

display(todos);
display("todos");
display("My todos:" + " " + todos);

// add
function add(arrName, objAdd) {
  arrName.push(objAdd);
  display(arrName);
}

add(todos, "item 4");
add(todos, "item 5");

// edit
function edit(arrName, arrIndex, objEdit) {
  arrName[arrIndex] = objEdit;
  display(arrName);
}

edit(todos, 0, "ITEM_1");

// delete
function remove(arrName, arrIndex, objRemoveCount) {
  arrName.splice(arrIndex, objRemoveCount);
  display(arrName);
}

remove(todos, 0, 2);
