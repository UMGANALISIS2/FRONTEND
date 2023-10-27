import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-flavor-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  createForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  public saveFlavor(){
    
  }
}
