import { Component, h } from '@stencil/core';

// let landingTagLine: string = '';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
          <div style={{minHeight: '75vh'}} class="p-40px flex flex-col justify-center items-center w-full">
            <header-logo></header-logo>
            <h1 class="p-40px w-2/3 text-center" style={{fontSize: "48px"}}><i>Hello!</i> We’re the design team at Addepar. We work together to create intuitive <i>experiencess</i> for wealth management firms.</h1>
            <h2 class="w-1/2 text-center" style={{paddingTop: '53px', fontSize: '18px'}}>We believe in designing for humans, simplifying complexity, priotizing clearly, and making data accessible.</h2>
          </div>
        <landing-section>
          <div class="bg-seafoam flex flex-col" style={{minHeight: '75vh', paddingTop: '10vh'}}>
            <div class="flex justify-center"><team-header></team-header></div>
            <team-carousel></team-carousel>
          </div>
        </landing-section>
      </div>
    );
  }
}
