import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowContainerComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: FollowContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowRoutingModule {}
