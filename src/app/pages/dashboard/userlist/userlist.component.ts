import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {


  users: any = []

  constructor(
    public router: Router,
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('/assets/users.json').subscribe((res: any) => {
      this.users = res
      console.log(this.users);
      
    })
  }

  editUser(user: any){
    this.router.navigate(['/dashboard/edituser', user.id])
  }

  //deleteUser from users array
  deleteUser(id: number){
    console.log(id);
    
    this.http.delete(`/assets/data.json/${id}`).subscribe((res: any) => {
        this.users = res
      }
    )
  }
  

  adduser(){
    this.router.navigate(['/dashboard/adduser'])
  }
}
