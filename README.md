
# MF Tech Exercise by Raven N. Allan

### SPA that displays social media platform API request data

> This single-page web application uses latest development resources: React (v16) + Babel (v7) + webpack (v4)

<br>

## Development

```
$ git clone ssh://git@github.com:rounding8/mf-tech-exercise.git     # Clone Remote Repository
$ cd mf-tech-exercise/                                              # Change Directory to "mf-tech-exercise" of Local Repository
$ yarn                                                              # Install Application Dependencies via Yarn (or npm..)
$ yarn start                                                        # Execute in "Development" mode
```

> this is currently in progress, thwarted by my slow internet connection in the boonies of eastern WA w/ 🌨💨❄️

Here are a couple screenshots w/ it's current functionality, which has a Bulma Navmenu for users to login/authorize this app to access the Youtube Data API

I created a new Google/Youtube/Gmail account in order to build out this app, however because of my slow connection I haven't been able to add many videos to the account's playlist(s) yet.. stay tuned

> When Application initializes user must login using their Youtube/Google account in order to load data from API; i logged on using newly-created account `mftechexercise@gmail.com`

![screenshot-step-1](https://github.com/rounding8/mf-tech-exercise/blob/master/docs/screenshot-step-1.jpg)

> Current Output following Auth:

![screenshot-step-2](https://github.com/rounding8/mf-tech-exercise/blob/master/docs/screenshot-step-2.jpg)


<br>

## Deployment

```
$ yarn build            # Generates Production *dist* distribution index.html, bundle.js, etc.
```

<br>

## Structure

```
|- dist                 -- Webpack build of full-stack application
  |- index.html         // Single HTML Index File for Testing Progress SPA
  |- bundle.js          // Single webpack compiled source script of Application for Production
  |- styles.css         // Single webpack compiled source CSS of Application for Production
  |- ...                // Bundled assets to be included w/ dist (e.g. favicon.ico, custom font files, etc.)
|- node_modules/        // Packages installed via Yarn (dependencies & devDependencies)
|- public               -- Public assets
  |- css
    |- app.css          // Main CSS Source of app styles; imports child CSS modules
    |- ...
  |- html
    |- index.html       // Main HTML Source
|- src                  -- React Components
  |- component          // Generic reuseable component classes (header, menu, dropdown, table, lists, etc.)
    |- 
    |- <TBD>
    |- 
  |- container          // Main Section Parent Component Class Containers
    |- home
      |- index.jsx
  |- index.jsx          // Main webpack Entry
|- .gitignore           // Git repository tracking files & folders to ignore
|- LICENSE
|- package.json         // Resource for installing & managing Application dependencies
|- README.md            // Project Documentation & Code Development Management Reference
|- webpack.config.js    // webpack Build Configuration
|- yarn.lock
```

<br>

### Dependencies

| Resource                                                               | npm                                                              | Description / Implementation                                |
|------------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------|
| [Polyfill](https://babeljs.io/docs/usage/polyfill)                     | [@babel/polyfill](https://www.npmjs.com/package/@babel/polyfill) | Provides polyfills necessary for a full ES2015+ environment |
| [axios](https://github.com/axios/axios)                                | [axios](https://www.npmjs.com/package/axios)                     | Promise based HTTP client for the browser and node.js       |
| [Bulma](https://bulma.io)                                              | [bulma](https://www.npmjs.com/package/bulma)                     | CSS framework based on Flexbox                              |
| [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) | [prop-types](https://www.npmjs.com/package/prop-types)           | Runtime type checking for React props and similar objects   |
| [react](https://reactjs.org)                                           | [react](https://www.npmjs.com/package/react)                     | A JavaScript library for building user interfaces           |
| [ReactDOM](https://reactjs.org/docs/react-dom.html)                    | [react-dom](https://www.npmjs.com/package/react-dom)             | DOM-specific methods used at top level of application       |

<br>

> See additional [development dependencies](https://github.com/rounding8/mf-tech-exercise/blob/master/package.json#L31-L42)

<br>

## References

* [React Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [React on ES6+](https://babeljs.io/blog/2015/06/07/react-on-es6-plus)
* [webpack Configuration](https://webpack.js.org/configuration)

<br>

## Resources

* [Google API Console](https://console.developers.google.com)
* [Youtube API JavaScript Quickstart](https://developers.google.com/youtube/v3/quickstart/js)

<br>

## Chrome Dev Extensions

* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa)
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

<br>

## Changelog

| Version | Date     | Commit                                                                                                   | Description |
|---------|----------|----------------------------------------------------------------------------------------------------------|-------------|
| 0.1.0   | 02-11-19 | [2822ecc](https://github.com/rounding8/mf-tech-exercise/commit/2822ecc7cb451f54ed55f73b5ab627950e0b12c7) | Feature - Social Media API Handling |
| 0.0.0   | 02-06-19 | [ac4f666](https://github.com/rounding8/mf-tech-exercise/commit/ac4f666f49ce797ebe83d68b68d524069bb29f75) | 🎉  Initial commit |

