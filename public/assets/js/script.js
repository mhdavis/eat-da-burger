$(document).ready(function() {

  $.ajax({
    method: "GET",
    url: "/api/burgers/"
  }).done(function(result) {
    for (let i=0; i < result.length; i++) {

      let $burgerBox = createBurgerBox(results[i]);
      if (result[i].devoured) {
        $(".eaten-list").append($burgerBox);
      } else {
        $(".to-eat-list").append($burgerBox);
      }
    }
  });

  $(document).on("click", "#burger-submit", function (event) {
    event.preventDefault();
    let $burgerInput = $("#burger-input").val();
    $.post("/api/burgers/", $burgerInput);
  });

  $(document).on("click", ".burger-devour", function (event) {
      event.preventDefault();
      $.put("/api/burgers/");
  });

  $(document).on("click", ".burger-delete", function (event) {
    event.preventDefault();
    let burgerId = event.target.id
  });

});

function createBurgerBox(burger) {
  let $div = $("<div>").addClass("burger-box");
  let $burgerTag = $("<p>").val(burger.id + ".) " + burger.name);
  let $deleteButton = $("<button>").addClass("delete-btn").val("X");

  $div.append($burgerTag);
  $div.append($deleteButton);
  
  if (!burger.devoured) {
    let $devourButton = $("<button>")
    .addClass("devour-btn")
    .val("Devour!");
    $div.append($devourButton);
  }

}
