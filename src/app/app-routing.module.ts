import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmpDetailsComponent } from './employee/emp-details/emp-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee/details', pathMatch: 'full'},
  { path: 'employee/details', component: EmpDetailsComponent },
  { path: 'employee/create', component: AddEmployeeComponent },
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
