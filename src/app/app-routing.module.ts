import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
 // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'emplolyee', component: EmployeeComponent },
  { path: 'emplolyee-details', component: EmployeeDetailsComponent },
  { path: 'stocks', component: StocksComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
