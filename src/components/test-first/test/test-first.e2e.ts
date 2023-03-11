import { newE2EPage } from '@stencil/core/testing';

describe('test-first', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-first></test-first>');

    const element = await page.find('test-first');
    expect(element).toHaveClass('hydrated');
  });
});
