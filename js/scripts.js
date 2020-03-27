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

    if (age <= 16) {
      alert("Get outside kid!");
      $("#intro").show();
      $("#csharp").hide();
      $("#ruby").hide();
    } else if (age >= 75) {
      $("#intro").show();
      $("#csharp").hide();
      $("#ruby").hide();
    } else if (
      preference === "elegance" || preference === "simplicity" && brainType === "art")
     {
      $("#ruby").show();
      $("#csharp").hide();
      $("#intro").hide();
    } else {
      $("#csharp").show();
      $("#ruby").hide();
      $("#intro").hide();
    }
    event.preventDefault();
  });
});
