import { newSpecPage } from '@stencil/core/testing';
import { TeamCarousel } from '../team-carousel';

describe('team-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeamCarousel],
      html: `<team-carousel></team-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <team-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </team-carousel>
    `);
  });
});
