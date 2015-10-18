import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      var post = this.get('store').createRecord('post', {
        title: this.get('title'),
        body: this.get('content')
      });

      post.save();
    },
    cancel() {
    }
  }
});
