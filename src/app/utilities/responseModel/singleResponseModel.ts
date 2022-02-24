import { ReponseModel } from "./responseModel";

export interface SingleResponseModel<T> extends ReponseModel {
    data: T
}