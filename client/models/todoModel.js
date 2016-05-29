var TodoItem = Backbone.Model.extend({
  urlRoot: '/todos',
  defaults: {
    completed: false
  }
});

