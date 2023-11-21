import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(
      'http://localhost:3000/users',
      {observe: 'body', responseType: 'json'}
      );
  }
}
