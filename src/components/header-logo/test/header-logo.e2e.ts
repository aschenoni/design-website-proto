import { newE2EPage } from '@stencil/core/testing';

describe('header-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<header-logo></header-logo>');

    const element = await page.find('header-logo');
    expect(element).toHaveClass('hydrated');
  });
});
