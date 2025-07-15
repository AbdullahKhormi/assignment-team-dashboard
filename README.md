# Setup instructions
https://github.com/AbdullahKhormi/assignment-team-dashboard.git
git checkout master branch
npm i
npm install angular/material": "^17.3.10"
ng serve

for start json file use command ( json-server --watch data-team.json )

# Architecture overview
//apply lazy loading with routing

--srs --->
---layout folder -> // layout component include header component , routeroutlet
---shared folder -> include :
components folder -> include : dailog component reusable , header component reusable , welcome-box reusable and not-found component
services -> inclide: team-dashboard.service
styles -> include : team-dashboard.scss used for add-item and edit-item component style
---views folder -> include :
home folder
team-dashboard folder : include : add-item component (file.test) using karma, edit-item component and main files for folder (file.test) using karma
---assets folder ->
header folder -> include : icon-dahsboard.svg and dahsboard.svg

finally in src folder include :"
data-team.json for storage data // data change when apply CURD methods

# Any assumptions made
none
# Short reflection on the most challenging part
Required Testing:
● 1–2 unit tests using Jasmine/Karma
● 1 basic end-to-end test using Cypress or Playwright

# Explanation of AI tool usage:
chatgbt used for edit-item component files to add comments like add-item component
- used with ARIA attributes because first time used it
● Semantic HTML use tag same requirements
● ARIA labels
● Keyboard navigation

# TeamDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



