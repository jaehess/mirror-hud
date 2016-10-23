import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  day: attr('number'),
  month: attr('number'),
  name: attr('string'),
  year: attr('number')
});
