import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  getEmployee(): Observable<any> {
    return this._http.get('http://localhost:8000/api/userdata')
  }

  postEmployee(data:any): Observable<any> {
    return this._http.post('http://localhost:8000/api/userdata',data)
  }

  putEmployee(id:any , data:any): Observable<any> {
    return this._http.put(`http://localhost:8000/api/userdata/${id}`,data)
  }

  deleteEmployee(id:any): Observable<any> {
    return this._http.delete(`http://localhost:8000/api/userdata/${id}`)
  }

}
