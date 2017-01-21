import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    moduleId: module.id,
    selector: 'cc-employee',
    templateUrl: './employee.component.html',
    styleUrls: [
        'employee.component.css'
    ]
})
export class EmployeeComponent implements OnInit {
    selectedEmployee: Employee;
    employees: Employee[];

    constructor(
        private employeeService: EmployeeService,
        private router: Router) { }

    ngOnInit(): void {
        this.getEmployees();
    }

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    }

    getEmployees(): void {
        this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedEmployee.employeeID]);
    }

    add(name: string): void {

        if (!name) { return; }

        this.employeeService.create(name, "qqq")
            .subscribe(employee => {
                this.employees.push(employee);
                this.selectedEmployee = null;
            });
    }

    delete(employee: Employee): void {
        this.employeeService
            .delete(employee.employeeID)
            .then(() => {
                this.employees = this.employees.filter(e => e !== employee);
                if (this.selectedEmployee === employee) { this.selectedEmployee = null; }
            })
    }
}