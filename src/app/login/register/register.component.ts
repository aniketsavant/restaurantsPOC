import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ControllersService } from '../../shared/controllers.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, public controllersService: ControllersService) { }

  /**
   * @description : for creating registration form.
   */
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      uName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * @description : on registration click
   */
  async onSubmit() {
    this.controllersService.callForAlert('Success', 'Registered Successfully .');
    localStorage.setItem('registerData', JSON.stringify(this.registerForm.value));
    this.router.navigate(['']);
  }

}
