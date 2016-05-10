var TodoItem = Backbone.Model.extend({
  urlRoot: '/todos'
});

var todoItem = new TodoItem({id: 1});
todoItem.fetch();