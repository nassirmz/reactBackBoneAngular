var TodoView = Backbone.View.extend({
  render: function () {
    console.log(this.model);
    $(this.el).html('<li>' + this.model.get('task') + '</li>');
  }
});
var  todoView = new TodoView({
  model: todoItem
});

todoView.render();
