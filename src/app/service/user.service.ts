import { Injectable } from '@angular/core';
import { User } from '../model/user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable, catchError, map, of } from 'rxjs';
import { ErrorService } from './error.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:8080/api'
  users: User[] = []

  constructor(private _http:HttpClient, private _errservice:ErrorService) {
    this.users.push(
      new User(1, 'Nasser', 'Khan', 'itsnesskhan@gmail.com', 'Azad Nagar'),
      new User(2, 'Mohit', 'Malve', 'imohitmalve@gmail.com', 'Palda'),
      new User(1, 'Ayush', 'Khushwah', 'kushwahayush@gmail.com', 'Radison Square')
    );
  }


  public getAllUsersPromise(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users)
      }, 2000);
    })
  }

  public getAllUsersObservable(): Observable<User[]> {
    console.log('method called');
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.users);
        observer.complete();
      }, 2000);
    });
  }

  
  public getPunchDataByempCode(id:number):Observable<any[]>{
      //if you have multiple perms to send then
      let sortParams =  new HttpParams();
      sortParams = sortParams.append('sortDirection', 'ASC');
      sortParams = sortParams.append('sortBy', 'id');
      sortParams = sortParams.append('allUser', 'true');

    return this._http.get<any>(`${this.url}/getAttendanceByEmpCode/${id}`,
                  {
                    headers:new HttpHeaders({'custom-header':'hello'}),
                    // params:new HttpParams().set('sortBy','name'),
                    params:sortParams,
                  
                  })
                  .pipe(
                    catchError(this._errservice.errorHandler)
                  )
  }

  // public getPunchDataByempName(name:string):Observable<any[]>{
  //   return this._http.get<any[]>(`${this.url}/getAttendanceByEmpName/${name}`)
  //           .pipe(
  //             map(data=> []),
  //             catchError(this._errservice.errorHandler)
  //           )
  // }

  public getPunchDataByempName(name:string):Observable<any>{
    return this._http.get<any[]>(`${this.url}/getAttendanceByEmpName/${name}`,
             {
              headers: new HttpHeaders({'my-header':'hello brother'}),
              params: new HttpParams().set('isMarried', false),
              observe:'response',
              responseType:'json' 
             }
             )
            .pipe(
              catchError(this._errservice.errorHandler)
            )
  }
            
}
