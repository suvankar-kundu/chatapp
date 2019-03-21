# chatapp
Simple chat based application using MEAN Stack

This will be a MEAN stack(Angular+Node.js+MongDB) based project. The following must be used when building this project:

* MongoDB 4.0+
* Angular 6+
* Nodejs v8.11.3+
* Other dependencies are mentioned in [package.json]

## Prerequisites

- [Npm](https://docs.npmjs.com/cli/install)
- [MongoDB](https://www.mongodb.com/download-center)
- [Nodejs](https://nodejs.org/en/)
- [angular-cli](zasaqwwaaqw2aerrqea11qre1123q1https://github.com/angular/angular-cli/wiki)
- A bash shell on Linux or Windows
- [Git](https://git-scm.com/downloads)
- Internet connection to fetch the software directly from Git
- Nodemon or pm2 tool for run nodejs server

### Create a configuration file for your application

```bash
cd root/server folder
cp .env.template .env
```

Edit `.env` with the configuration parameters we gathered from above.


### To run the application

Run the following command inside **root/server** folder
and leave the terminal open.

* To run in developer
```
npm run local
```

* To run in production
```
npm run production
```

### To create an Super Admin

Run the following command inside **root/server** folder.

```
npm run db:seedUser
```

Details of Super Admin:

```
First name: "Super"
Last name: "Admin"
Email: "admin@chatapp.com"
Mobile no: "123456789"
Username: "superadmin"
Password: "Superadmin123#$"



