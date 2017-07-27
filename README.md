# FinalProject

Welcome to the last of many execises and projects made for the Angular Bootcamp, sponsored by Yuxi Glogal.


## Architecture

* `AppModule` is the root module. include the App-routing module to add navigation into the app.
* `StudentModule` gots the core of the app, here you'll found the leaderboard, the detail for each student
        and the options to update, delete or create a new student
* SharedModule contains the `formComponent`, a dummy component to reuse in all forms in the app

- In the `StudentModule` you'll found the Student `Service` which calls the mock api to get/put/update/post data


- buttons-imputs-tables was generated with [Angular Material](https://material.angular.io/)

## Errata

* Creating the dummy component broke the `Create form` and is giving an error. We're working to solve this.

