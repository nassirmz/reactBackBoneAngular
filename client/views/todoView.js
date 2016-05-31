var TodoView = Backbone.View.extend({
  initialize: function () {
    this.model.on('change:task', this.render, this);
    this.model.on('destroy', this.removeItem, this);
  },
  events: {
    'change input:checkbox': 'changeCompleted',
    'click .delete': 'deleteTask',
    'click .edit': 'changeToEditMode',
    'click .save': 'editTask'
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
    this.$el.find('.edit').addClass('save').removeClass('edit').text('save');
    this.$el.find(':text').val(this.model.get('task'));
  },
  editTask: function () {
    var newValue = this.$el.find(':text').val();
    console.log(newValue);
    this.model.set({ task: newValue});
    this.$el.removeClass('editMode');
    this.$el.find('.edit').removeClass('save').addClass('.edit').text('edit');
    this.model.save();
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



