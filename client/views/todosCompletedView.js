var TodosCompletedView = Backbone.View.extend({
  tagName: 'ul',
  id: 'completed-tasks',
  render: function () {
    this.collection.forEach(this.addData, this);
  },
  addData: function (todoItem) {
    if(todoItem.get('completed')) {
      var todoView = new  TodoView({
        model: todoItem
      });
      todoView.render();
      this.$el.append(todoView.el);
    }
  }
});

var todosCompletedView;

todosCollection.fetch({
  success: function () {
    todosCompletedView = new TodosCompletedView({
      collection: todosCollection
    });
    todosCompletedView.render();
    // $("#incompleted-tasks").append(todosView.el);
    $(".complete").append(todosCompletedView.el);
  }
});