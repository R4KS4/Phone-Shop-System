import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondhandComponent } from './secondhand/secondhand.component';

const routes: Routes = [
  {
    path: '', component: SecondhandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondhandRoutingModule { }
