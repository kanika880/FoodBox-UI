import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

export interface loginData {
  username: string,
  password: string,
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public log: loginData ={
    username:"",
    password:"",
    //role:"",
  };
  isloggedin: string = 'false';
  isAdmin: string= "false";
  constructor(private snack:MatSnackBar, private login:LoginService) { }

  ngOnInit(): void {
  }
  userLogin(){
    if(this.log.username?.trim()==''|| this.log.username==null){
      this.snack.open("Username is required!", '',{
        duration: 3000,
      })
      return;
    }

    if(this.log.password?.trim()==''|| this.log.password==null ){
      this.snack.open("Password is required!", '',{
        duration: 3000,
      })
      return;
    }

    // if(this.loginData.role==null ){
    //   this.snack.open("Role is required!", '',{
    //     duration: 3000,
    //   })
    //   return;
    // }
    let urlPath = '/user/login'
    let params = this.log
    this.login.post(urlPath, params).subscribe((res: any) => {
      if(res.status == 200) {
        Swal.fire('SUCCESS','You are registered sucessfully', 'success');
        let isloggedin="yes";
        localStorage.setItem('loginStatus', isloggedin)
        if(this.log.username=='Kanika881'){
          //admin
          this.isAdmin="true";
          localStorage.setItem('checkAdmin', this.isAdmin)
          //Swal.fire('Success', 'Invalid credentials','success')
          window.location.href = '/admin';
        }else{
          //user dashboard
          window.location.href = '/user/userdashboard';
        }
      } else {
        Swal.fire('ERROR', 'Invalid credentials','error')
        let isloggedin="No";
        localStorage.setItem('loginStatus', isloggedin)
        console.log(isloggedin);
      }
    },
    (err) => {
      Swal.fire('ERROR', 'Invalid credentials','error')
      let isloggedin="No";
        localStorage.setItem('loginStatus', isloggedin)
        console.log(isloggedin);
    }
    )
  
  
  if(
    this.log.password.trim()=='' || 
    this.log.password==null){
    this.snack.open('password is required!!','',{
      duration:3000,
    });
    return;
  }

  // if(
  //   this.loginData.role==null){
  //   this.snack.open('role is required!!','',{
  //     duration:3000,
  //   });
  //   return;
  // }
}
}

