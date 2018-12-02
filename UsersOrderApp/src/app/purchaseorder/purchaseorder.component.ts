import { Component, OnInit } from '@angular/core';
import { PoService } from './purchaseorder.service.component';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-purchaseorder',
  templateUrl: './purchaseorder.component.html',
  styleUrls: ['./purchaseorder.component.css'],
  providers: [PoService]
})
export class PurchaseorderComponent implements OnInit {

  constructor(private _poservice: PoService, private dialog?: MatDialog) { }

  public ponormal = {
    jobid: '',
    materialname: '',
    ponumber: '',
    requiredqty: '',
    purchasedqty: '',
    dateofpurchase: '',
    cost: '',
    unitofpurchase: ''
  };

  public posub = {
    jobid: '',
    materialname: '',
    ponumber: '',
    requiredqty: '',
    purchasedqty: '',
    dateofpurchase: '',
    cost: '',
    unitofpurchase: ''
  };

  public postock = {
    jobid: '',
    materialname: '',
    ponumber: '',
    requiredqty: '',
    purchasedqty: '',
    dateofpurchase: '',
    cost: '',
    unitofpurchase: ''
  };
  public jobids = [];
  public subjobids = [];
  public stockjobids = [];
  public materials = [];
  public units = [];

  // normal jobs
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  filteredOptionsMaterials: Observable<string[]>;
  myControlMaterials = new FormControl();

  // Sub jobs
  filteredOptionsSubJob: Observable<string[]>;
  myControlSubJob = new FormControl();

  filteredOptionsMaterialsSubJob: Observable<string[]>;
  myControlMaterialsSubJob = new FormControl();

  // stock jobs
  filteredOptionsStockJob: Observable<string[]>;
  myControlStockJob = new FormControl();

  filteredOptionsMaterialsStockJob: Observable<string[]>;
  myControlMaterialsStockJob = new FormControl();

  ngOnInit() {

    const jobidsSuccesscallback = (data) => {
      if (data && data.length > 0) {
        this.jobids = data;
      }
    };
    this._poservice.getJobids(jobidsSuccesscallback);

    const subjobidsSuccesscallback = (data) => {
      if (data && data.length > 0) {
        this.subjobids = data;
      }
    };
    this._poservice.getSubJobids(subjobidsSuccesscallback);

    const stockjobidsSuccesscallback = (data) => {
      if (data && data.length > 0) {
        this.stockjobids = data;
      }
    };
    this._poservice.getStockJobids(stockjobidsSuccesscallback);

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
    this._poservice.getAllUnits(unitsSuccesscallback);

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
    this._poservice.getAllMaterials(successcallback);

    // normal job
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.filteredOptionsMaterials = this.myControlMaterials.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterMaterial(value))
      );

    // sub job
    this.filteredOptionsSubJob = this.myControlSubJob.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterSubJob(value))
      );

    this.filteredOptionsMaterialsSubJob = this.myControlMaterialsSubJob.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterMaterialSubJob(value))
      );

    // stock job
    this.filteredOptionsStockJob = this.myControlStockJob.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterStockJob(value))
      );

    this.filteredOptionsMaterialsStockJob = this.myControlMaterialsStockJob.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterMaterialStockJob(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.jobids.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterMaterial(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.materials.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterSubJob(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.subjobids.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterMaterialSubJob(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.materials.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterStockJob(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.stockjobids.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterMaterialStockJob(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.materials.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  public posubmit(type) {
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 'closed') {
        const successcallback = (data) => {
          this.posub = {
            jobid: '',
            materialname: '',
            ponumber: '',
            requiredqty: '',
            purchasedqty: '',
            dateofpurchase: '',
            cost: '',
            unitofpurchase: ''
          };
          this.ponormal = {
            jobid: '',
            materialname: '',
            ponumber: '',
            requiredqty: '',
            purchasedqty: '',
            dateofpurchase: '',
            cost: '',
            unitofpurchase: ''
          };
          this.postock = {
            jobid: '',
            materialname: '',
            ponumber: '',
            requiredqty: '',
            purchasedqty: '',
            dateofpurchase: '',
            cost: '',
            unitofpurchase: ''
          };
        };
        if (type === 1) {
          this._poservice.savenormaljobpo(this.ponormal, successcallback);
        } else if (type === 2) {

          this._poservice.savenormaljobpo(this.posub, successcallback);
        } else if (type === 3) {
          this._poservice.savenormaljobpo(this.postock, successcallback);
        }
      }
    });
  }

  public postocksubmit() {
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 'closed') {
        const successcallback = (data) => {
          this.postock = {
            jobid: '',
            materialname: '',
            ponumber: '',
            requiredqty: '',
            purchasedqty: '',
            dateofpurchase: '',
            cost: '',
            unitofpurchase: ''
          };
        };
        this._poservice.savenormaljobpo(this.postock, successcallback);
      }
    });
  }
}
