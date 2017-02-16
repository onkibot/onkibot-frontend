### ONKIBOT-FRONTEND ###

# How to install:
1. Clone the repository
2. Open command line in local repository
3. Run `npm install`

# How to run local development server:
1. Run `npm start`.
2. Open browser to URL `localhost:3000`

The local development server will auto-refresh when code is changed.

# The stack:
- *Node.js*: A framework that hosts most of the frontend stack. It allows running tasks written in JavaScript.
- *Webpack*: Compiles multiple modules (JavaScript/CSS files) into a few static assets. This allows working with JavaScript code in multiple modules to keep things organized.
- *Webpack-dev-server*: Hosts the compiled files from Webpack, keeps the compiled files cached, and refreshes the browser when the files change. This allows highly efficient progress.
- *Babel*: Transpiles modern JavaScript to browser compatible JavaScript. Onkibot-froentend uses the so-called `stage-0`, which has the most modern (and also experimental) set of features.
- *React*: Used to create interactive user interfaces elegantly. This allows highly modular and elegant JavaScript code for UI.
- *Material UI*: A library of useful components to be used with React.
- *Redux*: Provides a useful interface for working with a page's state. This allows useful reasoning about state changes in the page.
- *React-Redux*: Binds React and Redux together to allow efficient UI responsiveness to state changes.
- *SASS*: Provides advanced CSS features.