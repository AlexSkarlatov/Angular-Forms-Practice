import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f','f') signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  userObject = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: this.suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }
  // onSubmit(form: ElementRef)
  // onSubmit(form: NgForm){
  //   console.log('submitted action occuring');
  //   console.log(form);
  // }

  onSubmit(){
    // console.log(this.signupForm);
    this.submitted = true;
    this.userObject.username = this.signupForm.value.userData.username;
    this.userObject.email = this.signupForm.value.email;

    this.userObject.secretQuestion = this.signupForm.value.secret;

    this.userObject.answer = this.signupForm.value.questionAnswer;
    this.userObject.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
