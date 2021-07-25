import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
username:string
  constructor(private http:HttpClient) {
    console.log('service is now ready')
    this.username='mwaniki9322'
   }
   getPersonsInfo(){
    return this.http.get(`https://api.github.com/users/${this.username}?access_token?client_id= ${environment.apikey}`)
}
getPersonsRepos(){
  return this.http.get(`https://api.github.com/users/mwaniki9322/repos?access_token?client_id= ${environment.apikey}`)
}
updateProfile(username: string){
  this.username = username

}
}
