import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { LoginSignup } from '../../shared/services/login-signup';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms'
import { User } from '../../core/Model/object-model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signin-signup',
  imports: [CommonModule, RouterLink, HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signin-signup.html',
  styleUrl: './signin-signup.css',
})
export class SigninSignup {
  regForm: boolean = false;
  signUpForm!: FormGroup;
  signUpsubmitted = false;
  href: string = '';
  user_data: any;
  user_dto!: User;
  user_reg_data: any;
  signInFormValue: any = {};


  constructor(private formBuilder: FormBuilder, private route: Router, private loginService: LoginSignup) { }

  ngOnInit(): void {
    this.href = this.route.url;
    if (this.href == '/sign-up') {
      this.regForm = true;
    } else if (this.href == '/sign-in') {
      this.regForm = false;
    }

    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobNumber: ['', Validators.required],
      age: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: this.formBuilder.group({   // 👈 nested group
        addline1: ['', Validators.required],
        addline2: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      languages: [''],
      gender: ['', Validators.required],
      aboutyou: ['', Validators.required],
      uploadPhoto: [null],
      agreetc: [false, Validators.required],
      role: ['', Validators.required]
    });
  }

  get rf() {
    return this.signUpForm.controls
  }

  onSubmit(): void {
  this.signUpsubmitted = true;
  if (this.signUpForm.invalid){
    console.log('inside');
    return;
  } 
  console.log(this.user_reg_data,'user RAW data')
  this.user_reg_data = this.signUpForm.value
  this.user_dto = {
    id:this.user_reg_data.id,
      name:this.user_reg_data.name,
      mobNumber: this.user_reg_data.mobNumber,
      age: this.user_reg_data.age,
      dob: this.user_reg_data.dob,
      email: this.user_reg_data.dob,
      password: this.user_reg_data.dob,
      address: { 
        id:0,
        addline1: this.user_reg_data.address.addline2,
        addline2: this.user_reg_data.address.addline1,
        city: this.user_reg_data.address.city,
        state: this.user_reg_data.address.state,
        zipcode: this.user_reg_data.address.zipCode,
      },
      languages: this.user_reg_data.languages,
      gender: this.user_reg_data.gender,
      aboutyou: this.user_reg_data.aboutyou,
      uploadPhoto: this.user_reg_data.uploadPhoto,
      agree: this.user_reg_data.agreetc,
      role: this.user_reg_data.role,
  }

  // Create FormData for file + JSON
  const formData = new FormData();
  Object.entries(this.signUpForm.value).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  if (this.selectedFile) {
    formData.append('uploadPhoto', this.selectedFile);
  }

  console.log('📦 Sending FormData:', formData);
  console.log(this.user_dto, 'user-dto');

  // Send to API
  this.loginService.userRegister( this.user_dto).subscribe({
    next: (res) => console.log('✅ Registered:', res),
    error: (err) => console.error('❌ Error:', err),
  });
}

  onLogin(form: NgForm) {
    if (form.invalid) return;
    console.log('Login:', form.value);
    // your login logic here...
  }

  selectedFile: File | null = null;

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
    console.log('📁 Selected file:', this.selectedFile.name);
  }
}

}
