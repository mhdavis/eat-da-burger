// POST
$(document).on("click", "#burger-submit", function (event) {

  event.preventDefault();

  let newBurger = {
    name: $("#burger-input").val(),
    devoured: false
  };

  $("#burger-input").val('');

  $.ajax({
    method: "POST",
    url: "/",
    dataType: "json",
    data: newBurger,
    success: function (data) {
        window.location.reload();
    }
  });
});

// PUT
$(document).on("click", ".burger-devour", function (event) {
    event.preventDefault();
    $.put("/");
});

$(document).on("click", ".burger-delete", function (event) {
  event.preventDefault();
  let burgerId = event.target.id
});

// HELPER FUNCTIONS
function createBurgerBox(burger) {
  let $burgerBox = $("<div>").addClass("burger-box");
  let $burgerTag = $("<p>").val(burger.id + ".) " + burger.name);
  let $deleteButton = $("<button>").addClass("delete-btn").text("X");

  $burgerBox.append($burgerTag);
  $burgerBox.append($deleteButton);

  // if burger is not devoured, give it a devour button
  if (!burger.devoured) {
    let $devourButton = $("<button>")
    .addClass("devour-btn")
    .text("Devour!");
    $burgerBox.append($devourButton);
  }

  // append burgerbox to appropriate receptical
  if (burger.devoured) {
    $(".eaten-list").append($burgerBox);
  } else {
    $(".to-eat-list").append($burgerBox);
  }
}
