var AddTodoView = Backbone.View.extend({
  events: {
    'click .add': 'addTodo'
  },
  addTodo: function () {
    this.model.set({task: this.$el.find(':text').val()});
    this.$el.find(':text').val('');
    this.model.create();
  },
  template: _.template('<input id="new-task" type="text">' + '<button class="add">Add</button>'),
  render: function () {
    this.$el.html(this.template());
    $('p').append(this.$el);
  }
});

var addTodoView = new AddTodoView({
  model: todoItem
});
addTodoView.render();
