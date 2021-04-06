import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the nav bar', async function(assert) {

    await render(hbs`<NavBar />`);

    assert.dom('.menu').exists();
    assert.dom('.menu-index').exists();

  });
});
