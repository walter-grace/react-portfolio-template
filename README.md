# React Portfolio Template

SEE IT RUNNUNG: https://joeboylson.github.io/react-portfolio-template/

The goal of this project was to take the Create React App and apply a template over it specifically for a portfolio website (it could be used for other things as well). I tried to keep the CSS to a minimum but give a nice layer of usable UI so anyone can quickly plug in a few pages and publish.

Many projects use React Router, but I decided to implement a simpler solution. With React.CSSProperties and React.useState, I was able to implement a "routing" system that boils down to pure CSS (i.e. translateX and opacity). This reduces the size of the entire application and allows for nice page-to-page animations (also with CSS).

Here's how the routing system works:

> In App.tsx, there is a state variable simply called `page`. It holds a number (0-3 in the default template). Through the use of the React useState hook, you can change this number with `setPage()`

```
const [page, setPage] = React.useState(0)
```

> On the same page, there is a function called `pageStyle()` that return a React.CSSProperties variable. This function compares the passed value `pageNumber` with `page`. If they are the same, the page will appearmove into the viewport - otherwise it will move out of the viewport.

```
// hide page if not current page
const pageStyle = (pageNumber:number) => {
  return {
    transform: `translateX(${ pageNumber === page ? '0' : '-100%' })`,
    opacity: `${ pageNumber === page ? '1' : '0' }`,
  } as React.CSSProperties;
}  
```

> This is a simple solution that I really like - and the fact that it uses CSS is also pretty great.

I've used no additional packages for in this solution, with the exception of Ant Design's `ants` package - and I've only used it for an icon (the nav icon).

---

To run, make sure you have yarn installed: https://www.npmjs.com/package/yarn
```
$ yarn -v
1.15.2 

# your version maybe different but that's probably OK
```

Next run `yarn install` which will install all the necessary packages.

And finally, to run the app, simple use the Create React App commands:

(copied straight from the create-react-app repo - it explains it the best and has some useful links)

///

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
