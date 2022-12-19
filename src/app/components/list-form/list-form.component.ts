import { Observable } from 'rxjs';
import { LogicalprocessService } from './../../services/logicalprocess.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/interface/Item';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css'],
})
export class ListFormComponent implements OnInit{
  dataSource !: Observable<Item[]>
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private services: LogicalprocessService
  ) {}
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.services.getAllList().subscribe(data=>{
        this.dataSource = data;
        console.log(data);
    });
  }
  displayedColumns: string[] = ['position', 'Tên', 'Điểm', 'Đã đóng hp','Lớp','Action'];

  //Ham delete
  deleteById(id: number) {
    this.services.deleteObject(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  //Ham update
  onEdit(id: number){
    console.log(id);
    this.router.navigate(['edit', id]);
  }

  onDelete(id: number){
    console.log(id);
    this.services.deleteObject(id).subscribe(data=>{
      this.reloadData();
    });
  }
  onSearch(key:string){
    this.services.searchAllList(key).subscribe(data=>{
      this.dataSource = data;
      console.log(data);
  });
  }
}
