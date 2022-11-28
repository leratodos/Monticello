// scrolll jquery

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

//home slider

$(function() {
    $('.home_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
    })
});

//article
$('.lazy').slick({
    dots: true,
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:  '<button type="button" class="slick-prev"><img src="prev.svg"/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="next.svg"/></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,

          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
});


  //gallery
var galleryData;

$.ajax({
  url: "https://api.pexels.com/v1/search?query=architecture&per_page=70",
  type: 'GET',
  headers: {
        Authorization: "563492ad6f91700001000001a7b83537c25748e5b53b5d7ca2848a88"
    },
  dataType: 'json', 
  success: function(res) {
    galleryData = res.photos;
    addPhotos(5);
  }
});

var lastPhoto = 0;

function addPhotos (quantity) {
    const galleryBlock = document.querySelector('.gallery_grid');

    for (i=lastPhoto; i<lastPhoto+quantity; i++){
        const img = document.createElement('img');
        img.setAttribute('src', galleryData[i].src.medium)
        img.classList.add('gallery_item')
        galleryBlock.append(img)
    }
    lastPhoto += quantity
}

//map

var map = L.map('map').setView([40.65202205057471, -73.95333741482656], 15);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var customMarker = L.icon({
    iconUrl: 'Pin.png',
    
    iconSize:     [106, 106], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [40.670048, -73.935289], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-10, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([40.66171111502724, -73.9537550793342], {icon: customMarker}).addTo(map);



$(document).ready(function() {
  $('#hamburger').click(function() {
      $('.nav_wrapper').toggleClass('open');
      $('#hamburger').toggleClass('is-active');
  })
});