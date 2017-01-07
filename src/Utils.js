'use-strict';

import * as THREE from 'three';
import { scene, camera, renderer, animatedObjects } from './init';

var manager = new THREE.LoadingManager();
export var textureLoader = new THREE.TextureLoader(manager);
export var jsonLoader = new THREE.JSONLoader(manager);
export var objectLoader = new THREE.ObjectLoader(manager);
var loadingMsgs = [
  'My other load screen is much faster',
  'Wait, I need to get to a save spot....',
  'Reticulating Splines',
  'Re-Reticulating Splines',
  "Locating the required gigapixels to render...",
  "Spinning up the hamster...",
  "Shovelling coal into the server...",
  "Programming the flux capacitor",
  "At least you're not on hold",
  "Please Wait, we're testing your patience",
  "It's still faster than you could draw it!",
  "Do you suffer from ADHD? Me neith- oh look, a bunny... What was I doing again? Oh, right. Here we go.",
  "I should have compiled V8 this morning.",
  "Development load screens are much funniers.",
  "Scanning your hard drive for pr0n. Please be patient...",
  "Oh hey, we can wait together ",
  "Congratulations!",
  "It is pitch black. You are likely to be eaten by a grue.",
  "Working... unlike you!",
  "ERROR: msg undefined",
  "deterministically simulating the future.",
  "null",
  "You are in a maze of twisty loading screens, all alike...",
  "Generating next funny line...",
  "Entertaining you while you wait...",
  "Improving your reading skills...",
  "Dividing eternity by zero, please be patient...",
  "Just stalling to simulate activity...",
  "Loading new loading screen.",
  "Transporting you into the future one millisecond at a time..."

];

// Touch
export function touchMove (event) {
  event.preventDefault();
  camera.touchScroll(event);
}

export function touchEnd (event) {
  camera.touchEnd(event);
}

// Mouse
export function mouseWheel(event){
  event.preventDefault();
  camera.mouseScroll(event);
}

export function mouseMove(event){
  // event.preventDefault();
  camera.mouseMove(event);
  // console.log('mousemove');
}

export function mouseDown(event){
  camera.mouseDown(event);
}

export function mouseUp(event){
  camera.mouseUp(event);
}

export function click(event){
  camera.click(event);
}

// Key
export function keyUp(event){
  // console.log('keyUp');
  camera.keyUp(event);
}

export function keyDown(event){
  camera.keyDown(event);
}

// Utility
export function randNum(min, max) {
  return Math.random() * (max - min + 1) + min;
}

export function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

export function easeOutQuint(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 5) + 1) + startValue;
}

export function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}

export function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval( () => {
        if (op <= 0.01){
            element.style.display = 'none';
            element.style.zIndex = `-1`;
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op -= op * 0.1;
    }, 50);
}

// Loading Manager
var loading = false;
manager.onProgress = function (/*item, loaded*/) {
  if(!loading){
    loading = true;
    loadingAnimation();
  }
};

manager.onLoad = function () {// Completion
  loading = false;
  document.body.appendChild( renderer.domElement );
  fade( document.getElementById('overlay'));
};

manager.onError = function () {
  console.log('there has been an error');
};

function loadingAnimation(){
  if(loading){
    var num = ~~randNum(0, loadingMsgs.length - 1);
    document.getElementById('overlay').innerHTML = loadingMsgs[num];
    setTimeout(loadingAnimation, 1000);
  }
}
