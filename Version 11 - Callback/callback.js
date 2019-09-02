var todoObj = {
  // store
  todos: [],

  // add
  add: function(arrName, objAdd) {
    arrName.push({
      name: objAdd,
      completed: false
    });
    view.display(arrName);
  },

  // edit
  edit: function(arrName, arrIndex, objEdit) {
    arrName[arrIndex].name = objEdit;
    view.display(arrName);
  },

  // delete
  remove: function(arrName, arrId, objRemoveCount) {
    objRemoveCount = isNaN(objRemoveCount) ? 1 : objRemoveCount;
    arrName.splice(arrId, objRemoveCount);
    view.display(arrName);
  },

  // complete
  toggleStatus: function(arrName, arrIndex) {
    arrName[arrIndex].completed = !arrName[arrIndex].completed;
    view.display(arrName);
  },

  // toggle all
  toggleAll: function(arrName) {
    var itemCompleted = 0;

    arrName.forEach(function(todo) {
      if (todo.completed === true) {
        itemCompleted++;
      }
    });

    if (itemCompleted === arrName.length) {
      arrName.forEach(function(todo) {
        todo.completed = false;
      });
    } else {
      arrName.forEach(function(todo) {
        todo.completed = true;
      });
    }

    view.display(arrName);
  }
};

var handlers = {
  // add
  add: function() {
    todoObj.add(todoObj.todos, document.getElementById("add").value);
    document.getElementById("add").value = "";
  },
  addEnter: function() {
    if (event.keyCode === 13) {
      this.add();
    }
  },
  // edit
  edit: function() {
    var objEdit = document.getElementById("editText").value;
    var arrIndex = document.getElementById("editPosition").value - 1;

    todoObj.edit(todoObj.todos, arrIndex, objEdit);
    document.getElementById("editText").value = "";
    document.getElementById("editPosition").value = "";
  },
  // delete
  remove: function(idToDelete) {
    todoObj.remove(todoObj.todos, document.getElementById("idToDelete"));
  },
  // complete
  toggleStatus: function() {
    todoObj.toggleStatus(
      todoObj.todos,
      document.getElementById("toggle").value - 1
    );
    document.getElementById("toggle").value = "";
  },
  // toggleAll
  toggleAllButton: function() {
    todoObj.toggleAll(todoObj.todos);
  }
};

var view = {
  display: function(obj) {
    var listParent = document.querySelector("ol");
    listParent.innerHTML = "";

    obj.forEach(function(todo, index) {
      var listChild = document.createElement("li");

      if (todo.completed === true) {
        listChild.textContent = "(x) " + todo.name;
      } else {
        listChild.textContent = "( ) " + todo.name;
      }

      listChild.id = "list-item-" + (index + 1);
      listChild.appendChild(this.createDeleteButton(index + 1));
      listParent.appendChild(listChild);
    }, this);
  },

  createDeleteButton: function(count) {
    var deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.className =
      "delete-button" + " " + "delete-button-item-" + count;

    return deleteButton;
  },

  eventListeners: function() {
    var todoUnorderedList = document.getElementById("list");

    todoUnorderedList.addEventListener("click", function(event) {
      var itemClicked = event.target;

      if (itemClicked.className.includes("delete-button")) {
        var idToDelete =
          "list-item-" +
          itemClicked.className.charAt(itemClicked.className.length - 1);

        handlers.remove(idToDelete);
      }
    });
  }
};

view.eventListeners();
