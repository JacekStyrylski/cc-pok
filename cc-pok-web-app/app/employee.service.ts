import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Employee } from './employee';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EmployeeService {

    private EmployeeUrl = 'http://localhost:51321/api/employee'; //URL to web api
    private headers = new Headers({ 'Content-Type': 'appplication/json' });

    constructor(private http: Http) { }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    getEmployee(id: number): Observable<Employee> {
        const url = `${this.EmployeeUrl}/${id}`;

        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get(this.EmployeeUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(employee: Employee): Observable<Employee> {
        const url = `${this.EmployeeUrl}/${employee.employeeID}`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .put(url, JSON.stringify(employee), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    create(name: string, address: string): Observable<Employee> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(this.EmployeeUrl, { name: name, address: address }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(id: string): Promise<void> {
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