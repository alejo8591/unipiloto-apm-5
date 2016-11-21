import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../validators/custom-validator';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  userForm: FormGroup;

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.userForm = this.createUserForm();
  }
  
  saveUser(){
    console.log(this.userForm.value);
  }
  
  private createUserForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      password: ['', [Validators.required, CustomValidators.passwordValidator]],
      gender: ['', Validators.required],
    });
  }

}
