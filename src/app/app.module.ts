import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './employee/emp-details/emp-details.component';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';    

@NgModule({
  declarations: [
    AppComponent,EmpDetailsComponent, AddEmployeeComponent, ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ProgressbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
