import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CakeService } from 'src/app/services/cake.service';
import { CartService } from 'src/app/services/cart.service';
import { FamilyService } from 'src/app/services/family.service';
import { FillingService } from 'src/app/services/filling.service';
import { FlavorService } from 'src/app/services/flavor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  filterForm: FormGroup;
  cakes: any[] = [];
  families: any[] = [];
  fillings: any[] = [];
  flavors: any[] = [];

  valueOpts: any[] = [];

  constructor(private _fb: FormBuilder, private cakeService: CakeService, 
    private toast: ToastrService, private cart: CartService, 
    private familyService: FamilyService,
    private fillingService: FillingService,
    private flavorService: FlavorService){
    this.filterForm = this._fb.group({
      filters: this._fb.array([
        this._fb.group({
          field: ['', Validators.required],
          operator: ['', Validators.required],
          values: [[], Validators.required]
        })
      ])
    });
  

    this.familyService.getFamilies()
    .subscribe((e) => {
      if(e.success== true){
        this.toast.success("Familia de pasteles cargada correctamente", "Catálogos", {
          timeOut: 4000
        })
        this.families = e.result
      }else{
        this.toast.error("Error al cargar las familias de pasteles", "Catálogos", {
          timeOut: 4000
        })
        this.families = []
      }
    })

    this.fillingService.getFillings()
    .subscribe((e) => {
      if(e.success== true){
        this.toast.success("Rellenos de pasteles cargada correctamente", "Catálogos", {
          timeOut: 4000
        })
        this.fillings = e.result
      }else{
        this.toast.error("Error al cargar los rellenos de pasteles", "Catálogos", {
          timeOut: 4000
        })
        this.fillings = []
      }
    })

    this.flavorService.getFlavors()
    .subscribe((e) => {
      if(e.success== true){
        this.toast.success("Sabores de pasteles cargada correctamente", "Catálogos", {
          timeOut: 4000
        })
        this.flavors = e.result
      }else{
        this.toast.error("Error al cargar los sabores de pasteles", "Catálogos", {
          timeOut: 4000
        })
        this.flavors = []
      }
    })
  }

  get filters(): FormArray{
    return this.filterForm.get('filters') as FormArray;
  }

  addFilter() {
    const filter = this._fb.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      values: [[], Validators.required]
    });
    this.filters.push(filter);

    console.log(this.filterForm.value);
  }

  removeFilter(index: number) {
    this.filters.removeAt(index);
  }

  public addToCart(cake: any){
    this.toast.success("Pastel añadido al carrito", "Carrito", {
      timeOut: 4500
    })
    this.cart.addToCart(cake);
  }

  public applyFilters(){
    this.cakes = [];
    let filters = this.filters.getRawValue();
    filters.forEach((f) => {
      f.values = [f.values]
      console.log(f)
    })
    this.cakeService.getFilteredCakes(filters)
    .subscribe((e) => {
      this.cakes = e.result;
    })
  }
  
  public cleanFilters(){
    this.cakes = []
    this.filterForm.reset()
  }




}
