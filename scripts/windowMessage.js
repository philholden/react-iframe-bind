import ClickCounterDispatcher from './dispatcher/ClickCounterDispatcher';

export default function windowMessage(message) {
  let allButMe = [];
  for (let i = 0; i < parent.frames.length; i++) {
    allButMe.push(parent.frames[i]);
  }
  allButMe.push(parent);
  allButMe.splice(allButMe.indexOf(window),1);
  allButMe.forEach(function(win){
    win.postMessage(message, '*');
  });
}

window.addEventListener("message", function(e){
  ClickCounterDispatcher.dispatch(e.data);
}, false);