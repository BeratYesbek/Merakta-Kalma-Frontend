import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formGroup!: FormGroup;

  isVisible = false;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService
    ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.formGroup = this.formBuilder.group({
      username:  ['',Validators.required],
      password:  ['',Validators.required],
      firstName: ['',Validators.required],
      email: ['',Validators.required],
      lastName: ['',Validators.required],
      check: ['',Validators.required]
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    let userCreateDto = Object.assign({}, this.formGroup.value);
    this.authService.register(userCreateDto).subscribe(response => {
      if(response.success)
      {
        console.log(response);
      }
    })

    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
