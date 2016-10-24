import Ember from 'ember';

export function formatTemperature(params) {
  let temp = Math.round(params[0]);

  return Ember.String.htmlSafe(`${temp}<i class="wi wi-degrees"></i>`)
}

export default Ember.Helper.helper(formatTemperature);
