import Ember from 'ember';
import moment from 'moment';

const {
  Controller,
  run:{ bind: runBind },
  set
} = Ember;

export default Controller.extend({
  interval: 1000,

  init() {
    this._setMoment();
    setInterval(runBind(this, this._setMoment), 1000);
  },

  _setMoment() {
    set(this, 'model', moment());
  }
});
