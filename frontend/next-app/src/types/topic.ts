import { Comment } from "./comment";

export type Topic = {
    id: number;
    title: string;
    description: string;
    comments: Comment[];
}