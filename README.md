# This is my JavaScript Frameworks course assignment.

It was created to demonstrate the skills I acquired from the JavaScript Frameworks course.

<div align="center">
  <img alt="A screenshot of what the app looks like." src="https://res.cloudinary.com/lisaur/image/upload/v1678217823/jsf_ca_xij6dz.png" width="400px" />
</div>

## Contents

In this ReadMe file you will find information on:

-   [App Functionality - The user stories included in the app.](#app-functionality)
-   [Technical Details - Frameworks used to build the app.](#technical-details)
-   [Get Started - Run the app locally.](#get-started)
-   [Available Scripts.](#available-scripts)

## App Functionality

The purpose of this app is to display posts from an WordPress blog, and allow an admin user to login.

-   The Home page displays a list of posts.
-   The user can click on and view a single post.
-   The user can fill in a contact form.
-   An admin user can login to the app.
-   The navigation changes and the admin panel is accessible to logged in users.

I created and hosted a WordPress blog for this assignment.

## Technical Details

🔹 This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

🔹 It uses [React](https://reactjs.org/) version 18.2.0.

🔹 [Node modules](https://www.npmjs.com/package/node-modules) are version 9.4.2.

🔹 The app uses the routing library [React Router](https://reactrouter.com/en/main).

🔹 All forms are [React Hook Form](https://react-hook-form.com/).

🔹 All forms are validated with [Yup](https://www.npmjs.com/package/yup).

🔹 API calls are made with [Axios](https://axios-http.com/).

🔹 The app is styled with [React Bootstrap](https://react-bootstrap.github.io/).

🔹 Additional styling is made with [Sass](https://sass-lang.com/).

## Get Started

To run this app in development mode locally, you need to:

1. Clone this repository.

```bash
git https://github.com/lisauhlen/lisa-ryssevik-js-frameworks-ca.git
```

2. Install node modules:

```bash
npm i node-modules
```

3. You can now run the app on your localhost:

```bash
npm start
```

This will run the app in development mode.

To view the app in your browser, go to [http://localhost:3000](http://localhost:3000).

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Available Scripts

In the project directory, you can also run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
