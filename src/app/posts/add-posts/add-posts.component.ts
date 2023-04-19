import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  postForm!:FormGroup;

  ngOnInit(): void {
    this.postForm=new FormGroup({
      title:new FormControl(null,[Validators.required,Validators.minLength(6),]),
      description:new FormControl(null,[Validators.required,Validators.minLength(10)])
    })
  }

  onAddPost(){
    console.log(this.postForm);

    if(this.postForm.valid){
      return;
    }

    console.log(this.postForm.value);
    //console.log(this.postForm.value);
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
