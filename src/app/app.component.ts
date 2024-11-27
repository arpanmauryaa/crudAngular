import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // constructor(private _getServices: ApiService)

  title = 'assignment';
  allData: any

  displayedColumns: string[] = ['firstName', 'lastName', 'age', 'email', 'jobTitle', 'action'];

  constructor(private _dailog: MatDialog, private _getService: ApiService) { }

  ngOnInit() {
    this.getAllData()
  }

  getAllData() {
    this._getService.getEmployee().subscribe((res) => {
      this.allData = new MatTableDataSource(res)
      console.log(this.allData, ' this.allData ')
    })
  }



  editUser(data: any) {
    this._dailog.open(FormComponent, { data }).afterClosed().subscribe((res => {
      this.getAllData()
    }))
    console.log(data, 'edit')
  }

  deleteUser(data: any) {
    this._getService.deleteEmployee(data._id).subscribe({

    });
    this.getAllData()
  }

  openAddEditForm() {
    this._dailog.open(FormComponent).afterClosed().subscribe((res => {
      console.log(res, 'res')
      this.getAllData()
    }))
  }
}
