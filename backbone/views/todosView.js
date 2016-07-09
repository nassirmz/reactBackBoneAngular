var TodosView = Backbone.View.extend({
  template: _.template(
    '<h3>Todo</h3><ul id="incompleted-tasks"></ul>' +
    '<h3>Completed</h3><ul id="completed-tasks"></ul>'),
  initialize: function () {
    this.collection.on('add', this.renderTodos, this);
  },
  render: function () {
    this.$el.html(this.template());
    $('.container').append(this.$el);
    this.collection.forEach(this.renderTodos, this);
  },
  renderTodos: function (todoItem) {
    var todoView = new TodoView({
      model:todoItem
    });
    todoView.render();
  }
});


