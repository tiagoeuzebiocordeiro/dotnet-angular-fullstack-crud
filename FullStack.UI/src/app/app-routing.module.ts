import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeesComponent } from './components/employees/edit-employees/edit-employees.component';

const routes: Routes = [
  {
    path: '',  // type string, para ir para home eu quero ler o list employees
    component: EmployeesListComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
