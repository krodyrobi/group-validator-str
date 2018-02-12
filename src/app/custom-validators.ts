import {AbstractControl} from '@angular/forms';


export class CustomValidators {
  static matchPassword(AC: AbstractControl) {
    const password = AC.get('password');
    const confirmPassword = AC.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors(Object.assign({}, confirmPassword.errors, {matchPassword: true}));
      return;
    }

    // Guard against no errors nothing to revert
    if (confirmPassword.errors === null) {
      return;
    }

    // Remove matchPassword from existing errors
    const {matchPassword, ...rest} = confirmPassword.errors;
    if (!Object.keys(rest).length) {
      // Only our error was present mark as clean
      confirmPassword.setErrors(null);
      return;
    }

    // Set remaining errors
    confirmPassword.setErrors(rest);
  }
}
