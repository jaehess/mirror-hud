import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({

  model() {
    return RSVP.hash({
      bag: this.modelFor('application'),
      birthdays: this.store.findAll('birthday'),
      chores: this.store.findAll('chore')
    });
  },

  setupController(controller, model) {
    controller.setProperties(model);
  },

  actions: {
    seed(type, attributes) {
      let record = this.store.createRecord(type, attributes);

      if (record) {
        return record.save();
      }
    }
  }

});
