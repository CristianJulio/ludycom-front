import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'

@Injectable()
export class UserService {
    private URL = 'http://localhost:3000/api/v1/users'
    
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<any>(this.URL)
    }

    createUser(userBody: any) {
        const { second_name, ...rest } = userBody

        if(!second_name) {
            return this.http.post(this.URL, rest)
        }
        
        return this.http.post(this.URL, userBody)
    }

    deleteUser(document_number: number) {
        return this.http.delete(`${this.URL}/${document_number}`)
    }
}