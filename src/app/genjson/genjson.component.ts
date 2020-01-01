import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-genjson',
  templateUrl: './genjson.component.html',
  styleUrls: ['./genjson.component.css']
})
export class GenjsonComponent implements OnInit {
  
   myForm: FormGroup;
  //productForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    })
  
  }
  
  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }
  
  addPhone() {
  
    const phone = this.fb.group({ 
      area: '',
      prefix: new FormControl(),
      line: new FormControl("123"),
    })
  
    this.phoneForms.push(phone);
  }
  
  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }
}

