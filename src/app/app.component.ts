import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }



  ngOnInit(): void {
    this.form = this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      },
      {
        validator: CustomValidators.matchPassword
      });
  }

  onSubmit() {
    console.dir(this.form.value);
  }


}
