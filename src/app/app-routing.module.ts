import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStageComponent } from './add-stage/add-stage.component';
import { ConsultStageComponent } from './consult-stage/consult-stage.component';

const routes: Routes = [
  {path:"consult" , component: ConsultStageComponent},
  {path :"add", component:AddStageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
