import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const addPost=createAction('addPostAction',props<{post:Post}>())

export const updatePost=createAction('updateAction',props<{post:Post}>())