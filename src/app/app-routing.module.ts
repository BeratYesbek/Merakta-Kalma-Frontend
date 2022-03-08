import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/profile/user-profile/user-profile.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [

  { path: "", component: QuestionsComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
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
