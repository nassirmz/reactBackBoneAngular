var TodosCollection = Backbone.Collection.extend({
  url: '/todos',
  model: TodoItem,
});
var todosCollection = new TodosCollection();