import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { FramePagemponent } from './master/frame-page';
import { DraftComponent } from './draft/draft.component';

const routes: Routes = [
  {
    path: '',
    component: FramePagemponent,
    children: [
      {
        path: '',
        component: DraftComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
