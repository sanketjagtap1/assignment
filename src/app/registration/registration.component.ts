import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  state = ['Maharashtra', 'Gujrat'];
  country = ['India', 'USA'];
  tag = ['Cricket', 'Football', 'Basketball'];

  onSubmit(data:any) {
    console.log(data);
  }
}