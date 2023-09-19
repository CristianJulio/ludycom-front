import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AreaService {
  private URL = 'http://localhost:3000/api/v1/areas';

  constructor(private http: HttpClient) {}

  getAreas() {
    return this.http.get<any>(this.URL);
  }

  getCount() {
    return this.http.get<any>(`${this.URL}/count`)
  }

  getOneArea(areaCode: number) {
    return this.http.get<any>(`${this.URL}/${areaCode}`)
  }

  createArea(areaBody: any) {
    return this.http.post<any>(this.URL, areaBody)
  }

  updateArea(areaCode: number, areaBody: any) {
    return this.http.put(`${this.URL}/${areaCode}`, areaBody)
  }

  deleteArea(areaCode: number) {
    return this.http.delete(`${this.URL}/${areaCode}`)
  }
}
