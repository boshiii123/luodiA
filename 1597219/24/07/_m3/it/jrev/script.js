$(document).ready(function(){function e(e){$("html, body").animate({scrollTop:e},1e3)}setTimeout(e($(document).height()),2e3),$(".btn").on("click",function(){$(this).closest(".step").hide().next(".step").fadeIn(),e(200)}),$(".option").on("click",function(){$(this).toggleClass("checked tr-selected")})})