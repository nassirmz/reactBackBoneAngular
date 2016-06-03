var AddTodoView = Backbone.View.extend({
  events: {
    'click .add': 'addTodo'
  },
  addTodo: function () {
    var newTodo = new TodoItem({task: this.$el.find(':text').val()});
    newTodo.save();
    this.collection.add(newTodo);
    this.$el.find(':text').val('');
  },
  template: _.template('<input id="new-task" type="text">' + '<button class="add">Add</button>'),
  render: function () {
    this.$el.html(this.template());
    $('p').append(this.$el);
  }
});
