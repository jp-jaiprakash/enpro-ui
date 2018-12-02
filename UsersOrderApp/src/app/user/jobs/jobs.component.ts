import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
// import { FormControl } from '../../../../node_modules/@angular/forms';
import { Observable } from '../../../../node_modules/rxjs/Observable';
// import { map } from '../../../../node_modules/rxjs-compat/operator/map';
import { map, startWith } from 'rxjs/operators';
import { JobsComponentService } from './jobs.service.component';
import { Router } from '../../../../node_modules/@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogDemoComponent } from 'src/app/dialog-demo/dialog-demo.component';


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
  public fstock: FormGroup;
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

    // this.fstock = new FormGroup({
    //   stockjobid: this.stockjob.jobid,
    //   stockjobproductname: '',
    //   stockjobproductqty: '',
    //   stockjobproductunits: ''
    // });

  }
  constructor(private router: Router, private _jobservice: JobsComponentService, private dialog?: MatDialog) {
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
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      // this.isPopupOpened = false;
      // console.log('result', result);
      if (result === 'closed') {
        // console.log(form);
        // console.log(this.regularjob);
        const successcallback = (data) => {
          // console.log('data...');
          // cleaning the data
          this.regularjob = {
            jobid: '',
            compleiondate: '',
            clientname: ''
          };
        };
        this._jobservice.savenormaljob(this.regularjob, successcallback);
      }
    });

  }
  public onSubmitSubJob(form) {
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 'closed') {
        const successcallback = (data) => {
          form.resetForm();
          this.subjob = {
            jobid: '',
            productname: '',
            prodctqty: '',
            unit: ''
          };
        };
        this._jobservice.savestocksubjob(this.subjob, 3, successcallback);
      }
    });
  }
  public onSubmitStockJob(stockform: NgForm) {
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log(stockform);
      if (result === 'closed') {
        const successcallback = (data) => {
          stockform.resetForm();
          // this.stockjob.jobid = '';
          // this.stockjob.productname = '';
          // this.stockjob.prodctqty = '';
          // this.stockjob.unit = '';

        };
        this._jobservice.savestocksubjob(this.stockjob, 2, successcallback);
      }
    });
  }
}
