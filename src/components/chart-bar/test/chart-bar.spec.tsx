import { newSpecPage } from '@stencil/core/testing';
import { ChartBar } from '../chart-bar';

describe('chart-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChartBar],
      html: `<chart-bar></chart-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <chart-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </chart-bar>
    `);
  });
});
