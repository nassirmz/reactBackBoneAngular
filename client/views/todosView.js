var TodosView = Backbone.View.extend({
  tagName: 'ul',
  id: 'incompleted-tasks',
  render: function () {
    this.collection.forEach(this.addData, this);
  },
  addData: function (todoItem) {
    if(!todoItem.get('completed')) {
      var todoView = new  TodoView({
        model: todoItem
      });
      todoView.render();
      this.$el.append(todoView.el);
    }
  }
});

var todosView;

todosCollection.fetch({
  success: function () {
    todosView = new TodosView({
      collection: todosCollection
    });
    todosView.render();
    // $("#incompleted-tasks").append(todosView.el);
    $(".incomplete").append(todosView.el);
  }
});