
# Assignment - 2

[Source Code](https://github.com/Warrior24598/webassignment2)
[App  Link](https://dal-food-bank-b00851820.herokuapp.com/)



* Date Created: 04 JUN 2020
* Last Modification Date: 14 JUN 2020

## Authors

* [Tapan Prajapati - B00851820](Tapan.Prajapati@dal.ca)

---


## Overview

### Project

As a project of CSCI 5709 my team has decided to develop a web application for Dal Food Bank to make it easy for Food Bank volunteers and users to access service of Food Bank. Using this web application, Foob Bank members can make order of food products online. While placing order, user can choose date and time when to pick up the order in-person. From the Food Bank volunteers side, they can manage the products and their data. Moreover, they can see orders placed by users and can process the order.

### Assignment 2

Purpose of this assignment was to create a high fidelity prototype of four web pages for the web application. To satisfy the reqirements, I have created web pages listed below.

> *Note: I have added links to these four pages in the top of the website. Only reason for doing that is to provide access to admin pages. **They are not part of website.***

**1. Home Page**: This page contains list of products provided by Food Bank along with some details such as category and limit on the product. Searchbar is provided to search available product. User can filter the list according to category of the product from the list of categories on the left of the product list. Clicking on the cart icon in the product card will add the product in the cart.

**2. User Profile Page**: Users can see their information on this page. Apart from that, there is an option to change password is available on this. This page will display image of the user along with some personal information.

**3. Admin - Product Management**: This page will be accessible by user with admin and volunteer authority. It will contain a table that shows all the available products. Admin( and volunteers) can manage inividual product from this page. Table used to show the products supports pagination and sorting of items.

**4. Admin - Order Management**: All the orders placed by users will be listed in this page. There are filters available to filter the order according to their status. Status can be *Proccessing*, *Pending*, *Rejected* or *Completed*. The table in this page also supports pagination and sorting.

**5. 404 Page**: User will be redirected to this page when any invalid URL is entered.

---


## Getting Started

### Prerequisites

To have a local copy of  assignment up and running on your local machine, you will first need to install the following software and environment.

1. [Node JS](https://nodejs.org/en/download/)
2. [npm](https://www.npmjs.com/get-npm)
3. [Angular CLI](https://cli.angular.io/)
4. Editor (Preferred  - [Visual Studio Code](https://code.visualstudio.com/download))



### Installation

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

![Preview of Home](https://i.ibb.co/1ZkYfYb/Screenshot-from-2020-06-14-22-52-13.png)


## Built With


Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and [NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:


- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer), [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)

- Automatic code formatting with [Prettier](https://prettier.io)

  

#### Libraries

  

-  [Angular](https://angular.io)
-  [Angular Material](https://material.angular.io)
-  [Material Icons](https://material.io/icons/)
-  [RxJS](http://reactivex.io/rxjs)
-  [ngx-translate](https://github.com/ngx-translate/core)
-  [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

---
## Sources Used

### delete-dialog.component.ts

**Lines 10-18**

```ts
export class DeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Product) {}

  ngOnInit(): void {}

  confirm() {
    this.dialogRef.close(true);
  }
}
```
The code above was created by adapting the code in [Angular Material](https://material.angular.io/components/dialog/examples) as shown below: 

```ts
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


### prodcut-cart.component.ts

**Lines 22-33**

```ts
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

```ts
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

```ts
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

```ts
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

---

## Design Justifications

- **Navigation Bar**: Color of navigation bar is `#007BFF` ![#007BFF](https://via.placeholder.com/15/007BFF/000000?text=+). I have used this color because this is the color in most of the websites on the internet. Hence, users will feel it familiar while using the site.
 - **Footer**: Background color footer is black to differentiate with navigation bar. Dark color helps getting attention and create focus of text in the footer.
 - **Background of 404 Page**: I have used gradient similar to color of navigation bar. Gradient gives attractive look to the page and color of gradient matches with navigation to support common theme.
 - **Background of Profile Page**: The profile page was looking simple with just profile image and table with user details. Adding this image improved the look of the page.

---

## References

- [Navigation Bar](https://www.w3schools.com/bootstrap4/bootstrap_navbar.asp)
- [Material Icons](https://material.angular.io/components/icon/overview)
- [Material Table](https://material.angular.io/components/table/overview)
- [Material Card](https://material.angular.io/components/card/overview)
- [Material Dialogbox](https://material.angular.io/components/dialog/overview)
- [Material Snackbar](https://material.angular.io/components/snack-bar/overview)
- [Google Map](https://goo.gl/maps/Jb5tu61uEUrq3gdt9)
- [Social Media Icons](https://fontawesome.com/6?next=%2Ficons)

### Images

- [Product Image and Search Bar Image (Right Side)](https://www.themississaugafoodbank.org/)
- [404 Image](https://pngio.com/images/png-a503902.html)
- [Profile Page Background Image](https://wallpaperaccess.com/blue-orange)
- [Profile Image](https://www.vecteezy.com/vector-art/379094-edit-profile-vector-icon)
