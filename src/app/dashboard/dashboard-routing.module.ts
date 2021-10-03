import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
{path:'add/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
