import { Item } from 'src/app/interface/Item';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalprocessService } from 'src/app/services/logicalprocess.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private services: LogicalprocessService
  ) {}
  formGroup = this._formBuilder.group({
    tenSv: new FormControl('', Validators.required),
    diem: new FormControl(-1, [
      Validators.required,
      Validators.min(0),
      Validators.max(10),
    ]),
    daDongHocPhi: new FormControl(false, Validators.required),
    tenLop: new FormControl('', Validators.required),
  });
  //Submit form and redirect
  onSubmit() {
    this.services.createObject(this.formGroup.value).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/list'])
    })
    console.log(this.formGroup);
  }
}
