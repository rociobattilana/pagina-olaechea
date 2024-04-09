/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function() {
  'use strict'

  // Load demo images from flickr:
  $.ajax({
    url: 'https://api.flickr.com/services/rest/',
    data: {
      format: 'json',
      method: 'flickr.interestingness.getList',
      // eslint-disable-next-line camelcase
      api_key: '7617adae70159d09ba78cfec73c13be3'
    },
    dataType: 'jsonp',
    jsonp: 'jsoncallback'
  }).done(function(result) {
    var carouselLinks = []
    var linksContainer = $('#links')
    var baseUrl
    // Add the demo images as links with thumbnails to the page:
    $.each(result.photos.photo, function(index, photo) {
      baseUrl =
        'https://farm' +
        photo.farm +
        '.static.flickr.com/' +
        photo.server +
        '/' +
        photo.id +
        '_' +
        photo.secret
      $('<a/>')
        .append($('<img>').prop('src', baseUrl + '_s.jpg'))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', photo.title)
        .attr('data-gallery', '')
        .appendTo(linksContainer)
      carouselLinks.push({
        href: baseUrl + '_c.jpg',
        title: photo.title
      })
    })
    // Initialize the Gallery as image carousel:
    // eslint-disable-next-line new-cap
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })

  // Initialize the Gallery as video carousel:
  // eslint-disable-next-line new-cap
  blueimp.Gallery(
    [
      {
        title: 'Pulido de parquet',
        href: 'http://www.pulidosyplastificados.com.ar/videos/1.mp4',
        type: 'video/mp4',
        poster: 'http://www.pulidosyplastificados.com.ar/img/Preview%201er%20video.jpg'
      },

      {
        title: 'Pulido de parquet',
        href: 'http://www.pulidosyplastificados.com.ar/videos/2.mp4',
        type: 'video/mp4',
        poster: 'http://www.pulidosyplastificados.com.ar/img/Preview%202do%20video.jpg'
      },

      {
        title: 'Hidrolaqueado de parquet',
        href: 'http://www.pulidosyplastificados.com.ar/videos/3.mp4',
        type: 'video/mp4',
        poster: 'http://www.pulidosyplastificados.com.ar/img/Preview%203er%20video.jpg'
      },

      {
        title: 'Pulido de piso tarugado',
        href: 'http://www.pulidosyplastificados.com.ar/videos/4.mp4',
        type: 'video/mp4',
        poster: 'http://www.pulidosyplastificados.com.ar/img/Preview%204to%20video.jpg'
      },

      {
        title: 'Hidrolaqueado de piso tarugado',
        href: 'http://www.pulidosyplastificados.com.ar/videos/5.mp4',
        type: 'video/mp4',
        poster: 'http://www.pulidosyplastificados.com.ar/img/Preview%205to%20video.jpg'
      },

      {
        title: 'Máquina circular que pule y aspira, para dar la terminación al pulido',
        href: 'http://www.pulidosyplastificados.com.ar/videos/6.mp4',
        type: 'video/mp4',
        poster: 'http://www.pulidosyplastificados.com.ar/img/Preview%206to%20video.jpg'
      },

      {
        title: 'Instalación de piso flotante VINILO',
        href: 'http://www.pulidosyplastificados.com.ar/videos/7.mp4',
        type: 'video/mp4',
        poster: 'http://www.pulidosyplastificados.com.ar/img/Preview%207mo%20video.jpg'
      },

    ],
    {
      container: '#blueimp-video-carousel',
      carousel: true
    }
  )
})
