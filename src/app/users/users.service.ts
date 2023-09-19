import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'

@Injectable()
export class UserService {
    private URL = 'http://localhost:3000/api/v1/users'
    
    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<any>(this.URL)
    }

    getOneUser(document_number: number) {
        return this.http.get<any>(`${this.URL}/${document_number}`)
    }

    getCount() {
        return this.http.get<any>(`${this.URL}/count`)
    }

    createUser(userBody: any) {
        const { second_name, ...rest } = userBody

        if(!second_name) {
            return this.http.post(this.URL, rest)
        }
        
        return this.http.post(this.URL, userBody)
    }

    updateUser(userBody: any, document_number: number) {
        return this.http.put<any>(`${this.URL}/${document_number}`, userBody)
    }

    deleteUser(document_number: number) {
        return this.http.delete(`${this.URL}/${document_number}`)
    }
}