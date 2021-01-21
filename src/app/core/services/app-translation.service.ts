import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTranslationService {

  constructor(private http: HttpClient) { }
  getTranslation(language: any): Observable<any> {
    console.log("service");
    let languageUrl: string = '';
    language = language || 'english';
    languageUrl = '/assets/languages/'+'usa' +'/'+ language + '.json';
    return this.http
      .get(languageUrl);
  }
}
