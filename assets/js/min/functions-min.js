function parallax(){if($("#js-parallax-window").length>0){var a=$("#js-parallax-background"),l=$("#js-parallax-window"),n=$(l).offset().top,o=$(window).scrollTop(),r=n-o,w=$(a).offset().top,i=window.innerHeight,p=w-o,t=i-p,s=.35;a.css("top",-(r*s)+"px")}}$(document).ready(function(){$("#js-parallax-window").length&&parallax()}),$(window).scroll(function(a){$("#js-parallax-window").length&&parallax()});