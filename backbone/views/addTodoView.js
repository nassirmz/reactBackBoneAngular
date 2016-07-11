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
  template: _.template('<p><label className="addTodo-label">Add Item</label><input id="new-task" type="text">' + '<button class="add">Add</button></p>'),
  render: function () {
    var el = this.$el;
    el.html(this.template());
    $('.container').append(el);
  }
});
