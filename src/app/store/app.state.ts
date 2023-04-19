import { counterReducer } from "../counter/state/counter.reducer";
import { counterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { postsState } from "../posts/state/posts.state";

export interface appState{
    counter:counterState;
    posts:postsState;
}

export const appReducer={
    counter:counterReducer,
    posts:postsReducer
}