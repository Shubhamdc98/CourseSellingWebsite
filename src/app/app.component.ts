import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from '../validators/noSpace.valider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'template-driven-form';
  reactiveForms: FormGroup

  ngOnInit(): void {
    this.reactiveForms = new FormGroup({
      firstname : new FormControl(null,  [Validators.required, CustomValidation.NoSpace]),
      lastname : new FormControl(null, [Validators.required, CustomValidation.NoSpace]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      username : new FormControl(null),
      dob : new FormControl(null),
      gender : new FormControl('male',Validators.required),
      address : new FormGroup({
        street : new FormControl(null),
        city : new FormControl(null, Validators.required),
        region : new FormControl(null),
        country : new FormControl('India'),
        postal : new FormControl(null)
      }),
      skillsets : new FormArray([
        new FormControl(null, Validators.required)
      ]),
      experience : new FormArray([

      ])
    })
  }

  SubmitingForm(){
    console.log(this.reactiveForms);
  }

  AddSkill(){
    (<FormArray>this.reactiveForms.get('skillsets')).push( new FormControl(null, Validators.required))
  }

  DltSkill(index : number){
    (<FormArray>this.reactiveForms.get('skillsets')).removeAt(index)
  }

  AddExperience(){
    (<FormArray>this.reactiveForms.get('experience')).push(
      new FormGroup({
        position : new FormControl(null, Validators.required),
        company : new FormControl(null, Validators.required),
        CompanyExp : new FormControl(null, Validators.required),
        start : new FormControl(null, Validators.required),
        end : new FormControl(null, Validators.required)
      })
    )
  }

  DltExperience(index:number){
    (<FormArray>this.reactiveForms.get('experience')).removeAt(index);
  }
} 
