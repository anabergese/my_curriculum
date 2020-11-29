$(document).ready(function(){
  $("h6").click(function(){
    $(this).hide();
  });
});


$("#education .text1").hide();

$(".title1").on("click", function() {
  $("#education .text1").slideToggle( "slow", "linear" );
});



$("#education .text2").hide();

$(".title2").on("click", function() {
  $("#education .text2").slideToggle( "slow", "linear" );
});


$("#education .text3").hide();

$(".title3").on("click", function() {
  $("#education .text3").slideToggle( "slow", "linear" );
});



$("#education .text4").hide();

$(".title4").on("click", function() {
  $("#education .text4").slideToggle( "slow", "linear" );
});
