import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationsService {
  private apiUrl: string = 'http://localhost:8081/api';
  private appName: string = 'Travel Agency';
  private appOwner: string = 'Minzat Daniel';
  private appLogo: string =
    'https://static.vecteezy.com/system/resources/thumbnails/005/183/355/small_2x/travel-agency-logo-template-holiday-logo-template-beach-logo-concept-vector.jpg';

  constructor() {}

  public getApiUrl() {
    return this.apiUrl;
  }

  public getAppName() {
    return this.appName;
  }

  public getAppOwner() {
    return this.appOwner;
  }

  public getAppLogo() {
    return this.appLogo;
  }
}
