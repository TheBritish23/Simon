import { Simon } from './Simon';
import './styles.css';

$(document).ready(function() {
  $('#Simon-form').submit(function(event) {
    event.preventDefault();
    var action = $('#action').val();
    var output = Simon(goal);
      output.forEach(function(element) {
        $('#instruction').append("<li>" + element + "</li>");
      });
    });
  });
