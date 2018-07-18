import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: '', component: MaincontentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
