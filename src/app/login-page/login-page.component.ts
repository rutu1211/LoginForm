import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submit= false;

constructor(private formBuilder: FormBuilder,private service:LoginService) { }

ngOnInit() {
  this.loginForm = this.formBuilder.group({
    userId: ['', Validators.required],
    password:['', Validators.required]
  })
  console.log(this.loginForm);
}
get f(){
  return this.loginForm.controls;
}
onSubmit(userId, loginPassword){
  this.submit=true;
  let result;
  //console.log(userId.value);
  this.service.getUserList().then(res => {
result = res;
console.log(res);
  })
  localStorage.setItem('currentUser', userId.value);
  localStorage.setItem('currentPassword', loginPassword.value);
  if(this.loginForm.invalid)
  {
   
   // console.log(this.loginForm.controls.userId);
  
  }
    console.log(this.loginForm)
    alert("suceess!!")
   // location.pathname = './home';
  }
   
}

