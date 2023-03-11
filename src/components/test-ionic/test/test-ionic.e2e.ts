import { newE2EPage } from '@stencil/core/testing';

describe('test-ionic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-ionic></test-ionic>');

    const element = await page.find('test-ionic');
    expect(element).toHaveClass('hydrated');
  });
});
