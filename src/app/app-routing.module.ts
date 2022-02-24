import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionsComponent } from './components/questions/questions.component';

const routes: Routes = [

  { path: "", component: QuestionsComponent },
  { path: "question/create", component: QuestionAddComponent },
  { path: "questions", component: QuestionsComponent },
  { path: "questions/:id", component: QuestionDetailComponent },
  { path: "user/:username", component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
