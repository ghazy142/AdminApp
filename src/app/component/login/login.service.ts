import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface ILoginObj {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private apiUrl = 'https://localhost:5001/api/Account/login';
  private apiUrl = 'https://192.168.16.252:5401/api/Account/login';
  private httpOptions: any = {}; // Initialize httpOptions

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' // Adjust content type as per your API requirements
      })
    };
  }

  login(ownerObj: ILoginObj): Observable<any> {
    // const baseUrl = 'https://192.168.43.67:5401/api/Account/login';
    const baseUrl = 'https://localhost:5001/api/Account/login';
    const params = new HttpParams()
      .set('email', ownerObj.email)
      .set('passwd', ownerObj.password);
    // console.log(ownerObj.email, ownerObj.password);
    // console.log(params);

    return this.http
      .post(baseUrl, {}, { params, headers: this.httpOptions.headers })
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }
}
