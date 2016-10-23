import Ember from 'ember';
import { task } from 'ember-concurrency';
import LiveComponent from '../mixins/live-component';

const {
  Component,
  computed: {
    alias,
    and,
    collect
  },
  computed,
  get,
  inject: { service },
  set
} = Ember;

export default Component.extend(LiveComponent, {
  ajax: service(),
  data: null,

  canFetchData: and('key', 'geolocation'),
  current: alias('data.currently'),
  geolocation: collect('latitude', 'longitude'),

  currentHour: computed('now', function() {
    return get(this, 'now').hour();
  }),

  preview: computed('currentHour', 'data.daily.data', function() {
    let hour = get(this, 'currentHour');

    if (hour <= 15) {
      return get(this, 'data.daily.data.0');
    } else if (hour >= 18) {
      return get(this, 'data.daily.data.1');
    }
  }),

  sunrise: computed('currentHour', 'data.daily.data', function() {

  }),

  recompute() {
    return get(this, 'fetchData').perform();
  },

  fetchData: task(function * () {
    if (get(this, 'canFetchData')) {
      let key = get(this, 'key');
      let location = get(this, 'geolocation').join(',');
      let url = `https://api.darksky.net/forecast/${key}/${location}`;

      yield get(this, 'ajax').request(url).then((response) => set(this, 'data', response));
    }
  }).on('init')

});
