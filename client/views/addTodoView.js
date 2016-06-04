var AddTodoView = Backbone.View.extend({
  events: {
    'click .add': 'addTodo'
  },
  addTodo: function () {
    var textInput = this.$el.find(':text');
    var newTodo = new TodoItem({task: textInput.val()});
    newTodo.save();
    this.collection.add(newTodo);
    textInput.val('');
  },
  template: _.template('<input id="new-task" type="text">' + '<button class="add">Add</button>'),
  render: function () {
    var el = this.$el;
    el.html(this.template());
    $('p').append(el);
  }
});
