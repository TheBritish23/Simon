import { Simon } from './Simon';
import './styles.css';

$(document).ready(function() {
  $('#Simon-form').submit(function(event) {
    event.preventDefault();
var say;

function myFunction() {
  say = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("DO DIS!");
}
  };
