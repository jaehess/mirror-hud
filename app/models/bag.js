import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  version: attr('number', { defaultValue: 0 }), //0
  darkSkyApiKey: attr('string'), //afbd42398b5e35ae2823516285416715
  geoLatitude: attr('string', { defaultValue: '37.2242440' }), //37.224244
  geoLongitude: attr('string', { defaultValue: '-121.7635650' }) //-121.763565
});
