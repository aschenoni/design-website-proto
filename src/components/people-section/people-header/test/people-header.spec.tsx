import { newSpecPage } from '@stencil/core/testing';
import { PeopleHeader } from '../people-header';

describe('people-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeopleHeader],
      html: `<people-header></people-header>`,
    });
    expect(page.root).toEqualHtml(`
      <people-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </people-header>
    `);
  });
});
