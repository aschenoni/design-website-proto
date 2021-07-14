import { newE2EPage } from '@stencil/core/testing';

describe('people-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<people-header></people-header>');

    const element = await page.find('people-header');
    expect(element).toHaveClass('hydrated');
  });
});
