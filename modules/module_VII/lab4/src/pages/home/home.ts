import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

userForm: FormGroup;

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.userForm = this.createUserForm();
  }
  
  saveUser(){
    console.log(this.userForm.value);
  }
  
  private createUserForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

}
