import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalscoreComponent } from './finalscore/finalscore.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PartiesComponent } from './parties/parties.component';
import { QuestionsComponent } from './questions/questions.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'', component: PartiesComponent},
  {path:'login', component: LoginComponent},
  {path:'inscription', component: SignupComponent},
  {path:'nav', component: NavComponent},
  {path:'parties', component: PartiesComponent},
  {path:'questions', component: QuestionsComponent},
  {path:'fin', component: FinalscoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
