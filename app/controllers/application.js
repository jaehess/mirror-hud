import Ember from 'ember';

const {
  Controller,
  get,
  observer
} = Ember;

export default Controller.extend({

  versionDidChange: observer('model.version', function() {
    let version = get(this, 'model.version');

    if (version) {
      Ember.Logger.log('versionDidChange', version);
    }
  })

});
