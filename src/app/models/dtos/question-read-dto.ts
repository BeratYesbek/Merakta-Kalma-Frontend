import { QuestionComment } from "../question-comment";
import { QuestionRating } from "../question-rating";
import { QuestionTag } from "../question-tag";
import { Tag } from "../Tag";
import { User } from "../user";

export interface QuestionReadDto {

    id: number;
    title: string;
    description: string;
    userId: number;
    user: User
    tags: Tag[];
    questionComments: QuestionComment[];
    rating: QuestionRating[];
    questionTags: QuestionTag[];
    
    
}