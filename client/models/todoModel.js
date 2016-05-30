var TodoItem = Backbone.Model.extend({
  urlRoot: '/todos/',
  changeCompleted: function () {
    if(this.get('completed')) {
      this.set({ 'completed': false });
    } else if(!this.get('completed')) {
      this.set({ 'completed': true });
    }
    this.save();
  },
  deleteTask: function () {
    this.destroy();
  },
  defaults: {
    completed: false
  }
});

