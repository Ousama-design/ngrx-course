import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  @Output() increment=new EventEmitter<number>();
  @Output() decrement=new EventEmitter<number>();
  @Output() reset=new EventEmitter<number>();

  onIncrement(){
    this.increment.emit();
  }

  onDecrement(){
    this.decrement.emit();
  }

  onReset(){
    this.reset.emit();
  }
}
