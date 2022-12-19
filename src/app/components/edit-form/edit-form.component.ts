import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interface/Item';
import { LogicalprocessService } from 'src/app/services/logicalprocess.service';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  id!:number;
  item: Item = {
    maSv: 0,
    tenSv: '',
    diem: 0,
    daDongHocPhi: false,
    tenLop: '',
  };
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.services.getById(this.id).subscribe(data => {
      this.item = data;
      //Binding data to form
      this.formGroup.controls.tenSv.setValue(this.item.tenSv);
      this.formGroup.controls.diem.setValue(this.item.diem);
      this.formGroup.controls.daDongHocPhi.setValue(this.item.daDongHocPhi);
      this.formGroup.controls.tenLop.setValue(this.item.tenLop);
      this.formGroup.controls.maSv.setValue(this.item.maSv);
    },
    error => console.log(error));
  }
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private services: LogicalprocessService
  ) {}
  formGroup = this._formBuilder.group({
    maSv: new FormControl(0),
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
