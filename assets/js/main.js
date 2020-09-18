// CARROUSELS
var $atracoesDesk = $('.atracoes-desk').flickity({
  prevNextButtons: false,
  pageDots: true
});

// previous
$('.button--previous-atracoes').on('click', function () {
  $atracoesDesk.flickity('previous');
});
// next
$('.button--next-atracoes').on('click', function () {
  $atracoesDesk.flickity('next');
});

var $depoimentosDesk = $(".depoimentos-desk").flickity({
  prevNextButtons: false,
  pageDots: false
});

// previous
$('.button--previous-depoimentos').on('click', function () {
  $depoimentosDesk.flickity('previous');
});
// next
$('.button--next-depoimentos').on('click', function () {
  $depoimentosDesk.flickity('next');
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

$('.depoimentos-desk').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  prevNextButtons: true,

  on: {
    ready: function () {
      console.log('Flickity is ready');
    },
    change: function (index) {
      console.log('Slide changed to' + index);

      if(index < 0){
        console.log("PQPPPPPP")
      }
    }
  }
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
const iconeMenu = document.querySelector("#menu-mobile");
const menuMobile = document.querySelector(".menu-mobile-links");
const btnFecharMenu = document.querySelector("#btn-fechar-menu");

iconeMenu.addEventListener("click", () => {
  menuMobile.style.display = "block";
});

btnFecharMenu.addEventListener("click", () => {
  menuMobile.style.display = "none";
});


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
