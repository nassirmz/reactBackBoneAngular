var TodosCollection = Backbone.Collection.extend({
  url: '/todos',
  model: TodoItem,
});