import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-option',
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
  @Input() name: string = ''
  @Input() value: string = ''

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>()

  clickButton() {
    if (this.onClick){
      this.onClick.emit(this.value)
    }
  }
}
