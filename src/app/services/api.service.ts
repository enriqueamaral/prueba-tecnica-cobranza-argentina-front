import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/api/v1';

  getUrl() {
    return this.baseUrl;
  }

}