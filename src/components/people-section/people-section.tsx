import { Component, Host, h } from '@stencil/core';

import peopleSource from './people';

@Component({
  tag: 'people-section',
  styleUrl: 'people-section.css',
  shadow: true,
})
export class PeopleSection { 
  render() {
    return (
      <Host> 
        <slot></slot>
        {peopleSource.map(person => (<div>{person.name}</div>))}
      </Host>
    );
  }
}
