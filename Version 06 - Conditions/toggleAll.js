var todoObj = {
  // store
  todos: [],

  // display
  display: function(obj, text) {
    if (obj.length === 0) {
      console.log("No Todo items :)");
    } else {
      if (text === undefined || text === null) {
        console.log("My todos:");
      } else {
        console.log(text + "\n" + "My todos:");
      }

      for (var i = 0; i < obj.length; i++) {
        if (obj[i].completed) {
          console.log("(x) " + obj[i].name);
        } else {
          console.log("( ) " + obj[i].name);
        }
      }
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
  },

  // toggle all
  toggleAll: function(arrName) {
    var itemCompleted = 0;
    
    for (var i = 0; i < arrName.length; i++) {
      if (arrName[i].completed === true) {
        itemCompleted++;
      }
    }

    if (itemCompleted === arrName.length) {
      for (var j = 0; j < arrName.length; j++) {
        arrName[j].completed = false;
      }
    } else {
      for (var j = 0; j < arrName.length; j++) {
        arrName[j].completed = true;
      }
    }

    this.display(arrName, "All status update.");
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

todoObj.toggleAll(todoObj.todos);
*/
