import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { decrement, increment, reset } from '../state/counter.actions';
import { appState } from 'src/app/store/app.state';
@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  
  constructor(private store:Store<appState>){

  }

  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());
  }

  onReset(){
    this.store.dispatch(reset());
  }
}
