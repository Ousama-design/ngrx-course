import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit,OnDestroy {

  post!:Post;
  postForm!:FormGroup;
  postSubscription!:Subscription;
  
  constructor(private route:ActivatedRoute,private store:Store<appState>){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      //console.log(params.get('id'));
      const id=params.get('id');
      this.postSubscription=this.store.select(getPostById,{id}).subscribe((data)=>{
        this.post=data;
        this.createForm();
      })
    })
  }

  ngOnDestroy(): void {
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }

  onUpdatePost(){
      
  }

  createForm(){
    this.postForm=new FormGroup({
      title:new FormControl(this.post.title,[Validators.required,Validators.minLength(6)]),
      description:new FormControl(this.post.description,[Validators.required,Validators.minLength(10)])
    })
  }
}
