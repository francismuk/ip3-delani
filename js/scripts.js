$(document).ready(function () {
  $(".designhidden, .designshowing").click(function () {
    $(".designshowing").toggle();
    $(".designhidden").toggle();
  });
  $(".devhidden, .devshowing").click(function () {
    $(".devshowing").toggle();
    $(".devhidden").toggle();
  });
  $(".producthidden, .productshowing").click(function () {
    $(".productshowing").toggle();
    $(".producthidden").toggle();
  });
  $("#hovers1").hover(function(){
    $(this).css("background-color", "#FFB6C1");
    }, function(){
    $(this).css("background-color", "white");
  });
    $("#hovers2").hover(function(){
      $(this).css("background-color", "#FFB6C1");
      }, function(){
      $(this).css("background-color", "white");
  });
    $("#hovers3").hover(function(){
      $(this).css("background-color", "#FFB6C1");
      }, function(){
      $(this).css("background-color", "white");
  });
      $("#submit").click(function () {
        alert("Your message has been received!")
      })
  })
