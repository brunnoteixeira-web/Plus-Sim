const dataVisivel = document.querySelector('.data-visivel');
const dataOculta = document.querySelector('.data-oculta');

if (dataVisivel) {
     // Define a data mínima como hoje
     const hoje = new Date();
     const yyyy = hoje.getFullYear();
     const mm = String(hoje.getMonth() + 1).padStart(2, '0');
     const dd = String(hoje.getDate()).padStart(2, '0');
     const hojeStr = `${yyyy}-${mm}-${dd}`;
     dataVisivel.min = hojeStr;
 
     dataVisivel.addEventListener('change', function () {
       const data = new Date(this.value + "T00:00:00");
 
       const dia = String(data.getDate()).padStart(2, '0');
       const mes = String(data.getMonth() + 1).padStart(2, '0');
       const ano = data.getFullYear();
 
       const formatado = `${dia}/${mes}/${ano}`;
       dataOculta.value = formatado;
     });
}

  document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.featured-collection-swiper')) {
      const swiper = new Swiper('.featured-collection-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freeMode: {
          enabled: true,
          sticky: false,
          momentumBounce: false
        },
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        breakpoints: {
          // Mobile configs
          320: {
            slidesPerView: 'auto',
            spaceBetween: 10,
            freeMode: {
              enabled: true,
              sticky: false
            }
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
            freeMode: {
              enabled: true,
              sticky: false
            },
            centeredSlides: false
          },
          // Desktop configs
          1024: {
            slidesPerView: 3.18, // Mostra 3 cards completos + parte do 4°
            spaceBetween: 15,
            centeredSlides: false,
            initialSlide: 0,
            freeMode: {
              enabled: true,
              sticky: false,
              momentumRatio: 0.4
            }
          },
          1280: {
            slidesPerView: 3.15, // Mostra 3 cards completos + parte do 4°
            spaceBetween: 20,
            centeredSlides: false,
            initialSlide: 0,
            freeMode: {
              enabled: true,
              sticky: false,
              momentumRatio: 0.4
            }
          },
          1440: {
            slidesPerView: 3.12, // Mostra 3 cards completos + parte do 4°
            spaceBetween: 20,
            centeredSlides: false,
            initialSlide: 0,
            freeMode: {
              enabled: true,
              sticky: false,
              momentumRatio: 0.4
            }
          }
        },
        on: {
          init: function() {
            // Centraliza o carrossel no início
            let windowWidth = window.innerWidth;
            let swiperWidth = document.querySelector('.featured-collection-swiper').offsetWidth;
            let margin = (windowWidth - swiperWidth) / 2;
            
            document.querySelector('.featured-collection-swiper').style.marginLeft = margin + 'px';
            document.querySelector('.featured-collection-swiper').style.marginRight = margin + 'px';
          },
          resize: function() {
            this.update();
            
            // Ajusta a margem ao redimensionar
            let windowWidth = window.innerWidth;
            let swiperWidth = document.querySelector('.featured-collection-swiper').offsetWidth;
            let margin = (windowWidth - swiperWidth) / 2;
            
            document.querySelector('.featured-collection-swiper').style.marginLeft = margin + 'px';
            document.querySelector('.featured-collection-swiper').style.marginRight = margin + 'px';
          }
        }
      });
    }
  });





