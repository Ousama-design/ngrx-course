import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostListsComponent } from './posts/post-lists/post-lists.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', 
    loadChildren:()=>import('./counter/counter.module').then((m)=>m.CounterModule)
  },
  {
    path: 'posts',
    component: PostListsComponent,
    children: [
      { path: 'add', component: AddPostsComponent },
      { path: 'edit/:id', component: EditPostsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
