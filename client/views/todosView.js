var TodosView = Backbone.View.extend({
  initialize: function () {
    this.collection.on('add', this.render, this);
  },
  render: function () {
    this.collection.forEach(this.addAllTodos, this);
  },
  addAllTodos: function (todoItem) {
    var todoView = new  TodoView({
      model: todoItem
    });
    todoView.render();
  }
});

var todosView;

todosCollection.fetch({
  success: function () {
    todosView = new TodosView({
      collection: todosCollection
    });
    todosView.render();
  }
});
