import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddplaygroundService {
  // private apiUrl = 'https://192.168.43.67:5401/api/Admin/playground';
  private apiUrl = 'https://localhost:5001/api/Admin/playground';

  constructor(private http: HttpClient) { }

  acceptPlayground(playgroundId: number, isAccepted: boolean): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      });
      const url = `${this.apiUrl}?playgroundId=${playgroundId}&isAccepted=${isAccepted}`;
      return this.http.put(url, null, { headers });
    } else {
      console.error('Token not found in local storage');
      return new Observable<any>(); // Or handle with throwError or similar
    }
  }
}
