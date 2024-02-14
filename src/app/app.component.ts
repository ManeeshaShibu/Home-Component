import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; 


@Component({
  selector: 'app-root',
  template: `
  <main>
    <header class="brand-name">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    <i class="fas fa-home">Home</i>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`
})
export class AppComponent {
  title = 'Home-component';
}
