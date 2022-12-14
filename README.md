# Progress so far

## Summary

- Created state for imageUrls and created component to display those URLs

## Todo

- Finish reading Redux overview
  - https://redux.js.org/tutorials/essentials/part-1-overview-concepts
- Build a simple working image adder and scroller first
  - Then organize js files in an extensible structure: features directories
    should not have components in them. Keep components separate so they can
    use arbitrary store slices.
- Build initial plain slideshow with upload functionality and deploy to AWS
- Need to think through how pictures will be added to the slideshow
  - Should build mechanism to fetch any new pictures uploaded while slideshow is playing (infinite slideshow)


## References
- https://github.com/reduxjs/redux-essentials-counter-example/blob/master/src/features/counter/counterSlice.js
- https://react-redux.js.org/tutorials/typescript-quick-start

## Names
- Gingko biloba
  - gingko.me



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
