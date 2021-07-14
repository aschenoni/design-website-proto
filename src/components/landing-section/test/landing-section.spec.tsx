import { newSpecPage } from '@stencil/core/testing';
import { LandingSection } from '../landing-section';

describe('landing-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LandingSection],
      html: `<landing-section></landing-section>`,
    });
    expect(page.root).toEqualHtml(`
      <landing-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </landing-section>
    `);
  });
});
