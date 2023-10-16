import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filterForm: FormGroup;

  constructor(private _fb: FormBuilder){
    this.filterForm = this._fb.group({
      filters: this._fb.array([
        this._fb.group({
          field: ['', Validators.required],
          operator: ['', Validators.required],
          value: ['', Validators.required]
        })
      ])
    })
  }

  get filters(): FormArray{
    return this.filterForm.get('filters') as FormArray;
  }

  addFilter() {
    const filter = this._fb.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required]
    });
    this.filters.push(filter);
  }

  removeFilter(index: number) {
    this.filters.removeAt(index);
  }


}
