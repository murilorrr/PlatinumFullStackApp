import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaniumCreateProposeFormComponent } from './planium-create-propose-form/planium-create-propose-form.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Criar Proposta'  },
    title: 'Planium Proposta FORM',
    component: PlaniumCreateProposeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
