import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FormControl,FormGroup, FormBuilder,Validators, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  arrow:string="assets/downarraow.jpg";

  user:any={};

  selected= ""; 
  selected_o= ""; 

  Gender: any = ['Male', 'Female', 'Other']
  pregnancy: any = ['Yes', 'No']
  term : any = ['1-3','4-6','7-9']
  health : any = ['Diabetes','BP','Influenza','Other']

 interview_form=this.fb.group({
  name:['v',Validators.required],
  age:[''],  
   more_info: this.fb.group({
    Gender:[''],
    pregnancy:[''],
    term:[''],
  }),
  health:['']
});


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.interview_form.value);
    this.user=Object.assign(this.user,this.interview_form.value);
    localStorage.setItem('Users', JSON.stringify(this.user));
        let formValue = JSON.parse(localStorage.getItem('form-data'))
    console.log(formValue)

  }

}
