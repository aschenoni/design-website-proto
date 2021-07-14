import { newE2EPage } from '@stencil/core/testing';

describe('personal-bio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<personal-bio></personal-bio>');

    const element = await page.find('personal-bio');
    expect(element).toHaveClass('hydrated');
  });
});
