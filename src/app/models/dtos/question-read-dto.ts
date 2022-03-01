import { QuestionComment } from "../question-comment";
import { QuestionRating } from "../Question-rating";
import { QuestionTag } from "../question-tag";
import { Tag } from "../Tag";

export interface QuestionReadDto {

    id: number;
    title: string;
    description: string;
    userId: number;
    tags: Tag[];
    questionComments: QuestionComment[];
    questionRatings: QuestionRating[];
    questionTags: QuestionTag[];
    
    
}