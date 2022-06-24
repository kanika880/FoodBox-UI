import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    
  constructor(private userService:UserService, private snack:MatSnackBar) { };

  public User ={
    username:'',
    email:'',
    password:'',    
  };

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.User);
      if(this.User.username == '' || this.User.username == null){
        //alert("User is required!!");
        this.snack.open('Field required!!','',{
          duration :3000,
          //verticalPosition:'top',
        });
        return;
      }

      //addUser:userService
      this.userService.addUser(this.User).subscribe(
        (data:any) =>  {
          //success
          console.log(data);
          //alert('success');
          Swal.fire('Signup Successful','User id is '+ data.userId,'success');
        },
        (error) =>{
          //error
          console.log(error);
          //alert('something went wrong');
          this.snack.open('something went wrong!','',{
            duration :3000,
            //verticalPosition:'top',
          });
        }
  );
    
    
      }

}


