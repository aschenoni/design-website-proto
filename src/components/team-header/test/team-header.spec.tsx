import { newSpecPage } from '@stencil/core/testing';
import { TeamHeader } from '../team-header';

describe('team-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TeamHeader],
      html: `<team-header></team-header>`,
    });
    expect(page.root).toEqualHtml(`
      <team-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </team-header>
    `);
  });
});
