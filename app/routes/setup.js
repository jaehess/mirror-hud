import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let record = this.store.peekRecord('bag', 1);

    if (!record) {
      record = this.store.createRecord('bag', {
        id: 1
      });
    }

    return record;
  },

  actions: {
    save(record) {
      return record.save();
    }
  }
});
