import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

    private EmployeeUrl = 'http://localhost:51321/api/employee'; //URL to web api
    private headers = new Headers({ 'Content-Type': 'appplication/json' });

    constructor(private http: Http) { }

    getHero(id: number): Promise<Hero> {
        const url = `${this.EmployeeUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.EmployeeUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(resolve, 2000))
            .then(() => this.getHeroes());
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.EmployeeUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.EmployeeUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.EmployeeUrl}/${id}`;

        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error('An Error occured', error); //for demo purposes only
        return Promise.reject(error.message || error);
    }
}