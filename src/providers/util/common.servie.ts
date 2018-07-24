import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {async} from "rxjs/scheduler/async";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class CommonServie{
  private url: string = 'http://apis.data.go.kr/B553077/api/open/sdsc/';
  private result;
  constructor(public http: HttpClient,){

  }
  baroApi() {

// this.headers.append('Accept', 'text/xml');
// this.headers.append('Content-Type', 'text/xml');

    var queryParams = 'baroApi?' + encodeURIComponent('ServiceKey') + '=TztU36F%2FW%2FmBHdEf7%2BC2ztZDLtWtwik8brppbN8YzKLytXwT2jodh2hCR%2FSjIPBTOX9f3H%2BQynKwQWnEEjsCKQ%3D%3D';
    /* Service Key*/
    queryParams += '&' + encodeURIComponent('resId') + '=' + encodeURIComponent('upjong');
    /* 리소스를 식별하기 위한 id. */
    queryParams += '&' + encodeURIComponent('catId') + '=' + encodeURIComponent('large');
    /* 리소스를 식별하기 위한 id. */
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');
    /* 리소스를 식별하기 위한 id. */
//     this._http.get(url+queryParams, { "Headers" : this.headers })

    this.http.get(this.url + queryParams).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  storeListInRadius(radius,cx,cy){


    var queryParams = 'storeListInRadius?' + encodeURIComponent('ServiceKey') + '=TztU36F%2FW%2FmBHdEf7%2BC2ztZDLtWtwik8brppbN8YzKLytXwT2jodh2hCR%2FSjIPBTOX9f3H%2BQynKwQWnEEjsCKQ%3D%3D';
    /* Service Key*/
    queryParams += '&' + encodeURIComponent('radius') + '=' + encodeURIComponent(radius);
    /* 리소스를 식별하기 위한 id. */
    queryParams += '&' + encodeURIComponent('cx') + '=' + encodeURIComponent(cx);
    queryParams += '&' + encodeURIComponent('cy') + '=' + encodeURIComponent(cy);
    queryParams += '&' + encodeURIComponent('indsLclsCd') + '=' + encodeURIComponent('Q');
    queryParams += '&' + encodeURIComponent('indsMclsCd') + '=' + encodeURIComponent('Q12');
    /* 리소스를 식별하기 위한 id. */
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');
    /* 리소스를 식별하기 위한 id. */
//     this._http.get(url+queryParams, { "Headers" : this.headers })

     return this.http.get(this.url + queryParams).map(data => {

      this.result = data;
      console.log(JSON.stringify(data)) ;
      return  this.result;
    });

  }
  largeUpjongList(){

    var queryParams = 'largeUpjongList?' + encodeURIComponent('ServiceKey') + '=TztU36F%2FW%2FmBHdEf7%2BC2ztZDLtWtwik8brppbN8YzKLytXwT2jodh2hCR%2FSjIPBTOX9f3H%2BQynKwQWnEEjsCKQ%3D%3D';
    /* Service Key*/
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');

    return this.http.get(this.url + queryParams).map(data => {

      this.result = data;
      console.log(JSON.stringify(data)) ;
      return  this.result;
    });
  }
  middleUpjongList(indsLclsCd){

    var queryParams = 'middleUpjongList?' + encodeURIComponent('ServiceKey') + '=TztU36F%2FW%2FmBHdEf7%2BC2ztZDLtWtwik8brppbN8YzKLytXwT2jodh2hCR%2FSjIPBTOX9f3H%2BQynKwQWnEEjsCKQ%3D%3D';
    /* Service Key*/
    queryParams += '&' + encodeURIComponent('indsLclsCd') + '=' + encodeURIComponent(indsLclsCd);
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');


    return this.http.get(this.url + queryParams).map(data => {

      this.result = data;
      console.log(JSON.stringify(data)) ;
      return  this.result;
    });
  }
  smallUpjongList(indsLclsCd, indsSclsNm){

    var queryParams = 'smallUpjongList?' + encodeURIComponent('ServiceKey') + '=TztU36F%2FW%2FmBHdEf7%2BC2ztZDLtWtwik8brppbN8YzKLytXwT2jodh2hCR%2FSjIPBTOX9f3H%2BQynKwQWnEEjsCKQ%3D%3D';
    /* Service Key*/
    queryParams += '&' + encodeURIComponent('indsLclsCd') + '=' + encodeURIComponent(indsLclsCd);
    queryParams += '&' + encodeURIComponent('indsSclsNm') + '=' + encodeURIComponent(indsSclsNm);
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json');

    return this.http.get(this.url + queryParams).map(data => {

      this.result = data;
      console.log(JSON.stringify(data)) ;
      return  this.result;
    });
  }
  private handleError (error: Response | any) {
    let errMsg: string = error;
    alert(errMsg);
    return Promise.reject(errMsg);
  }
}
