import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option',
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
  @Input() name: string = ''
}
