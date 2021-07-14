import { Component, Host, h } from '@stencil/core';
import Glide from '@glidejs/glide';

let people = [
  person('Angel Ng', 'Principal Product Designer', 'Brooklyn, NY', 'Obsessive plant mom, mountain person, and spoon carver.'),
  person('Olivia Phelan', 'Creative Director', 'New York, NY', 'This section is about Olivia'),
  person('Madison Stephens', 'Content Designer', 'Brooklyn, NY', 'Fan of meditation, the earth, and all things spooky.'),
  person('Arth Shah', 'Product Design Intern', 'Austin, TX', 'I like yellow, japanese streetwear, and playing Smash Bros :)'),
  person('Austin Joyner', 'Design System Engineer', 'New York, NY', 'This is a section about Austin')
]
function person(name, role, location, about) {
  return {name, role, location, about}
};

@Component({
  tag: 'team-carousel',
  styleUrl: 'team-carousel.css',
  shadow: true,
})
export class TeamCarousel {

  componentDidLoad () {
    new Glide('.glide').mount();
  }
  render() {
    return (
      <Host>
        <div class="flex overflow-x-auto" style={{marginBottom: '-10vh'}}>
          <div class="flex bg-seafoam team-section">{
            people.map(person => <personal-bio name={person.name} role={person.role} location={person.location}>{person.about}</personal-bio>)
          }</div>
          <div class="flex bg-orange team-section">{
            people.map(person => <personal-bio name={person.name} role={person.role} location={person.location}>{person.about}</personal-bio>)
          }</div>
          <div class="flex bg-yellow team-section">{
            people.map(person => <personal-bio name={person.name} role={person.role} location={person.location}>{person.about}</personal-bio>)
          }</div>

        </div>
      </Host>
    );
  }

}
