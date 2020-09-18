// CARROUSELS
var $atracoesDesk = $('.atracoes-desk').flickity({
  prevNextButtons: false,
  pageDots: true,

  on: {
    ready: function () {
      console.log('Flickity is ready');
    },
    change: function (index) {
      console.log('Slide changed to' + index);

      if(index == 0){
        console.log("teste");
        $('.button--previous-atracoes').addClass("botaoOpacidadeAzul02");
        $('.button--next-atracoes').removeClass("botaoOpacidadeAzul02");
      }
      
      if(index == 1){
        $('.button--next-atracoes').addClass("botaoOpacidadeAzul02");
        $('.button--previous-atracoes').removeClass("botaoOpacidadeAzul02");
      }
    }
  }
});

// previous
$('.button--previous-atracoes').on('click', function () {
  $atracoesDesk.flickity('previous');
});
// next
$('.button--next-atracoes').on('click', function () {
  $atracoesDesk.flickity('next');
});

$('.atracoes').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  pageDots: true,
  prevNextButtons: false,
  fullscreen: true,
  lazyLoad: 1,
  fade: true
});


$('.depoimentos').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: true,
  prevNextButtons: false
});

const $depoDesk = $('.depoimentos-desk');

$depoDesk.flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  prevNextButtons: false,

  on: {
    ready: function () {
      console.log('Flickity is ready');
    },
    change: function (index) {
      console.log('Slide changed to' + index);

      if(index == 0){
        console.log("teste");
        $('.button--previous-depoimentos').addClass("botaoOpacidade");
        $('.button--next-depoimentos').removeClass("botaoOpacidade");
      }
      
      if(index == 1){
        $('.button--next-depoimentos').addClass("botaoOpacidade");
        $('.button--previous-depoimentos').removeClass("botaoOpacidade");
      }
    }
  }
});

// previous
$('.button--previous-depoimentos').on('click', function () {
  $depoDesk .flickity('previous');
});
// next
$('.button--next-depoimentos').on('click', function () {
  $depoDesk .flickity('next');
});

$('.quemParticipou').flickity({
  // options
  cellAlign: 'center',
  pageDots: true,
  prevNextButtons: false
});

$('.passosAjudar').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: true,
  prevNextButtons: false
});


// MENU MOBILE

const iconeMenu = $("#menu-mobile");
const menuMobile = $(".menu-mobile-links");
const btnFecharMenu = $("#btn-fechar-menu");

iconeMenu.click(function(){
  menuMobile.slideDown();
});

btnFecharMenu.click(function(){
  menuMobile.fadeOut();
})


// VALIDACAO FORM
$("#form-ingresso").validate({
  rules: {
    nome: {
      required: true,
      minlength: 3
    },
    email: {
      required: true,
      email: true
    }
  },

  messages: {
    nome: {
      required: 'Este campo está vazio',
      minlength: 'Ops, esse campo precisa ter mais de 3 caracteres'
    },
    email: {
      required: 'Este campo está vazio',
      email: 'Insira um e-mail válido'
    }
  }
});

$("#form-ingresso").validate();
