import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customsidebar',
  templateUrl: './customsidebar.component.html',
  styleUrls: ['./customsidebar.component.css']
})
export class CustomsidebarComponent {
  public useroptions = [
    { name: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
    { name: 'Add Jobs', route: 'jobs', icon: 'note_add' },
    { name: 'Purchase Order', route: 'po', icon: 'add_shopping_cart' },
    { name: 'View Purchase Order', route: 'dashboard', icon: 'local_shipping' },
    { name: 'Assign Materials', route: 'dashboard', icon: 'rate_review' },
    { name: 'Check Job Status', route: 'jobstatus', icon: 'local_library' },
    { name: 'All Materials', route: 'dashboard', icon: 'pages' },
    { name: 'Add Old Material', route: 'addoldmaterial', icon: 'assignment_turned_in' },
    { name: 'Add user', route: 'userprofile', icon: 'account_box' },
    { name: 'Export material', route: 'dashboard', icon: 'import_export' },
  ];
  constructor(private router: Router) {

  }
  public navigateto(rout) {
    console.log(rout);
    this.router.navigate([rout]);

  }
}
