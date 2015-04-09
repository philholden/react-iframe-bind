import ClickCounterDispatcher from './dispatcher/ClickCounterDispatcher';

export default function windowMessage(message) {
  let allButMe = Array.apply('slice',parent.frames);
  console.log(parent.frames.length,allButMe);
  allButMe.push(parent);
  console.log(allButMe.indexOf(window),allButMe);
  allButMe.splice(allButMe.indexOf(window),1);
  console.log('a',allButMe);
  allButMe.forEach(function(win){
    win.postMessage(message, '*');
  });
}

window.addEventListener("message", function(e){
  ClickCounterDispatcher.dispatch(e.data);
}, false);