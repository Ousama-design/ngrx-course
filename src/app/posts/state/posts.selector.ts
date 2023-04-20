import { createFeatureSelector, createSelector ,props} from "@ngrx/store";
import { postsState } from "./posts.state";

const getPostsState=createFeatureSelector<postsState>('posts');

export const getPosts=createSelector(getPostsState,(state)=>{
    return state.posts;
})

export const getPostById=createSelector(getPostsState,(state:any,props:any)=>{
    return state.posts.find((post:any)=>post.id===props.id)
})