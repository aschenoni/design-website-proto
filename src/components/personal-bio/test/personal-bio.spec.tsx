import { newSpecPage } from '@stencil/core/testing';
import { PersonalBio } from '../personal-bio';

describe('personal-bio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PersonalBio],
      html: `<personal-bio></personal-bio>`,
    });
    expect(page.root).toEqualHtml(`
      <personal-bio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </personal-bio>
    `);
  });
});
