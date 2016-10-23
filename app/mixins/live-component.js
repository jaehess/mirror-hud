import Ember from 'ember';

const {
  getWithDefault,
  Mixin,
  run: { bind: runBind }
} = Ember;

export default Mixin.create({
  didInsertElement() {
    if (this._timer) {
      this._clearTime();
    }

    let interval = parseInt(getWithDefault(this, 'interval', (1000 * 60 * 5)), 10);
    this._timer = setInterval(() => {
      runBind(this, this.recompute());
    }, interval);
  },

  recompute() { },

  willDestroyElement() {
    this._clearTimer();
  },

  // Private
  _clearTimer() {
    clearInterval(this._timer);
  }
});
