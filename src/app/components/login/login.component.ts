import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { EventEmitterService } from 'src/app/services/event-emitter-service/event-emitter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  isVisible = false;

  constructor(
    private formBuilder : FormBuilder,
    private eventEmitterService: EventEmitterService,
    private authService : AuthService
    ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.formGroup = this.formBuilder.group({
      email_or_username:  ['',Validators.required],
      password:  ['',Validators.required],
      email: [''],
      username: [''],
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    let userLoginDto = Object.assign({}, this.formGroup.value);
    if(userLoginDto.email_or_username.includes('@') || userLoginDto.email_or_username.includes('.') || userLoginDto.email_or_username.includes('.com')){
      userLoginDto.email = userLoginDto.email_or_username;
    }else{
      userLoginDto.username = userLoginDto.email_or_username;
    }
    this.authService.login(userLoginDto).subscribe(response => {
      if(response.success)
      {
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('email', response.data.user.email);
        localStorage.setItem('firstname', response.data.user.firstName);
        localStorage.setItem('lastname', response.data.user.lastName);
        this.componentFunction();

      }
    })

    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  componentFunction() {
    this.eventEmitterService.onInvokeNavUserComponentLogginedIn()
  }
}
