import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class TranslateService {

  private _url: string;
  private _key: string

  constructor(private _http: HttpClient ) {

    this._url = GLOBAL.url;
    this._key = GLOBAL.key
  }


  postTranslateText( data : any) : Observable<any> {

      let prueba = data.textTotranslate;
      let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
      let params = "";
      return this._http.post(`${this._url}?q=${prueba}&target=${data.target.language}&key=${this._key}`, params, {headers: headers});

  }


  getTargetLang() : Observable<any>{
      return this._http.get(`${this._url}/languages?key=${this._key}`);
  }



}
