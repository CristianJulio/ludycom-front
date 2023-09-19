import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AreaService {
  private URL = 'http://localhost:3000/api/v1/areas';

  constructor(private http: HttpClient) {}

  getAreas() {
    return this.http.get<any>(this.URL);
  }

  createArea(areaBody: any) {
    return this.http.post<any>(this.URL, areaBody)
  }

  deleteArea(areaCode: number) {
    return this.http.delete(`${this.URL}/${areaCode}`)
  }
}
