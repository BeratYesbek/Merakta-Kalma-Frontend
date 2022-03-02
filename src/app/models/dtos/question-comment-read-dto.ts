import { QuestionComment } from "../question-comment";
import { User } from "../user";

export interface QuestionCommentReadDto
{
    comment : QuestionComment;
    user : User;
    dislikeCount: number;
    likeCount: number;
}