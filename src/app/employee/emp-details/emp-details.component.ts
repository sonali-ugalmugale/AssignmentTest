import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  employeeData: any = [];
  employee: FormGroup;
  addData:boolean = false;
  editData:boolean = false;
  viewData:boolean = false;
  listData:boolean = true;
  count:number = 1;
  viewemp : any;
  progressbarValue: number = 0;
  editEmpData: any;

  constructor(private router: Router,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
  }
    
  submit(employee){
    if(this.editData){
      debugger
      let emp = employee.value['id'];
      this.employeeData.forEach(element => {
        if(emp === element.id){
          this.employeeData.splice(this.employeeData.findIndex(x => x.id == emp),1);
          this.employeeData.push(employee.value)
        }
      });
      this.listData = true;
      this.editData = false;

    }else{
      employee.controls['id'].patchValue(this.count);
      if(employee.value){
        if(employee.value['id'] > 0){
          this.count = this.count + 1;
        }
        this.employeeData.push(employee.value);
        if(employee.value['id'] === 0){
          this.progressbarValue = 10;
        }else{
          this.progressbarValue =  this.progressbarValue + 10;
        }
        this.listData = true;
        this.addData = false;
        console.log(this.employeeData);
      }
    }
    
  }  
  view(emp) {
    this.viewData = true;
    this.viewemp = emp;
    this.listData = false;

  }

  edit(emp) {
    this.editData = true;
    this.editEmpData = emp;
    this.listData = false;
  }

  delete(emp) {
    this.employeeData.splice(this.employeeData.findIndex(x => x.id == emp), 1);
    this.progressbarValue = this.progressbarValue - 10;
  }

  back(){
    this.viewData = false;
    this.listData = true;
    this.addData = false;
    this.editData = false;

  }

  addEmployee() {
    // this.router.navigate(['/employee/create']);
    this.addData = true;
    this.listData = false;
  }


}
