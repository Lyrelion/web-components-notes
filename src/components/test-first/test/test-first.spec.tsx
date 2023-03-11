import { newSpecPage } from '@stencil/core/testing';
import { TestFirst } from '../test-first';

describe('test-first', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestFirst],
      html: `<test-first></test-first>`,
    });
    expect(page.root).toEqualHtml(`
      <test-first>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-first>
    `);
  });
});
