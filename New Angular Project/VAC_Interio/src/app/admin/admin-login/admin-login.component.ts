import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})


export class AdminLoginComponent implements OnInit {
  public loginForm!: FormGroup;
// loginData = {
//   UserName:'',
//   Password:''
// };

// userLogin(){

//   console.log(this.loginData);
// }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
       username:[''],
       password:['']
     });
  }

  login(){
    this.http.get<any>("http://localhost:3000/app/Logins")
        .subscribe(resp=>{
          const user = resp.find((a: any)=>{
            return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
          });
          if(user){
            alert("Login Successfully");
            this.loginForm.reset();
            this.router.navigate(['/shell']);
          }else{
            alert("Username or Password is invalid");
          }
        },err=>{
          alert("Something wents wrong");
        })
  }
  // initForm(){
  //    this.formGroup = new FormGroup({
  //    username: new FormControl('',[Validators.required]),
  //    password: new FormControl('',[Validators.required])
  //  });
  }
  // loginProcess(){
  //   if(this.formGroup.valid){
  //     this.authService.login(this.formGroup.value).subscribe(result=>{
  //       if(result.success)
  //       {
  //         console.log("success");
  //         alert("sucessful");
  //       } else{
  //         alert("Not sucessful");
  //       }
  //     })
  //   }
  // }



