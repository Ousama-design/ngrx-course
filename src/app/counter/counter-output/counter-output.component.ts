import { Component,OnInit,OnDestroy } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { appState } from 'src/app/store/app.state';
import { ApiService } from 'src/app/http/api.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit,OnDestroy{
  
  counter:number=0;
  counterSubscription!:Subscription;
  //counter$?:Observable<{counter:number}>
  constructor(private store:Store<appState>, private api:ApiService){
  }  

  ngOnInit(){
		this.counterSubscription=this.store
    .select(getCounter)
    .subscribe((counter)=>{
      console.log('Counter observable is called')
	this.counter=counter;})

  //this.counter$=this.store.select('counter');
  //https://youtu.be/FWnv2YbCSlE
}

  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }

  get401(){
    this.api.get401().subscribe();
  }

  get403(){
    this.api.get403().subscribe();
  }

  get404(){
    this.api.get404().subscribe();
  }

  get503(){
    this.api.get503().subscribe();
  }
}
