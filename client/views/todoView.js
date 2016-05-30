var TodoView = Backbone.View.extend({
  initialize: function () {
    this.model.on('change input', this.render, this);
  },
  events: {
    'change input': 'changeCompleted'
  },
  tagName: 'li',
  changeCompleted: function () {
    this.model.changeCompleted();
  },
  template: _.template('<input type="checkbox" <% if(completed) print("checked") %>>' + '<label><%= task %></label>' + '<input type="text"><button class="edit">Edit</button><button class="delete">Delete</button'),
  render: function () {
    var attr = this.model.toJSON();
    this.$el.html(this.template(attr));
    if(attr.completed) {
      $('#completed-tasks').append(this.el);
    }
    else {
      $('#incompleted-tasks').append(this.el);
    }
  }
});



