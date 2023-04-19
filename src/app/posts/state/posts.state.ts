import { Post } from "src/app/models/posts.model"

export interface postsState{
    posts:Post[];
}

export const initialState:postsState = {
    posts: [
        {
            id: "1",
            title: "Sample title1",
            description: "Sample description1"
        },
        {
            id: "2",
            title: "Sample title2",
            description: "Sample description2"
        }
    ]
}