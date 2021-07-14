import { newSpecPage } from '@stencil/core/testing';
import { PeopleSection } from '../people-section';

describe('people-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeopleSection],
      html: `<people-section></people-section>`,
    });
    expect(page.root).toEqualHtml(`
      <people-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </people-section>
    `);
  });
});
