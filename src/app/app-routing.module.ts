import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  SubmitComponent,
  DoneComponent,
  AdminComponent,
  AdminCreateComponent,
  AdminEditComponent,
  AdminReviewComponent,
  AdminReviewApplicationComponent,
} from './routes/routes';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'submit/:formID',
    component: SubmitComponent
  },
  {
    path: 'done/:formID',
    component: DoneComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/create',
    component: AdminCreateComponent
  },
  {
    path: 'admin/edit/:formID',
    component: AdminEditComponent
  },
  {
    path: 'admin/review/:formID',
    component: AdminReviewComponent
  },
  {
    path: 'admin/review/:formID/:username',
    component: AdminReviewApplicationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }