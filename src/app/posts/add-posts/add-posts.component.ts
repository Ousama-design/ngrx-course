import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { appState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  constructor(private store:Store<appState>){}

  postForm!:FormGroup;

  ngOnInit(): void {
    this.postForm=new FormGroup({
      title:new FormControl(null,[Validators.required,Validators.minLength(6),]),
      description:new FormControl(null,[Validators.required,Validators.minLength(10)])
    })
  }

  onAddPost(){
    if(!this.postForm.valid){
      return;
    }

    const post:Post={
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }
    console.log(this.postForm.value.title)
    this.store.dispatch(addPost({post}))
  }

  showDescriptionErrors(){
    const descriptionForm=this.postForm.get('description');
    
    if(descriptionForm?.touched && !descriptionForm.valid){
      if(descriptionForm.errors?.['required']){
        return "Description is required";
      }
      if(descriptionForm.errors?.['minlength']){
        return "Description should be of minimum 10 characters"
      }
    }
    return;
  }

}
