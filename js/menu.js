$(document).ready(main);

var contador = 1;

function main (){
  $('.bt-menu').click(function(){
    if (contador == 1) {
      contador = 0;
      $('.menu').show();
    } else {
      contador = 1;
      $('.menu').hide();
    }

  });

};
