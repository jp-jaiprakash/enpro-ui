import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  changestatus: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', changestatus: true },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', changestatus: true },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', changestatus: true },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', changestatus: true },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', changestatus: true },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', changestatus: true },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', changestatus: true },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', changestatus: true },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', changestatus: true },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', changestatus: true },
];

@Component({
  selector: 'app-jobstatus',
  templateUrl: './jobstatus.component.html',
  styleUrls: ['./jobstatus.component.css']
})
export class JobstatusComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'changestatus'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog) { }


  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  changeStatusJob(element) {
    console.log('this is element', element);
  }

}

