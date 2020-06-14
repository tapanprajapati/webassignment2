import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '@app/interfaces';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  constructor(public userService: UserService, public dialog: MatDialog) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  changePassword() {
    const dialogRef = this.dialog.open(ChangePasswordDialog, {
      width: '250px',
      data: this.user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  ngOnDestroy() {}
}

@Component({
  selector: 'app-user-password-dialog',
  templateUrl: './change-password-dialog.html',
  styleUrls: ['./changepassword.scss'],
})
export class ChangePasswordDialog implements OnInit {
  constructor(public dialogRef: MatDialogRef<ChangePasswordDialog>, @Inject(MAT_DIALOG_DATA) public data: User) {}

  newPassword: string = '';
  currentpasswordcontrol = new FormControl('', [Validators.required, this.checkCurrentPassword(this.data.password)]);
  newpasswordcontrol = new FormControl('', [Validators.required]);

  repeatpasswordcontrol = new FormControl('', [Validators.required]);

  ngOnInit(): void {}

  confirm() {
    if (this.repeatpasswordcontrol.value !== this.newpasswordcontrol.value) {
      const errors: ValidationErrors = {};
      errors.notEqual = {
        message: `Password Does Not Match`,
      };
      this.repeatpasswordcontrol.setErrors(errors);
      return;
    }

    if (this.currentpasswordcontrol.errors || this.repeatpasswordcontrol.errors || this.newpasswordcontrol.errors) {
      console.log('Error');
      return;
    }
    alert('Password Updated Successfully');
    this.dialogRef.close(true);
  }

  //https://stackoverflow.com/questions/36756159/angular-2-custom-validator-with-parameters

  checkCurrentPassword(compareString: string): ValidatorFn {
    return (control: FormControl): ValidationErrors | null => {
      if (control.value == null || control.value == '' || compareString == '') {
        return null;
      }
      const errors: ValidationErrors = {};
      if (control.value !== compareString) {
        errors.invalidPassword = {
          message: `Invalid Password`,
        };
      }
      return Object.keys(errors).length ? errors : null;
    };
  }
}
