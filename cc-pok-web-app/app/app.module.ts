import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        EmployeeComponent
    ],
    providers: [
        EmployeeService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}