import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaborComponent } from './containers/labor/labor.component';

const routes: Routes = [
  {
    path: '',
    component: LaborComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaborRoutingModule {}
