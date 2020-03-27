$(document).ready(function() {
  $("form#language").submit(function(event) {
    var age = parseInt($("input#age").val());
    console.log(age);
    var preference = $("#preference").val();
    console.log(preference);
    var brainType = $("input:radio[name=brainType]:checked").val();
    console.log(brainType);
    var startDate = $("#startDate").val();
    console.log(startDate);
    var favoriteColor = $("#color").val();
    console.log(favoriteColor);
    event.preventDefault();
  });
});
