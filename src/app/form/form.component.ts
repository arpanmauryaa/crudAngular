import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  standalone: false,

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  empForm: FormGroup

  constructor(private _fb: FormBuilder, private _dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private _addData: ApiService) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      jobTitle: '',
    })
  }

  ngOnInit() {
    this.empForm.patchValue(this.data)
  }



  submitEmployee() {
    if (this.data) {
      this._addData.putEmployee(this.data._id, this.empForm.value).subscribe((res) => {
        this._dialogRef.close()
      })
    } else {
      console.log(this.empForm.value, 'this.empForm.value')
      this._addData.postEmployee(this.empForm.value).subscribe((res) => {
        this._dialogRef.close()
      })
    }


  }

  cancel(){
    this._dialogRef.close()
  }

}
