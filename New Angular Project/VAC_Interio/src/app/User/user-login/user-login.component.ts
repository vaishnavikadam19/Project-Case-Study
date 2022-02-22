import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public loginForm!:FormGroup

  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email:[''],
      Password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/app/UserRegisters")
    .subscribe(resp=>{
      const user = resp.find((a:any)=>{
        return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['bill'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong");
    })
  }
}
