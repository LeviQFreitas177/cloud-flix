import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cloud-flix';

  menuOpened = false;

  setMenuState(state: boolean) {
    this.menuOpened = state
  }

  closeMenu() {
    this.menuOpened = false;
  }
}
