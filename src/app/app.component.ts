import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './model/user';
import { Subscription, catchError, map, pipe, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit{

  error!:any;
  promiseUsers: User[] = []
  observableUsers: User[] = []
  transformUsers: any[] = []
  private subscription!: Subscription;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsersPromise().then((data) => {
      this.promiseUsers = data;
    })
      .catch((error: Error) => {
        console.log(error.message)
      }
      );


    //simple data subscribed from obserbles
    this.subscription = this.userservice.getAllUsersObservable().subscribe({
      next: (users: User[]) => {
        this.observableUsers = users;
        console.log('normal data from observable :' + JSON.stringify(users))
      },
      error: (error:string) => {
        this.error = error
      }
    })

    //now transform data before subscribing to it
    this.userservice.getAllUsersObservable()
      .pipe(
        map((users: User[]) => {
          const transformData: any = []
          // users.forEach(user => {
          //   transformData.push({
          //     uid: user.id,
          //     fullName: `${user.fname} ${user.lname}`,
          //   })
          // })

          users.forEach(user => {
            transformData.push({
              ...user, collage: 'JIT BORAWAN'
            })
          })
          return transformData;
        }),
        catchError((error: Error) => {
          return throwError(()=> error)
        })
      )
      .subscribe({
        next: ((transformDatadata: any) => {
          this.transformUsers = transformDatadata;
          console.log('transform data from observable :' + JSON.stringify(transformDatadata))
        }),
        error: ((error: Error) => {
          
        })
      })

      this.userservice.getPunchDataByempCode(69).subscribe({
        next:(data:any)=>{
          console.log(data);
        },
        error:(error:string)=>{
          this.error = error
        }
      })

      this.userservice.getPunchDataByempName('Nashir Khan').subscribe({
        next:(data:any)=>{
          console.log(data)
        },
        error:(error:string)=>{
          this.error = error;
        }
      })
  }

  ngAfterViewInit(): void {
   
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe()
  }


}
