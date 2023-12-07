import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() cover: string | undefined;
  @Input() name: string | undefined;
  @Input() relevance: string | undefined;
  @Input() age: string | undefined;
  @Input() parts: string | undefined;
  @Input() categories: string | undefined;
  @Input() link: string | undefined;
}
