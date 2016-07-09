var TodoView = Backbone.View.extend({
  initialize: function () {
    this.model.on('change:completed', this.render, this);
    this.model.on('destroy', this.removeItem, this);
    this.model.on('change:task', this.newTask, this);
  },
  events: {
    'change input:checkbox': 'changeCompleted',
    'click .delete': 'deleteTask',
    'click .edit': 'editTask'
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
  editTask: function () {
    var el = this.$el,
    inputText = el.find(':text'),
    editButton = el.find('.edit');
    model = this.model;
    if(!el.hasClass('editMode')) {
      el.addClass('editMode');
      editButton.text('Save');
      inputText.val(model.get('task'));
    }
    else {
      el.removeClass('editMode');
      model.set({ task: inputText.val() });
      editButton.text('Edit');
      model.save();
    }
  },
  newTask: function () {
    var attr = this.model.toJSON();
    this.$el.html(this.template(attr));
    return attr;
  },
  template: _.template('<input type="checkbox" <% if(completed) print("checked") %>>' + '<label><%= task %></label>' + '<input type="text"><button class="edit">Edit</button><button class="delete">Delete</button'),
  render: function () {
    var attr = this.newTask();
    if(attr.completed) {
      $('#completed-tasks').prepend(this.el);
    }
    else {
      $('#incompleted-tasks').prepend(this.el);
    }
  }
});
