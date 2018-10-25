import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customsidebar',
  templateUrl: './customsidebar.component.html',
  styleUrls: ['./customsidebar.component.css']
})
export class CustomsidebarComponent {
  public useroptions = [
    { name: 'Dashboard', route: 'dashboard' },
    { name: 'Add Jobs', route: 'jobs' },
    { name: 'Purchase Order', route: 'po' },
    { name: 'View Purchase Order', route: 'dashboard' },
    { name: 'Assign Materials', route: 'dashboard' },
    { name: 'Check Job Status', route: 'dashboard' },
    { name: 'All Materials', route: 'dashboard' },
    { name: 'Add Old Material', route: 'dashboard' },
    { name: 'Add user', route: 'dashboard' },
    { name: 'Export material', route: 'dashboard' },
  ];
  constructor(private router: Router){

  }
  public navigateto(rout) {
    console.log(rout);
    this.router.navigate([rout]);

  }
}
