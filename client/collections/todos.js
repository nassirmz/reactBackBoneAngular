var TodosCollection = Backbone.Collection.extend({
  url: '/todos'
});

var todosCollection = new TodosCollection();
todosCollection.fetch({
  success: function () {
    console.log(todosCollection);
  },
  error: function () {
    console.error('Failed to fetch');
  }
});

console.log(todosCollection);