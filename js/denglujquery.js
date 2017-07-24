$(document).ready(function(){
$("#menu_open").click(function() {
	/* Act on the event */
    $("#sidebar").animate({width:'220px'},300);
    $("body").animate({width:'90%'}, 300);
    $(".login").animate({left:'165px'},300);
    $(".menu").animate({left:'235px'},300);
    $("#menu_open").animate({right:'70px'},300);
});
$("#closemenu").click(function() {
	/* Act on the event */
    $("#sidebar").animate({width:'0px'},300);
    $("body").animate({width:'100%'}, 300);
     $(".login").animate({left:'240px'},300);
      $(".menu").animate({left:'310px'},300);
      $("#menu_open").animate({right:'45px'},300);
});

});
