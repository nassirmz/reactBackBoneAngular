var TodoView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<input type="checkbox" <%if (completed) { %>"checked" <%} %>>' + '<label><%= task %></label>' + '<input type="text"><button class="edit">Edit</button><button class="delete">Delete</button'),
  render: function () {
    var attr = this.model.toJSON();
    this.$el.html(this.template(attr));
  }
});



