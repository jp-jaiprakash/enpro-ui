import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {
  public _contactForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogDemoComponent>,
    // private _contactService: ContactService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  okClicked(): void {
    this.dialogRef.close('closed');
  }
  ngOnInit() {
    // this._contactForm = this._formBuilder.group({
    //   ID: [this.data.ID],
    //   FirstName: [ this.data.FirstName, [Validators.required]],
    //   LastName: [ this.data.LastName, [Validators.required]],
    //   Contact: [ this.data.Contact, [Validators.required]],
    //   Email: [ this.data.Email , [Validators.required]],
    // });
  }

  onSubmit() {
    console.log('i am submitting');
    // if (isNaN(this.data.ID)) {
    //   this._contactService.addContact(this._contactForm.value);
    //   this.dialogRef.close();
    // } else {
    //   this._contactService.editContact(this._contactForm.value);
    //   this.dialogRef.close();
    // }
  }

}