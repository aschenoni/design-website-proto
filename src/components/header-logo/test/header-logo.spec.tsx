import { newSpecPage } from '@stencil/core/testing';
import { HeaderLogo } from '../header-logo';

describe('header-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderLogo],
      html: `<header-logo></header-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <header-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </header-logo>
    `);
  });
});
