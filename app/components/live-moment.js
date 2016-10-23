import Ember from 'ember';
import moment from 'moment';
import LiveComponent from '../mixins/live-component';

const {
  Component,
  set
} = Ember;

export default Component.extend(LiveComponent, {
  interval: 1500,
  data: moment(),

  recompute() {
    set(this, 'data', moment());
  },
});
