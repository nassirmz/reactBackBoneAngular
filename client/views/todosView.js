var TodosView = Backbone.View.extend({
  initialize: function () {
    this.collection.on('add', this.renderTodos, this);
  },
  render: function () {
    this.collection.forEach(this.renderTodos, this);
  },
  renderTodos: function (todoItem) {
    var todoView = new TodoView({
      model:todoItem
    });
    todoView.render();
  }
});

var todosView;
var addTodoView;
todosCollection.fetch({
  success: function () {
    todosView = new TodosView({
      collection: todosCollection
    });
    addTodoView = new AddTodoView({
      collection: todosCollection
    });
    addTodoView.render();
    todosView.render();
  }
});
