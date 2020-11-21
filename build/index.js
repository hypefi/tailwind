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


$("#button1").hover(fadeIn, fadeOut);

function fadeIn() {
      $("#flyout1").css('visibility','visible')
      $("#flyout1").fadeIn( 100 );
  }

function fadeOut() {
      $("#flyout1").fadeOut( 100 );
  }


$("#button2").hover(()=> {      $("#flyout2").css('visibility','visible'); $("#flyout2").fadeIn( 100 )}, ()=> $("#flyout2").fadeOut( 100 ));

