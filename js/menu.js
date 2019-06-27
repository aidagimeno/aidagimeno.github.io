$(document).ready(main);

var contador = 1;

function main (){
  $('.bt-menu').click(function(){
    if (contador == 1) {
      contador = 0;
      $('.menu').animate({
        left: '60%'
      });
    } else {
      contador = 1;
      $('.menu').animate({
        left: '140%'
      });
    }

  });

};
