import { Component, VERSION } from '@angular/core';
import { formControl } from '@angular/core/schematics/migrations/typed-forms/util';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // registerationFrom = new FormGroup({
  //   username: new FormControl('Adnan'),
  //   password: new FormControl(''),
  //   confirmpassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalcode: new FormControl(''),
  //   }),
  // });
  onsubmit() {
    //console.log(this.registerationFrom.value.username);
  }
  loadapi() {
    // this.registerationFrom.setValue({
    //   username: 'admin',
    //   password: '',
    //   confirmpassword: '',
    //   address: {
    //     city: 'damas',
    //     state: 'state2',
    //     postalcode: '9990',
    //   },
    // });

    this.registerationFrom.patchValue({
      username: 'admini',
      password: 'passw',
    });
  }
  ngOnInit() {
    //this.registerationFrom.setValue({username:"admin"});
    console.log(this.registerationFrom);
    
  }


  
  constructor(private fb: FormBuilder) {}

  registerationFrom = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: [''],
    confirmpassword: '',
    address: this.fb.group({
      city: [''],
      state: ['ddd'],
      postalcode: [''],
    }),
  });

}
