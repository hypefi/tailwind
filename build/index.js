//import $ from 'jquery';
//import $ from './libs/jquery/dist/jquery.js'
/*
function navToggle() {
    var btn = document.getElementById('button1');
    var nav = document.getElementById('flyout1');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}*/

$("#flyout1").css('visibility','hidden')
$("#flyout2").css('visibility','hidden')





$("#button1").hover(()=> {      $("#flyout1").css('visibility','visible'); $("#flyout1").fadeIn( 100 )});
//$("#flyout2").hover(()=> {   $("#flyout2").show()}, ()=> $("#flyout2").fadeOut( 500 ));
$( "#flyout1" ).mouseleave(()=> $("#flyout1").fadeOut( 500 ))
$( "#button1" ).mouseleave(() => setTimeout(function() {
        $("#flyout1").hide()
    }, 5000));


$("#button2").hover(()=> {      $("#flyout2").css('visibility','visible'); $("#flyout2").fadeIn( 100 )});
//$("#flyout2").hover(()=> {   $("#flyout2").show()}, ()=> $("#flyout2").fadeOut( 500 ));
$( "#flyout2" ).mouseleave(()=> $("#flyout2").fadeOut( 500 ))
$( "#button2" ).mouseleave(() => setTimeout(function() {
        $("#flyout2").hide()
    }, 5000));
