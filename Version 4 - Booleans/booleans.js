var todoObj = {
  // store
  todos: [],

  // display
  display: function(obj, text) {
    if (text == undefined || text == null) {
      console.log("My todos:", obj);
    } else {
      console.log(text + "\n" + "My todos:", obj);
    }
  },

  // add
  add: function(arrName, objAdd) {
    arrName.push({
      name: objAdd,
      completed: false
    });
    this.display(arrName, "Todo item(s) added.");
  },

  // edit
  edit: function(arrName, arrIndex, objEdit) {
    arrName[arrIndex].name = objEdit;
    this.display(arrName, "Todo item(s) edited.");
  },

  // delete
  remove: function(arrName, arrIndex, objRemoveCount) {
    objRemoveCount = isNaN(objRemoveCount) ? 1 : objRemoveCount;
    arrName.splice(arrIndex, objRemoveCount);
    this.display(arrName, "Todo item(s) removed.");
  },

  // complete
  toggleStatus: function(arrName, arrIndex) {
    arrName[arrIndex].completed = !arrName[arrIndex].completed;
    this.display(arrName, "Todo item(s) status changed.");
  }
};

/*
todoObj.display(todoObj.todos);

todoObj.add(todoObj.todos, "item 1");
todoObj.add(todoObj.todos, "item 2");

todoObj.edit(todoObj.todos, 0, "ITEM_1");
todoObj.edit(todoObj.todos, 1, "ITEM_2");

todoObj.remove(todoObj.todos, 1);

todoObj.toggleStatus(todoObj.todos, 0);
*/
