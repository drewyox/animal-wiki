$(document).ready(function() {
  $("#animalSelect").submit(function(event) {
    event.preventDefault();
    var animals = $("#animals").val();

    if (animals==="Snakes") {
      $("#snakey").show();
      $("#turley").hide();
      $("#salamy").hide();
    }

    else if (animals==="Turtles") {
      $("#turley").show();
      $("#snakey").hide();
      $("#salamy").hide();
    }
    else if (animals==="Salamanders"){
      $("#salamy").show();
      $("#snakey").hide();
      $("#turley").hide();
    }
  });
});
