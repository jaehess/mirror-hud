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
  preview: alias('data.daily.data'),
  today: alias('preview.0'),
  tomorrow: alias('preview.1'),

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
