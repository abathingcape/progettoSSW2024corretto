import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root' //any è deprecata
})
export class DbService {
  key: string = "b8097992";
  URLget: string= "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?key="+this.key;
  URLset: string= "https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/set?key="+this.key;
  
  constructor() { }
  public getArchivio(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.URLget,
      crossDomain: true
    });
  }
  public setArchivio(aggiornamento: string): Observable<AjaxResponse<any>>{
      return ajax({
        method: 'POST',
        url: this.URLset,
        crossDomain: true,
        body: aggiornamento,
      });
    }

  }