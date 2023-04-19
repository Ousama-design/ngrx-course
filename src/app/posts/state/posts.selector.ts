import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./posts.state";

const getPostsState=createFeatureSelector<postsState>('posts');

export const getPosts=createSelector(getPostsState,(state)=>{
    return state.posts;
})