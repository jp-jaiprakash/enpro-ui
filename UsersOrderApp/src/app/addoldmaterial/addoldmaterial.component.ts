import { Component, OnInit } from '@angular/core';
import { PoService } from './addoldmaterial.service.component';
import { MatDialog } from '@angular/material';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-addoldmaterial',
  templateUrl: './addoldmaterial.component.html',
  styleUrls: ['./addoldmaterial.component.css'],
  providers: [PoService]
})
export class AddoldmaterialComponent implements OnInit {

  public material = {
    name: '',
    qty: 0,
    unit: '',
    
  };

  public units = [];
  constructor(private _poservice: PoService, private dialog?: MatDialog) { }

  ngOnInit() {

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
  }
  public addoldmaterial() {
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === 'closed') {
        const successcallback = (data) => {
          this.material = {
            name: '',
            qty: 0,
            unit: ''
          };
        };
        this._poservice.submitOldMaterial(this.material, successcallback);

      }
    });

  }
}
