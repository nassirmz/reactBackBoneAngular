var UserModel = Backbone.Model.extend({
  urlRoot: '/users/',
  saveUser: function () {
    if(this.get('password').length && this.get('username').length) {
      this.save();
    }
  }
});