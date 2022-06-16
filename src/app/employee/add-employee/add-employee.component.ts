import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee: FormGroup;
  editData: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }
  @Output() onSubmit = new EventEmitter<any>();
  @Input() empData: any;
  @Input() isEdit: any;
  ngOnInit(): void {
    this.employee = this.fb.group({
      id: [],
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
      address: ['', Validators.required],

    });

    if (this.empData) {
      this.employee.controls['name'].patchValue(this.empData.name);
      this.employee.controls['email'].patchValue(this.empData.email);
      this.employee.controls['contact'].patchValue(this.empData.contact);
      this.employee.controls['address'].patchValue(this.empData.address);
      this.employee.controls['id'].patchValue(this.empData.id);
    }

  }
  get f() {
    return this.employee.controls;
  }

  back() {
    this.router.navigate(['employee/create']);
  }

  submit({ valid }): void {
    const value = this.employee.getRawValue();
    this.onSubmit.emit(this.employee);

  }
}
