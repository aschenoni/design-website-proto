import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'personal-bio',
  styleUrl: 'personal-bio.css',
  shadow: true,
})
export class PersonalBio {
  @Prop() name: string;
  @Prop() role: string;
  @Prop() location: string;
  render() {

    return (
      <Host>
        <div class="m-40px">
          <img style={{minWidth: '200px'}} src="assets/people/person.jpg" alt="" />
          <div class="pt-40px bold">{this.name}</div>
          <div class="text-serif">{this.role} | {this.location}</div>
          <i><slot></slot></i>

        </div>
      </Host>
    );
  }

}
