import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { appState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {

  postData!:Post[];
  posts!: Observable<Post[]>;
  postsSubscription!: Subscription;
  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
       this.posts=this.store.select(getPosts);
      // this.postsSubscription=this.store.select(getPosts)
      // .subscribe((postData)=>{
      //     console.log(postData);
      //     this.postData=postData;
      // })
    }
}
