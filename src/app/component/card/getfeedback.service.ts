import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetfeedbackService {
  // private apiUrl = 'https://192.168.43.67:5401/api/Admin/feedbacks';
  private apiUrl = 'https://localhost:5001/api/Admin/feedbacks';

  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Accept': '*/*'
      });

      return this.http.get<any>(this.apiUrl, { headers }).pipe(
        catchError(this.handleError)
      );
    } else {
      console.error('Token not found in local storage');
      return throwError('Token not found in local storage');
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
