
# Assignment - 2

* Date Created: 04 JUN 2020
* Last Modification Date: 13 JUN 2020

## Authors

* [Tapan Prajapati - B00851820](Tapan.Prajapati@dal.ca)


## Getting Started

**[Optional]** If needing to provide the marker with a copy of the project that should run on their local machine for development, testing and/or marking purposes. Please include the following sections.

See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To have a local copy of  assignment up and running on your local machine, you will first need to install the following software and environment.

1. [Node JS](https://nodejs.org/en/download/)
2. [npm](https://www.npmjs.com/get-npm)
3. [Angular CLI](https://cli.angular.io/)
4. Editor (Preferred  - [Visual Studio Code](https://code.visualstudio.com/download))


See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

It is assumed that you have installed all the tools required to run the application.

1. Open terminal in root of the application directory.
2. Install all the required npm packages. It may take some time to complete.
```sh
npm install
```
3. Run the application in development server and open `localhost:4200` in browser.
 ```sh
npm run dev
```

> This command will run script `ng serve` configured in `package.json`.
4. To build application for Production Server, run following command.
```sh
npm run build
```

On successfully running the application, you will see page attached below in your browser.

![Preview of Home](https://i.ibb.co/KhSJfkw/Screenshot-from-2020-06-12-20-44-21.png)


## Deployment

Add additional notes about how to deploy this on a live system

## Built With


Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and [NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

  

- Optimized build and bundling process with [Webpack](https://webpack.github.io)

-  [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload

- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and [browserslist](https://github.com/ai/browserslist)

- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)

- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)

- End-to-end tests using [Protractor](https://github.com/angular/protractor)

- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer), [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)

- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)

- Automatic code formatting with [Prettier](https://prettier.io)

  

#### Libraries

  

-  [Angular](https://angular.io)
-  [Angular Material](https://material.angular.io)
-  [Material Icons](https://material.io/icons/)
-  [RxJS](http://reactivex.io/rxjs)
-  [ngx-translate](https://github.com/ngx-translate/core)
-  [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

## Sources Used

### header.component.html

**Lines 1-25**

```
<nav  class="navbar navbar-expand-md bg-primary navbar-dark">
	<a  class="navbar-brand">DSU Food Bank</a>
	<button  class="navbar-toggler collapsed"  type="button"  data-toggle="collapse"  data-target="#collapsibleNavbar">
		<span  class="navbar-toggler-icon"></span>
	</button>
	<div  class="collapse navbar-collapse"  id="collapsibleNavbar">
		<ul  class="navbar-nav">
			<li  class="nav-item">
				<a  class="nav-link"  href="/home">Home</a>
			</li>
			<li  class="nav-item">
				<a  class="nav-link"  href="/orders">Orders</a>
			</li>
		</ul>
		<span  class="spacer"></span>
		<div  class="nav-item navbar-nav">
			<a href="/user/profile">
				<mat-icon
				class="icon"
				aria-hidden="false"
				aria-label="login icon">person</mat-icon>
			</a>
		</div>
	</div>
</nav>
```
The code above was created by adapting the code in [W3Schools](https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp) as shown below: 

```
<nav class="navbar navbar-expand-md bg-dark navbar-dark">  
<!-- Brand -->  
	<a class="navbar-brand" href="#">Navbar</a>  
	  
	<!-- Toggler/collapsibe Button -->  
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">  
		<span class="navbar-toggler-icon"></span>  
	</button>  
	<!-- Navbar links -->  
	<div class="collapse navbar-collapse" id="collapsibleNavbar">  
		<ul class="navbar-nav">  
			<li class="nav-item">  
				<a class="nav-link" href="#">Link</a>  
			</li>  
			<li class="nav-item">  
				<a class="nav-link" href="#">Link</a>  
			</li>  
			<li class="nav-item">  
				<a class="nav-link" href="#">Link</a>  
			</li>  
		</ul>  
	</div>  
</nav>
```

- The code in [W3Schools](https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp) is used in the tutorial of Bootstrap 4 to demonstrate use of responsive navbar.
- [W3Schools](https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp)'s Code is used to implement responsive navigation bar that modifies its behaviour according to screen size.
- [W3Schools](https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp)'s Code is modified to redirect in the web application. Moreover, the original code behaves same for all screen size, but I have changed that to work different for different screen size.

### delete-dialog.component.html

**Lines 1-13**

```
<h2  mat-dialog-title>Confirm Delete</h2>

<div  mat-dialog-content>
	Product:
	<p>Name: {{ data.name }}</p>
	<p>Category: {{ data.category }}</p>
	<p>Quantity: {{ data.quantity }}</p>
</div>

<div  mat-dialog-actions>
	<button  mat-raised-button  [mat-dialog-close]>Close</button>
	<button  mat-raised-button  color="warn"  (click)="confirm()">Delete</button>
</div>
```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/dialog/examples) as shown below: 

```
<h1 mat-dialog-title>Favorite Animal</h1>
<div mat-dialog-content>
	My favorite animal is:
	<ul>
		<li>
			<span *ngIf="data.animal === 'panda'">&#10003;</span> Panda
		</li>
		<li>
			<span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn
		</li>
		<li>
			<span *ngIf="data.animal === 'lion'">&#10003;</span> Lion
		</li>
	</ul>
</div>
```

- The code in [Angular Material](https://material.angular.io/components/dialog/examples) is used in the example of Dialog component.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is used to display dialog to confirm the delete operation for a product in Admin Dashboard.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is modified to display the details of product. Two buttons have been added to confirm the delete operation and to cancel delete operation.


### delete-dialog.component.ts

**Lines 10-18**

```
export class DeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) {}

  ngOnInit(): void {}

  confirm() {
    this.dialogRef.close(true);
  }
}
```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/dialog/examples) as shown below: 

```
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
```

- The code in [Angular Material](https://material.angular.io/components/dialog/examples) is used in the example of Dialog component.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is used to display dialog to confirm the delete operation for a product in Admin Dashboard.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is modified to return a value when `Delete` button is pressed in dialog. When `Delete` button is pressed, the code will return `true` which will be checked by the calling function to delete the product. 



### products.component.html

**Lines 4-70**

```
 <div class="container col-md-8 mat-elevation-z8">
    <table mat-table [dataSource]="dataSource" matSort>
      <!-- Position Column -->
      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
        <td mat-cell *matCellDef="let product">
          {{ product.name }}
        </td>
      </ng-container>

      <!-- Name Column -->
      <ng-container matColumnDef="category">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>
        <td mat-cell *matCellDef="let product">
          {{ product.category }}
        </td>
      </ng-container>

      <!-- Weight Column -->
      <ng-container matColumnDef="total">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Total</th>
        <td mat-cell *matCellDef="let product">
          {{ product.quantity }}
        </td>
      </ng-container>

      <!-- Symbol Column -->
      <ng-container matColumnDef="limit">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Limit</th>
        <td mat-cell *matCellDef="let product">
          {{ product.limit }}
        </td>
      </ng-container>

      <ng-container matColumnDef="on_order">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>On Order</th>
        <td mat-cell *matCellDef="let product">{{ product.on_order }}</td>
      </ng-container>

      <ng-container matColumnDef="delete">
        <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>
        <td mat-cell *matCellDef="let product">
          <mat-icon
            class="delete-product-button"
            color="primary"
            aria-hidden="false"
            aria-label="delete icon"
            (click)="edit(product)"
            >create</mat-icon
          >
          <mat-icon
            class="delete-product-button"
            color="warn"
            aria-hidden="false"
            aria-label="delete icon"
            (click)="delete(product)"
            >delete</mat-icon
          >
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>

    <mat-paginator [pageSize]="[7]" showFirstLastButtons></mat-paginator>
  </div>
```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/table/examples) as shown below: 

```
<table mat-table [dataSource]="dataSource">

    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>

    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef> Weight </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>

    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef> Symbol </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

```

- The code in [Angular Material](https://material.angular.io/components/table/examples) is used in the example of Table component.
- [Angular Material](https://material.angular.io/components/table/examples)'s Code is used to explain use of table component with paginator.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is modified to add an additional column to edit and delete a product with icon buttons. 


### prodcut-cart.component.ts

**Lines 22-33**

```
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'add-to-cart-snackbar.html',
  styles: [`
    .snackbar {
      color: white;
      font-weight: bold;
      text-align: center;
    }
  `],
})
export class SnackbarComponent {}
```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/snack-bar/examples) as shown below: 

```
@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
```

- The code in [Angular Material](https://material.angular.io/components/snack-bar/examples) is used in the example of Snackbar component.
- [Angular Material](https://material.angular.io/components/dialog/examples)'s Code is used to display snackbar that displays a text for 5 seconds and then disappears.
- [Angular Material](https://material.angular.io/components/snack-bar/examples)'s Code is modified to change the text and text-color of snackbar. 



### profile.component.ts

**Lines 90-98**

```
const errors: ValidationErrors = {};
    if (control.value !== compareString) 
    {
      errors.invalidPassword = 
      {
        message: `Invalid Password`
      };
    }
    return Object.keys(errors).length ? errors : null;
  };
```
The code above was created by adapting the code in [Stack Overflow](https://stackoverflow.com/questions/36756159/angular-2-custom-validator-with-parameters) as shown below: 

```
const errors: ValidationErrors = {};
      let num = +control.value;
      if (isNaN(num) || num < min) {
        errors.isLessThanMin = {
          message: `Number must be greater that ${min}`
        };
      }
      return Object.keys(errors).length ? errors : null;
    };
```

- The code in [Stack Overflow](https://stackoverflow.com/questions/36756159/angular-2-custom-validator-with-parameters) is developed by [Boran Hanna](https://stackoverflow.com/users/10552859/brian-hanna) and is used to resolve error in creating custom validator for input field.
- [Boran Hanna](https://stackoverflow.com/users/10552859/brian-hanna)'s Code is modified specify the type of validation and message to use when validation fails for the input field. 



## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
