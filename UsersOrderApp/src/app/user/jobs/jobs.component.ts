import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { FormControl } from '../../../../node_modules/@angular/forms';
import { Observable } from '../../../../node_modules/rxjs/Observable';
// import { map } from '../../../../node_modules/rxjs-compat/operator/map';
import { map, startWith } from 'rxjs/operators';
import { JobsComponentService } from './jobs.service.component';
import { Router } from '../../../../node_modules/@angular/router';


export interface MaterialAll {
  name: string;
  materialid: number;
}
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [JobsComponentService]
})
export class JobsComponent implements OnInit {
  public regularjob = {
    jobid: '',
    compleiondate: '',
    clientname: ''
  };

  public subjob = {
    jobid: '',
    productname: '',
    prodctqty: '',
    unit: ''
  };
  public stockjob = {
    jobid: '',
    productname: '',
    prodctqty: '',
    unit: ''
  };
  stateCtrl = new FormControl();
  filteredStates: Observable<MaterialAll[]>;
  public units = [];

  materials: MaterialAll[] = [];
  ngOnInit(): void {
    const successcallback = (data) => {
      if (data && data.length > 0) {
        for (const mat of data) {
          this.materials.push({
            name: mat.materailname,
            materialid: mat.materialId
          });
        }
      }
    };
    this._jobservice.getAllMaterials(successcallback);

    const unitsSuccesscallback = (data) => {
      if (data && data.length > 0) {
        for (const un of data) {
          this.units.push({
            name: un.unitvalue,
            id: un.unitid
          });
        }

      }
    };
    this._jobservice.getAllUnits(unitsSuccesscallback);

  }
  constructor(private router: Router, private _jobservice: JobsComponentService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.materials.slice())
      );
  }

  private _filterStates(value: string): MaterialAll[] {
    const filterValue = value.toLowerCase();

    return this.materials.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
  public onSubmitregularjob(form) {
    console.log(form);
    console.log(this.regularjob);
    const successcallback = (data) => {
      console.log('data...');
    };
    this._jobservice.savenormaljob(this.regularjob, successcallback);
  }
  public onSubmitSubJob(form) {
    console.log(form);
    console.log(this.subjob);
    const successcallback = (data) => {
      console.log('data...');
    };
    this._jobservice.savestocksubjob(this.subjob, 3, successcallback);
  }
  public onSubmitStockJob(form) {
    console.log(form);
    console.log(this.subjob);
    const successcallback = (data) => {
      console.log('data...');
    };
    this._jobservice.savestocksubjob(this.stockjob, 2, successcallback);
  }
}
