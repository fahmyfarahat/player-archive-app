# Player Archive App


##### Application overview
Player Archive App consists of components and one main container `App`. Uses React as UI Library, Redux as a state container and Sass as css preprocessor.

###### Components
Components are the key element of the application, and their importance comes from reusability. Components must be decoupled from the data itself, and should be generic to handle many types of data according to their instructions.

###### Containers

Containers are opposite when it comes to handling data, Containers must be aware of the type of data and act upon them. That's why I use stateful components to represent containers because they care about the application state. On the other hand, components are stateless

###### Naming Convention

_file naming convention_

I use the dashCase convention.

##### Player Archive App includes:

###### development
- Stand alone node server for providing player and profile endpoints.
- Unit tests with `jest` and `enzyme`
- `create-react-app` for set up the App.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.
---

##### Main Dependencies

| **Dependency** | **Use** |
|----------|-------|
|react-bootstrap| UI framework|
|react|React Library|
|react-dom|React library for DOM rendering|
|redux|Library for unidirectional data flows|
|react-redux|Redux library for connecting React components to Redux|
|redux-promise|Promise middleware for Redux|
|redux-thunk|Async Redux wrapping action creators|
|prop-types|Runtime type checking for React props|
|express|For providing server endpoint|
