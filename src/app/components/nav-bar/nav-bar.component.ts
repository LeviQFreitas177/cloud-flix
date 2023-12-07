import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
  @Input() opened = false;

  options = [
    { name: "Search", link: "/search"},
  ]

  toggle() {
    this.opened = !this.opened;
    this.menuToggle.emit(this.opened);
  }


}
