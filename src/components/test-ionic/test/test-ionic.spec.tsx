import { newSpecPage } from '@stencil/core/testing';
import { TestIonic } from '../test-ionic';

describe('test-ionic', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestIonic],
      html: `<test-ionic></test-ionic>`,
    });
    expect(page.root).toEqualHtml(`
      <test-ionic>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-ionic>
    `);
  });
});
