import { Component, OnInit } from '@angular/core';
import { ExcelService } from './export-shared-services';

@Component({
  selector: 'app-exportexcel',
  templateUrl: './exportexcel.component.html',
  styleUrls: ['./exportexcel.component.css'],
  providers: [ExcelService]
})
export class ExportexcelComponent {


  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  }, {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  }, {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  constructor(private excelService: ExcelService) {
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
