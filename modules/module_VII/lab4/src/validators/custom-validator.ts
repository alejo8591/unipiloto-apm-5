import { AbstractControl } from "@angular/forms";

export class CustomValidators {
  public static passwordValidator(control: AbstractControl) {
	    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,20}$/)) {
	      return null;
	    } else {
	      return {'invalidPassword': true };
	    }
  }

  public static emailValidator(control: AbstractControl) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }
} 