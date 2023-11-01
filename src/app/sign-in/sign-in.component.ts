import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';
import SignUpComponent from '../sign-up/sign-up.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  registrationForm: any;

  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  ngOnInit(): void {
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      // Process the registration logic here
      alert('Form submitted successfully!');
      console.log(this.registrationForm.value);
      this.dialog.closeAll()

    }
  }

  openDialog() {
    this.dialog.closeAll()

    this.dialog.open(SignUpComponent);

  }
}    
