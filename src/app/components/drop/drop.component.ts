import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss']
})
export class DropComponent {

  @Input() title: string | undefined;


  isDropdownOpen: boolean = false;
  selectedOption: string = '';

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

}
