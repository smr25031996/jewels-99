import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/services/product.service';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export default class SignUpComponent implements OnInit {

  registrationForm: any;

  constructor(public dialog: MatDialog,private formBuilder: FormBuilder,private postUser:ProductService) {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }


  ngOnInit(): void {
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      // Process the registration logic here
      console.log(this.registrationForm.value);
      this.postUser.postUser(this.registrationForm.value).subscribe((resp)=>{
        alert(resp);

      })
      this.dialog.closeAll()

    }
  }
  
  openDialog() {
this.dialog.closeAll()
    this.dialog.open(SignInComponent);
  }
}
