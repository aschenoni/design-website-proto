import { newE2EPage } from '@stencil/core/testing';

describe('team-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<team-header></team-header>');

    const element = await page.find('team-header');
    expect(element).toHaveClass('hydrated');
  });
});
