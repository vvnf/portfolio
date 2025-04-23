$(document).ready(function() {
  // MODAL
  var modalText = {
    icici: {
      title: 'Icici Home Search',
      tag: 'Real Estate Website',
    //   detail:
    //     'ChowNow Discover is a platform that lets customers discover new local restaurants and provides business owners with tools to convert first time orders into lifelong diners.',
    //   link: 'https://eat.chownow.com/'
    },
    rustomjee: {
      title: 'Rustomjee',
      tag: 'Rustomjee Real Estate',
    //   detail:
    //     'ChowNow is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.',
    //   link: 'https://direct.chownow.com/direct/195/locations/260'
    },
    anarock: {
      title: 'Anarock',
      tag: 'Anarock',
    //   detail:
    //     'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
    //   link: 'http://www.newrelic.com'
    },
    emaar: {
      title: 'Emaar',
      tag: 'Emaar Dubai Real Estate',
    //   detail:
    //     'Roambi provides analytics, reporting, and business intelligence for companies to use on the go. A Wordpress hosted site written in PHP and Javascript with Hubspot Integration.',
    //   link: 'http://www.roambi.com'
    },
    heady: {
      title: 'Heady',
      tag: 'heady E-commerce',
    //   detail:
    //     'Walker Tracker offers goal management, fitness tracking, and team competitions to companies for internal use. A Ruby on Rails and Javascript companion site for the Walker Tracker App. Features visual metrics and gamified progression system.'
    },
    tok: {
      title: 'the TOK App',
      tag: 'The TOK App',
     // detail:
        //  'Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
    //   link: 'http://www.powur.com/with/42'
    },
    gta: {
      title: 'Global Trainers Academy - Portal',
      tag: 'GTA- The Global TRainers Academy',
    //   detail:
    //     'MyStand is a crowd-funding, media sharing website, that has you donating actions instead of money out of your pocket. Single page App built with Node.js on Sails and Angular 2.0. Features social media sharing and large scale crowd-funding.'
    },
    srd: {
      title: 'SRD Motor Training School',
      tag: 'SRD Motor Training School',
    //   detail:
    //     'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
    },
    z_Tube: {
      title: 'Z-Tube Portal',
      tag: 'Z-Tube Portal, Educational Videos',
    //   detail:
    //     'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    },
    z_TubeApp: {
      title: 'Z-Tube Hybrid Mobile App',
      tag: 'Z-Tube Hybrid Mobile App for Andriod and IOS, Educational Videos',
    //   detail:
    //     'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    },
    uindicator: {
      title: 'U-Indicator ',
      tag: 'U-Indicator, Public Transport Portal',
    //   detail:
    //     'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    },
    genie: {
      title: 'Genie App',
      tag: 'Genie Hybrid Mobile App',
    //   detail:
    //     'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
    }




  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('images/projects/" + id + ".jpg') center center/contain",
          "background-repeat": "no-repeat",
          "background-color": "white",
      });
    });
  }
});
