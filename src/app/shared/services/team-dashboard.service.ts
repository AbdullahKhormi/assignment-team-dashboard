import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamDashboardService {

  constructor(private http :HttpClient) { }
  getData(){
    return this.http.get('http://localhost:3000/teams')
  }
    postData(data:any){
    return this.http.post('http://localhost:3000/teams',data)
  }
    getDataById(id:any){
    return this.http.get(`http://localhost:3000/teams/${id}`)
  }
    updateData(id: any, data: any){
    return this.http.put(`http://localhost:3000/teams/${id}`,data)
  }
  delete(id:number){
    return this.http.delete(`http://localhost:3000/teams/${id}`)
  }
}
