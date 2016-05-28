var TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<input type="checkbox" <%if (completed) { %>"checked" <%} %>>' + '<label><%= task %></label>' + '<input type="text"><button class="edit">Edit</button><button class="delete">Delete</button'),
  render: function () {
    var attr = this.model.toJSON();
    this.$el.html(this.template(attr));
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
    $("#incompleted-tasks").append(todoView.$el);
  },
  error: function () {
    console.log('Failed to fetch!');
  }
});

