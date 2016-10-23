import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('live-birthdays', 'Integration | Component | live birthdays', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{live-birthdays}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#live-birthdays}}
      template block text
    {{/live-birthdays}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
