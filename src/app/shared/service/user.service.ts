import { Config } from './../config';
import { User } from './../../model/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${Config.api}/users`);
    }

    getById(id: number) {
        return this.http.get(`${Config.api}/users/${id}`);
    }

    register(user: User) {
        return this.http.post(`${Config.api}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${Config.api}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${Config.api}/users/${id}`);
    }
}
