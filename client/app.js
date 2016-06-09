var TodoApp =  Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function () {
    var self = this;
    self.todosCollection = new TodosCollection();
    self.todosCollection.fetch({
      success: function () {
        self.todosView = new TodosView({
          collection: self.todosCollection
        });
        self.addTodoView = new AddTodoView({
          collection: self.todosCollection
        });
        self.addTodoView.render();
        self.todosView.render();
      }
    });
  },
  initialize: function () {

  }
});
var todoApp = new TodoApp();
Backbone.history.start({pushState: true });