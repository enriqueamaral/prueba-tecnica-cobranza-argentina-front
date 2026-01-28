import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private platformId = inject(PLATFORM_ID);
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(username: string, password: string): Observable<any> {

    return this.http
      .post<any>(`${this.apiUrl}/login`, {
        username,
        password
      })
      .pipe(
        tap(res => {

          if (this.isBrowser()) {
            localStorage.setItem('token', res.token);
            localStorage.setItem('user', res.username);
            localStorage.setItem('role', res.role);
          }

        })
      );
  }

  getToken(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem('token');
  }

  isLogged(): boolean {
    if (!this.isBrowser()) return false;
    return !!localStorage.getItem('token');
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }

  getUsername(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem('user');
  }

  getRole(): string | null {
    if (!this.isBrowser()) return null;
    return localStorage.getItem('role');
  }
}