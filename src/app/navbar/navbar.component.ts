import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  logo: string = 'Boutique';
  Language: string = 'en-Us';

  Changelanguage() {
    this.Language = this.Language == 'English' ? 'Arabic' : 'English';
  }
}
