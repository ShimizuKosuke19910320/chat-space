$(function(){

  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();

    $.ajax({
      url: "/users",
      type: "GET",
      data: { keyword: input },
      dataType: "json"
    })
      .done(function(users) {
        console.log("success");
      })
      .fail(function() {
        console.log("failure");
      });

    });

});