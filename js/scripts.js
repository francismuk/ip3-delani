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
