var todoObj = {
  // store
  todos: ["item 1", "item 2", "item 3"],

  // display
  display: function(obj, text) {
    if (text == undefined || text == null) {
      console.log("My todos:" + " " + obj);
    } else {
      console.log(text + "\n" + "My todos:" + " " + obj);
    }
  },

  // add
  add: function(arrName, objAdd) {
    arrName.push(objAdd);
    this.display(arrName, "Todo item(s) added.");
  },

  // edit
  edit: function(arrName, arrIndex, objEdit) {
    arrName[arrIndex] = objEdit;
    this.display(arrName, "Todo item(s) edited.");
  },

  // delete
  remove: function(arrName, arrIndex, objRemoveCount) {
    objRemoveCount = isNaN(objRemoveCount) ? 1 : objRemoveCount;
    arrName.splice(arrIndex, objRemoveCount);
    this.display(arrName, "Todo item(s) removed.");
  }
};

todoObj.display(todoObj.todos);

todoObj.add(todoObj.todos, "item 4");
todoObj.add(todoObj.todos, "item 5");

todoObj.edit(todoObj.todos, 0, "ITEM_1");
todoObj.edit(todoObj.todos, 4, "ITEM_5");

todoObj.remove(todoObj.todos, 4);
todoObj.remove(todoObj.todos, 0);
