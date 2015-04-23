Iframe Bind
=====================

Sharing components between iframes and and keeping them in sync

### Usage

```
npm install
npm start
open http://localhost:3000
```

### About

This demo demonstrates a few things:

* The [Flux](https://facebook.github.io/flux/docs/overview.html) pattern for communicating between stores and components.
* Sharing a component's class on the parent iframe with children on the same domain by exposing on the `window` object and instantiating it with the child's `React` instance. It will render using the parent's store and the child will stay in sync with the parent when the child frame is reloaded. _You can see and Angular implementation [here](http://plnkr.co/edit/NX66ER0oRpy9fzBrYuTi?p=preview)_
* A component communicating with an iframe loaded from a different domain using window message events (security restrictions prevent sharing of objects between domains). The child has its own store so if you reload this child the store will be reset to 0.
* The use of wrapper components to separate data marshalling and rendering concerns
* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) to allow html templates in JS
* ES6 cross compiled to ES5 (using [Babel](https://babeljs.io/)) to work in old browsers, use of ES6 imports
* Compiling SASS to CSS and using JS to dynamically inject styles into the page
* Use of [Webpack](http://webpack.github.io/) to dynamically package and stream dependencies.
* Use of npm simultaneously as a client and server side package manager.

Also check out the react style branch this demonstrates using `react-style` to style components using in line styles. This provides style isolation for components meaning you do not need to litter your markup with classes purely to apply styles to them.

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

This demo was started from [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate). When editing your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

Note it just reloads the files that change not the whole app this is great if your app has a login you don't need to keep logging in.

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

* [Demo video](http://vimeo.com/100010922)
* [react-hot-loader on Github](https://github.com/gaearon/react-hot-loader)
* [Integrating JSX live reload into your workflow](http://gaearon.github.io/react-hot-loader/getstarted/)
