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
    console.log(this.signupForm);

  }
}
