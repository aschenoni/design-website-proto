import { newE2EPage } from '@stencil/core/testing';

describe('team-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<team-carousel></team-carousel>');

    const element = await page.find('team-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
