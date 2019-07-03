$(document).ready(main);

var contador = 1;

function main (){
  $('.bt-menu').click(function(){
    if (contador == 1) {
      contador = 0;
      $('.menu').css("display", "block");
    } else {
      contador = 1;
      $('.menu').css("display", "none");
    }

  });

};
