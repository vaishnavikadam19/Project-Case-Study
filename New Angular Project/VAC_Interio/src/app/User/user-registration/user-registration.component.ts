import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public registrationForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      Phone:[''],
      Address:[''],
      Email:[''],
      Gender:[''],
      Password:[''],
      Confirm_password:['']
    })
  }

  Register(){
    this.http.post<any>("http://localhost:3000/app/UserRegisters/add",this.registrationForm.value)
    .subscribe(resp=>{
      alert("Registration Successful");
      this.registrationForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong");
    })
  }
}
function subscribe(arg0: (resp: any) => void) {
  throw new Error('Function not implemented.');
}

