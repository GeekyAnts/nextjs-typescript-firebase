# Description

A boilerplate for [Next.js](https://nextjs.org/) App.

- This boilerplate is built using [Next.js](https://nextjs.org/) Server Side Rendering(SSR), and have used [Typescript Lang](https://www.typescriptlang.org/) for writing the app's logic.
- It uses the [Redux state management](https://redux.js.org/), this helps us to have a global and presistent store all along our application .
- For Authentication , Database and Storage, this repo contains the use of [Firebase](https://firebase.google.com/) (ie. [Firebase Authentication](https://firebase.google.com/products/auth/) , [Firebase Realtime Database](https://firebase.google.com/products/realtime-database/) and [Cloud Storage for Firebase](https://firebase.google.com/products/storage/) ).
- For styling we are using [SASS lang](https://sass-lang.com/) and [Bootstrap Libraries](https://getbootstrap.com/)

# Contents

- [Global Requisites](#global-requisites)
- [App Structure](#app-structure)
- [Install, Configure & Run](#install-configure--run)
- [Screens](#screens)

# Global Requisites

- next (>=7.0.2)
- firebase (>=5.7.2)

# App Structure

> _Note: I am mentioning only files/folders which you need to configure if required_

```bash
├── pages
│   ├── profile
│   │   ├── details-update.tsx
│   │   └── picture-update.tsx
│   ├── _app.tsx
│   ├── dashboard.tsx
│   ├── forgot-password.tsx
│   ├── index.tsx
│   ├── reset-password.tsx
│   ├── signin.tsx
│   └── signout.tsx
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── CheckAuth.tsx
│   │   │   ├── FotgotPassword.tsx
│   │   │   ├── RefreshToken.tsx
│   │   │   ├── Signin.tsx
│   │   │   └── Signup.tsx
│   │   ├── Navigation
│   │   │   └── NavBar.tsx
│   │   └── Profile
│   │       ├── ProfileDetailsUpdate.tsx
│   │       └── ProfilePictueUpdate.tsx
│   ├── firebase
│   │   ├── auth.ts
│   │   └── userInterfaces.ts
│   ├── interfaces
│   │   ├── auth.ts
│   │   └── index.ts
│   ├── redux
│   │   ├── actions
│   │   │   ├── index.ts
│   │   │   └── userActions.ts
│   │   ├── reducer
│   │   │   ├── authReducers.ts
│   │   │   ├── index.ts
│   │   │   └── userReducers.ts
│   │   └── store
│   │       └── index.ts
├── styles
│   ├── bootstrap
│   └── main.scss
├── .babelrc
├── .gitignore
├── .tsconfig.json
├── firebaseConfig.json
├── next.config.json
├── package.json
├── README.md
├── typings.d.ts
```

# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

> Note: It is preassumed here that you have mongoose running in background & you have created the database.

```bash
# Clone the repo.
git clone https://git.geekyants.com/products/nextjs-typescript-firebase;

# Goto the cloned project folder.
cd nextjs-typescript-firebase;

# Install NPM dependencies.
# Note: You can review the list of dependencies from the below link.
# https://github.com/faizahmedfarooqui/nodets/network/dependencies
npm install;

# Edit your firebaseConfig.json file using any editor of your choice.
# Please Note: You should add all the configuration values provided by
# firebase console , otherwise App will crash
vim firebaseConfig.json;

# Run the app
npm run dev;
```

# Further Steps

### Adding a page

- To add a new page , create a new file named `<your-page-name>.tsx`
- You can further import your own React Components and use it under `render` fnction

### Setting Up Firebase

- Create a new project in [Firebase Console](https://console.firebase.google.com/) ,
  if you haven't already
- Enable `Authentication (Password Based)` , `Database` and `Storage` on your project
- copy and paste your api credentials in `firebaseConfig.json`
- To add a table of your own go to your Firebase project -> database -> create database , again ,
  if you haven't already
- Use the following code under your project to update/create a table

```tsx
import firebase from 'src/firebase';
const ref = firebase
  .database()
  .ref()
  .child('table-name');
ref.child('unique-name-for--the-entry').set(/* table fields*/);
```

- To get the data from firebase table use

```tsx
var Id = id; //unique-name-for--the-entry
firebase
  .database()
  .ref('/table-name/' + userId)
  .once('value')
  .then(function(snapshot) {
    const data = snapshot.val();
    //perform operation on data here
  });
```

# Note

if you wish to fetch data in getInitialProps of a page , make sure you have enabled CORS on your
server , alternatively you can use this chrome extension
[Allow-Control-Allow-Origin: \*](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

# Screens

### SignIn Page

![SignIn Page](/screens/Signin.png)

> Note: This page contains signin form and prefetched data from `https://cat-fact.herokuapp.com/facts`

### SignUp Page

![SignUp Page](/screens/Signup.png)

### ForgotPassword Page

![ForgotPassword](/screens/ForgotPassword.png)

### Dashboard Page

![Dashboard Page](/screens/Dashboard.png)

### With Dropdown Menu

![Dashboard Page with Dropdown Menu](/screens/DashboardWithDropdown.png)

### Profile Details Update Page

![Profile Details Update](/screens/ProfileDetailsUpdate.png)

### Profile Picture Update Page

![Profile Picture Update](/screens/ProfilePictureUpdate.png)

### Reset Passsword Page

![Reset Passsword](/screens/ResetPassword.png)
