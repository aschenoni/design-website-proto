import { newE2EPage } from '@stencil/core/testing';

describe('people-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<people-section></people-section>');

    const element = await page.find('people-section');
    expect(element).toHaveClass('hydrated');
  });
});
