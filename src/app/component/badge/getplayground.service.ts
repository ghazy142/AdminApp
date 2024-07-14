import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Playground } from './playground';
import { PlaygroundPicture } from './playgroundpicture';

@Injectable({
  providedIn: 'root'
})
export class GetplaygroundService {
  // private apiUrl = 'https://192.168.43.67:5401/api/Admin/playground';
  private apiUrl = 'https://localhost:5001/api/Admin/playground';

  constructor(private http: HttpClient) { }

  getPlaygroundById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      });
      const url = `${this.apiUrl}?id=${id}`;
      return this.http.get<{ playground: Playground, playgroundPictures: PlaygroundPicture[] }>(url, { headers }).pipe(
        map(response => {
          // Ensure playgroundPictures is always an array
          response.playground.playgroundPictures = response.playground.playgroundPictures || [];
          return response;
        })
      );
    } else {
      console.error('Token not found in local storage');
      return new Observable<Playground>(); // Or handle with throwError or similar
    }
  }
}
