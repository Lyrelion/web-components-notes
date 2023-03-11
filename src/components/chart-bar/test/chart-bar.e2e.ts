import { newE2EPage } from '@stencil/core/testing';

describe('chart-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<chart-bar></chart-bar>');

    const element = await page.find('chart-bar');
    expect(element).toHaveClass('hydrated');
  });
});
