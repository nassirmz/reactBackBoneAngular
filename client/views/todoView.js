var TodoView = Backbone.View.extend({
  render: function () {
    this.$el.html('<li>' + this.model.get('task') + '</li>');
    console.log(this.el);
    console.log(this.model);
  }
});

var  todoView;

todoItem.fetch({
  success: function () {
    todoView = new TodoView({
      model: todoItem
    });
    todoView.render();
    $("#incompleted-tasks").append(todoView.el);
  },
  error: function () {
    console.log('Failed to fetch!');
  }
});

