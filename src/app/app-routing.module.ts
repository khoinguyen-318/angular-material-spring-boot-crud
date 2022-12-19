import { ListFormComponent } from './components/list-form/list-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'add', component: AddFormComponent },
  { path: 'edit/:id', component: EditFormComponent },
  { path: 'list', component: ListFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
