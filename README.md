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
* Sharing a component's `class` on the parent iframe with children on the same domain by exposing it on the parent's `window` object and instantiating it with the child's `React` instance. It will render using data from the parent's store while DOM is handled on the child. The child will stay in sync with the parent when the child frame is reloaded. And no references to unloaded child should be left on parent. _You could not share a directive in this way in Angular but this demo show how you and share a `factory` between iframes and bind digest cycles together [here](http://plnkr.co/edit/NX66ER0oRpy9fzBrYuTi?p=preview)_
* A component communicating with an iframe loaded from a different domain using window message events (security restrictions prevent sharing of objects between domains). The child has its own store so if you reload this child the store will be reset to 0.
* The use of wrapper components to separate data marshalling and rendering concerns
* [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) to allow html templates in JS
* ES6 cross compiled to ES5 (using [Babel](https://babeljs.io/)) to work in old browsers, use of ES6 imports
* Compiling SASS to CSS and using JS to dynamically inject styles into the page
* Use of [Webpack](http://webpack.github.io/) to dynamically package and stream dependencies.
* Use of npm simultaneously as a client and server side package manager.
* The use of flex-box only to create a flexible layout. Have a look at the CSS. To get this working in IE11 you will need to change `min-height: 100%` to `height: 100%`.

Also check out the `react-style` branch this demonstrates using [react-style](https://github.com/js-next/react-style) to style components using in line styles. This provides style isolation for components meaning you do not need to litter your markup with classes purely to apply styles to them. Note react-style is not needed for inline styles [it can be done with plain React](https://facebook.github.io/react/tips/inline-styles.html).

### Using `0.0.0.0` as Host

You may want to change the host in `server.js` and `webpack.config.js` from `localhost` to `0.0.0.0` to allow access from same WiFi network. This is not enabled by default because it is reported to cause problems on Windows. This may also be useful if you're using a VM.

This demo was started from [React Hot Boilerplate](https://github.com/gaearon/react-hot-boilerplate). When editing your changes will appear without reloading the browser like in [this video](http://vimeo.com/100010922).

Note it just reloads the files that change not the whole app this is great if your app has a login you don't need to keep logging in ([see video](https://vimeo.com/100010922)).
