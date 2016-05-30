var TodoView = Backbone.View.extend({
  initialize: function () {
    this.model.on('change input:checkbox', this.render, this);
    this.model.on('destroy', this.removeItem, this);
  },
  events: {
    'change input:checkbox': 'changeCompleted',
    'click .delete': 'deleteTask',
    'click .edit': 'changeToEditMode',
  },
  tagName: 'li',
  changeCompleted: function () {
    this.model.changeCompleted();
  },
  deleteTask: function () {
    this.model.deleteTask();
  },
  removeItem: function () {
    this.$el.remove();
  },
  changeToEditMode: function () {
    this.$el.addClass('editMode');
    this.$el.find('.edit').addClass('save').text('save');
    this.$el.find(':text').val(this.model.get('task'));
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



