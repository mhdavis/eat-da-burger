// POST
$(document).on("click", "#burger-submit", function(event) {

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
    success: function(data) {
      window.location.reload();
    }
  });
});

// PUT
$(document).on("click", ".devour-btn", function(event) {
  event.preventDefault();
  let devouredId = $(this)
    .parent()
    .get(0)
    .id;

  let devouredName = $(this)
    .siblings('p')
    .children('span')[1]
    .innerText;

  let devouredBurger = {
    id: devouredId,
    name: devouredName,
    devoured: true
  };

  $.ajax({
    method: "PUT",
    url: "/",
    dataType: "json",
    data: devouredBurger,
    success: function(data) {
      window.location.reload();
    }
  });
});

// DELETE
$(document).on("click", ".delete-btn", function(event) {
  event.preventDefault();

  let deleteId = $(this)
    .parent()
    .get(0)
    .id;

  let deleteName = $(this)
    .siblings('p')
    .children('span')[1]
    .innerText;

  let deletedBurger = {
    id: deleteId,
    name: deleteName
  };

  $.ajax({
    method: "DELETE",
    url: "/",
    dataType: "json",
    data: deletedBurger,
    success: function(data) {
      window.location.reload();
    }
  });
});
