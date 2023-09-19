import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'

@Injectable()
export class UserService {
    private URL = 'http://localhost:3000/api/v1/users'
    
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<any>(this.URL)
    }

    deleteUser(document_number: number) {
        return this.http.delete(`${this.URL}/${document_number}`)
    }
}