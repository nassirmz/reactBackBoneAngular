var TodoItem = Backbone.Model.extend({
  urlRoot: '/todos',
  defaults: {
    completed: false
  }
});

var todoItem = new TodoItem({id: 1});
