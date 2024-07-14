import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingService {
  // private apiUrl = 'https://192.168.43.67:5401/api/Admin/pending-playgrounds';
  private apiUrl = 'https://localhost:5001/api/Admin/pending-playgrounds';

  constructor(private http: HttpClient) { }

  getPendingPlaygrounds(): Observable<any> {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');

    // Check if token is present
    if (token) {
      // Set headers with authorization token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      });

      // Make HTTP GET request with headers
      return this.http.get<any>(this.apiUrl, { headers });
    } else {
      // Handle case where token is not present (e.g., redirect to login)
      console.error('Token not found in local storage');
      // Example of handling this scenario, you may want to implement your own logic
      return new Observable(); // Or handle with throwError or similar
    }
  }
  getPlaygroundById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      });
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<any>(url, { headers });
    } else {
      console.error('Token not found in local storage');
      return new Observable();
    }
  }
}
