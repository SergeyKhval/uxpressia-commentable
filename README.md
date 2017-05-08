# Restaurant reviewer built with react and firebase

## Installation
```javascript
$ npm install
```

## Running in dev mode
```javascript
$ npm start
```

## Building for production
```javascript
$ webpack --config webpack/common.config.js
```

The built project will be placed into `dist` directory. 

## Running production version

To run this project in production you will need any simple server.
For example you can use `simpleHTTPserver` module from python.
 
 ```bash
 $ cd dist
 $ python -m SimpleHTTPServer 8000
 ```

Now head to `localhost:8000` and voila!
