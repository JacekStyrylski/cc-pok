import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
    moduleId: module.id,
    selector: 'cc-employee',
    template: `
        <button>Click Me</button>
    `
})
export class EmployeeComponent implements OnInit {
    selectedemployee: Employee;
    employees: Employee[];

    constructor(
        private employeeService: EmployeeService,
        private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(employee: Employee): void {
        this.selectedemployee = employee;
    }

    getHeroes(): void {
        this.employeeService.get().then(heroes => this.heroes = heroes);
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    add(name: string): void {
        name = name.trim();

        if (!name) { return; }

        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
    }
}