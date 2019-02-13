
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

<br>

When Application initializes user must login using their Youtube/Google account in order to load data from API

> i used a newly-created, demo account: `mftechexercise@gmail.com` that I loaded w/ (25) random subscriptions on [Youtube](https://youtube.com)

After authenticating, the Home screen will load the user's (first) channel info, and subscriptions:

![screenshot-v1.0.0](https://github.com/rounding8/mf-tech-exercise/blob/master/docs/screenshot-v1.0.0.jpg)

### Assumptions / Known Behavior

This Application is very MVP (demo, and all) so there's some things to keep in mind w/ its current functionality and data handling:

- It will load the user's first channel only; if the user has multiple channels, [only the first result's data is used](https://github.com/rounding8/mf-tech-exercise/blob/master/src/container/home/index.jsx#L89)
  - this is partly because my poor internet connection was too frustrating to try and create multiple channels for this demo account, but also because the UX for Youtube's Settings is a bit whack

- I would've liked to add a pagination feature, but demo/time and all; thus, [the home screen will only load up to 50 results](https://github.com/rounding8/mf-tech-exercise/blob/master/src/container/home/index.jsx#L114)

<br>
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
|- docs/                // Project Documentation, (screenshots) assets, etc.
|- node_modules/        // Packages installed via Yarn (dependencies & devDependencies)
|- public               -- Public assets
  |- css
    |- app.css          // Main CSS Source of app styles; imports child CSS modules
    |- ...
  |- html
    |- index.html       // Main HTML Source
  |- img
|- src                  -- React Components
  |- component          // Generic reuseable component classes (header, menu, dropdown, table, lists, etc.)
    |- columns          // https://bulma.io/documentation/columns/basics
    |- media            // https://bulma.io/documentation/layout/media-object
  |- container          // Main Section Parent Component Class Containers
    |- home             // Landing Page content (i.e. User's Youtube Channel, Subscriptions, etc.)
    |- menu             // Navbar
  |- session
      |- settings.js    // Application Execution Settings per Environment (Production, Development, etc.)
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
| 1.0.0   | 02-13-19 | [73060af](https://github.com/rounding8/mf-tech-exercise/commit/73060af2bbff61a6bfe4749cba252562e9813eba) | Initial Release |
| 0.1.0   | 02-11-19 | [2822ecc](https://github.com/rounding8/mf-tech-exercise/commit/2822ecc7cb451f54ed55f73b5ab627950e0b12c7) | Feature - Social Media API Handling |
| 0.0.0   | 02-06-19 | [ac4f666](https://github.com/rounding8/mf-tech-exercise/commit/ac4f666f49ce797ebe83d68b68d524069bb29f75) | 🎉  Initial commit |

