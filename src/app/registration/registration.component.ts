import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup = new FormGroup({});
  firstNamePattern = /^[A-Za-z]{1,20}$/;
  interests: string[] = [];
  newInterest!: string;
  photoSelected: boolean = false;
  photoPreviewUrl: any;
  isHomeAddress: boolean = true;
  isCompanyAddress: boolean = false;
  registrationSuccessful: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  createForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.firstNamePattern)]],
      age: [18, Validators.required],
      addressType: ['Home', Validators.required],
      homeAddress1: ['', Validators.required],
      homeAddress2: [''],
      companyAddress1: ['', Validators.required],
      companyAddress2: ['']
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }

    this.registrationSuccessful = true;
  }

  addInterest() {
    if (this.newInterest && !this.interests.includes(this.newInterest)) {
      this.interests.push(this.newInterest);
      this.newInterest = '';
      }
      }
      
      removeInterest(index: number) {
      this.interests.splice(index, 1);
      }
      
      onPhotoSelected(event:any) {
      const file = event.target.files[0];
      if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
      this.photoPreviewUrl = reader.result;
      this.photoSelected = true;
      };
      }
      }
      
      onEditPhoto() {
      this.photoSelected = false;
      this.registrationForm.controls['photo'].reset();
      }
      
      onEditProfile() {
      this.registrationSuccessful = false;
      this.photoSelected = false;
      this.createForm();
      }
      
      get companyAddress1() {
      return this.registrationForm.get('companyAddress1');
      }
      
      get homeAddress1() {
      return this.registrationForm.get('homeAddress1');
      }
      }