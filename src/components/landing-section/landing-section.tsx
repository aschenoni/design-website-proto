import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'landing-section',
  styleUrl: 'landing-section.css',
  shadow: true,
})
export class LandingSection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
