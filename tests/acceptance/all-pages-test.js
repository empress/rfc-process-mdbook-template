import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | all pages', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting all pages', async function (assert) {
    assert.expect(0);

    await visit('/');

    let store = this.owner.lookup('service:store');
    let toc = store.peekRecord('toc', 'rfcs');

    for (let id of toc.links) {
      await visit(`/id/${id}`);
    }
  });
});
