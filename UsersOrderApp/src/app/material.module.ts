import { NgModule } from '../../node_modules/@angular/core';
import {
    MatSidenavModule, MatMenuModule, MatIconModule, MatButtonModule,
    MatCardModule, MatDatepickerModule, MatCheckboxModule, MatInputModule, MatNativeDateModule,
    MatListModule, MatTableModule, MatPaginator, MatPaginatorModule, MatTabsModule, MatAutocompleteModule,
     MatSelectModule, MatSortModule, MatChipsModule, MatDialogModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatSortModule,
        MatChipsModule,
        MatDialogModule
    ],
    exports: [
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatSortModule,
        MatChipsModule,
        MatDialogModule
    ]
})
export class MaterialModule { }
