import { DataServiceService as DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  users: any;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.form = this.formBuilder.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      birthday: new FormControl(''),
      age: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  getAllUsers() {
    return this.dataService
      .getAllUsers()
      .subscribe((users) => (this.users = users));
  }

  saveUser() {
    this.dataService.saveUser(this.form.value);
  }
}
