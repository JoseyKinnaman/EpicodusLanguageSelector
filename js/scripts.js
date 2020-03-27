$(document).ready(function() {
  $("form#language").submit(function(event) {
    var age = parseInt($("input#age").val());
    console.log(age);
    event.preventDefault();
  });
});
