import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationsService} from "./configurations.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private appConfig: ConfigurationsService, private httpClient: HttpClient) {

  }

  logIn(loginData: any) {
    console.log(loginData)
    return this.httpClient.post(`${this.appConfig.getApiUrl()}/auth/login`, loginData);
  }

  register(registerData: any) {
    console.log(registerData)
    return this.httpClient.post(`${this.appConfig.getApiUrl()}/auth/register`, registerData);
  }
}
