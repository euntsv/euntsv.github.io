$(function(){
$( "#button, #button2, #button3").button();
$("#button").on("click", function() {
  alert("You clicked on button Home");
});
$("#button2").on("click", function() {
  // alert("You clicked on button News");
  location.href = "http://www.google.com";
});
$("#button3").on("click", function() {
    $( "#dialog" ).dialog( "open" );
  event.preventDefault();
});
$( "#dialog" ).dialog({
  autoOpen: false,
  width: 400,
  buttons: [
    {
      text: "Ok",
      click: function() {
        $( this ).dialog( "close" );
      }
    },
    {
      text: "Cancel",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
  ]
});
$("#up").on("click", function() {
        event.preventDefault();
        $('body,html').animate({scrollTop: 0}, 400);
});
$("#down").on("click", function() {
        event.preventDefault();
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 400);
});









});
