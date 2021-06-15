import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player, Activity } from '../Player';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//   }),
// };
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiPlayerUrl = 'http://localhost:8080/api/players/';
  private apiActivityUrl = 'http://localhost:8080/api/activities/';

  constructor(private http: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiPlayerUrl);
  }

  getActivity(id, timestamp): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.apiActivityUrl+id+'/'+timestamp);
  }

}
