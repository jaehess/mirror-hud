import Ember from 'ember';
import LiveComponentMixin from 'mirror-hud/mixins/live-component';
import { module, test } from 'qunit';

module('Unit | Mixin | live component');

// Replace this with your real tests.
test('it works', function(assert) {
  let LiveComponentObject = Ember.Object.extend(LiveComponentMixin);
  let subject = LiveComponentObject.create();
  assert.ok(subject);
});
