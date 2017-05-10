# Uxpressia commentable module

## Installation and running

```
$ npm install
$ npm start
```

Now the application will be available at `http://localhost:4000`

## Usage

Home page file is `/src/modules/Home/index.js`

Wrap any DOM or react component into `<Commentable objectId={[UNIQUE_ID]} />` and that's it

```
<Commentable objectId="1">
  <img src="http://lorempixel.com/400/200/sports/" width={400} height={200} alt="placeholder"/>
</Commentable>
```

## Tech stack

- React for templating and DOM management
- Redux for state management
- Material UI for UI components
- Firebase for data storage
- Webpack for building and bundling

React was chosen for its robust and quick DOM management capabilities
as well as reactive architecture. 


Redux is used because of its reasonable data flow approach 
and easy access to shared state across different react components.

Material UI is a collection of UI components that follow Material Design specification.

Firebase is great for quick data prototyping without a need to deploy backend for the app.

Webpack gives us possibilities to use modern app architectures
(ES6) and bundle all our modules together.
