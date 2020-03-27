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
      $("#intro").slideToggle().show();
      $("#csharp").slideToggle().hide();
      $("#ruby").slideToggle().hide();
    } else if (age >= 75) {
      $("#intro").slideToggle().show();
      $("#csharp").slideToggle().hide();
      $("#ruby").slideToggle().hide();
    } else if (
      preference === "elegance" || preference === "simplicity" && brainType === "art")
     {
      $("#ruby").slideToggle().show();
      $("#csharp").slideToggle().hide();
      $("#intro").slideToggle().hide();
    } else {
      $("#csharp").slideToggle().show();
      $("#ruby").slideToggle().hide();
      $("#intro").slideToggle().hide();
    }
    event.preventDefault();
  });
});
