import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'people-header',
  styleUrl: 'people-header.css',
  shadow: true,
})
export class PeopleHeader {

  render() {
    return (
      <Host>
        <h1 class="text-xl font-serif">
          <slot></slot>
        </h1>
      </Host>
    );
  }

}
