import { newE2EPage } from '@stencil/core/testing';

describe('landing-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<landing-section></landing-section>');

    const element = await page.find('landing-section');
    expect(element).toHaveClass('hydrated');
  });
});
