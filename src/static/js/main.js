function openModal(e) {
    iOS && iOS11 && (scrolledPositionBeforeOpenModal = $(document).scrollTop()), $("body, .page-header").css("padding-right", scrollbarWidth), $("body, html").addClass("modal-opened"), "header-menu" == $(e).attr("id") && $(window).width() < 768 ? $(e).addClass("active") : $(e).fadeIn(300)
}

function closeModals() {
    scrollbarWidth > 0 ? $(".popup-block:not(:hidden)").fadeOut(200, function() {
        $("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal)
    }) : ($("body, .page-header").css("padding-right", 0), $("body, html").removeClass("modal-opened"), iOS && iOS11 && $("html, body").scrollTop(scrolledPositionBeforeOpenModal), $(".popup-block:not(:hidden)").fadeOut(200)), $("#header-menu").removeClass("active")
}

function showThanksModal() {
    $(".popup-block:not(:hidden)").fadeOut(), $("#thanks-popup").fadeIn(300)
}
var ua = navigator.userAgent,
    iOS = /iPad|iPhone|iPod/.test(ua),
    iOS11_0 = /OS 11_0_?(\d+)?/.test(ua),
    iOS11_1 = /OS 11_1_?(\d+)?/.test(ua),
    iOS11_2 = /OS 11_2_?(\d+)?/.test(ua),
    iOS11 = iOS11_0 || iOS11_1 || iOS11_2,
    scrolledPositionBeforeOpenModal;
iOS && iOS11 && $("body").addClass("iosBugFixCaret"), /Android/.test(navigator.appVersion) && window.addEventListener("resize", function() {
    "INPUT" != document.activeElement.tagName && "TEXTAREA" != document.activeElement.tagName || document.activeElement.scrollIntoView()
});
var block = $("<div>").css({
        height: "50px",
        width: "50px"
    }),
    indicator = $("<div>").css({
        height: "200px"
    }),
    scrollbarWidth = 0;
$("body").append(block.append(indicator));
var w1 = $("div", block).innerWidth();
block.css("overflow-y", "scroll");
var w2 = $("div", block).innerWidth();

$('.products__item').on('click', function (evt) {
  openModal('#popup');
});

$(block).remove(), scrollbarWidth = w1 - w2, console.log(scrollbarWidth), $('[data-toggle="modal"]').click(function(e) {
    e.preventDefault();
    var t = $(this).attr("data-target");
    openModal(t), $(".slick-slider").slick("setPosition")
}), $('[data-toggle="dismiss"]').click(function(e) {
    e.preventDefault(), closeModals()
}), $(".popup-block__overlay").click(function(e) {
    $(this).children('[data-toggle="dismiss"]');
    e.target != this || closeModals()
}), $('[data-toggle="dismiss"]').click(function(e) {
    e.preventDefault(), closeModals()
}),

$(".nice-select").niceSelect(),

$(window).scroll(function() {
    var e = 200,
        t = 300;
    $(this).scrollTop() > e && !$("body").hasClass("scrolled") ? $("body").addClass("scrolled") : $(this).scrollTop() <= e && $("body").hasClass("scrolled") && $("body").removeClass("scrolled"), $(this).scrollTop() > t && !$("body").hasClass("menu-fixed") ? $("body").addClass("menu-fixed") : $(this).scrollTop() <= t && $("body").hasClass("menu-fixed") && $("body").removeClass("menu-fixed")
}), $("#menu-toggle").click(function(e) {
    $("#header-menu").addClass("active")
}), $("#menu-close").click(function(e) {
    $("#header-menu").removeClass("active")
});

var $things = $(".nav-block");
$things.waypoint(function(e) {
    if ("down" === e) {
        var t = this.element.id;
        $(".page-header__nav a").removeClass("active"), $('[data-target="#' + t + '"]').addClass("active")
    }
}, {
    offset: 151
}), 

$things.waypoint(function(e) {
    if ("up" === e) {
        var t = this.element.id;
        $(window).scrollTop() < $(window).height() - 100 ? $(".page-header__nav a").removeClass("active") : ($(".page-header__nav a").removeClass("active"), $('[data-target="#' + t + '"]').addClass("active"))
    }
}, {
    offset: 149
}), 

$('[data-toggle="anchor"]').click(function(e) {
    e.preventDefault();
    var t = $(this).attr("data-target"),
        o = $(t).offset().top - 90;
    $(window).width() > 767 && (o = $(t).offset().top - 150), $("#header-menu").removeClass("active"), closeModals(), $("html,body").animate({
        scrollTop: o
    }, 400), 
    $(this).parent().addClass("active").siblings().removeClass("active")
}), 

$('[type="tel"]').inputmask({
    mask: "+7 999 999 99 99",
    clearIncomplete: !0,
    autoUnmask: !1,
    removeMaskOnSubmit: !1
}), 

$("form").each(function(e) {
    $(this).validate({
        rules: {
            name: {
                required: !0
            },
            tel: "required",
            email: "required"
        },
        highlight: function(e, t) {
            $(e).parent().addClass(t)
        },
        unhighlight: function(e, t) {
            $(e).parent().removeClass(t)
        },
        messages: {
            name: {
                required: "\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435"
            },
            tel: "\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435",
            email: "\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435"
        }
    })
}), $("form").submit(function(e) {
    var t = $(this);
    if ($(t).valid()) return $.ajax({
        type: "POST",
        url: "/mail.php",
        data: t.serialize(),
        success: function(e) {
            showThanksModal()
        },
        error: function(e, t, o) {
            alert(o)
        }
    }), !1
});

$('.questions__heading').click( function () {
    $(this).toggleClass('in').next().stop().slideToggle(200).parent().toggleClass('active');
});

$('[data-toggle="tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

$('[data-toggle="actors-tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

$('[data-toggle="my-casting-tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

$('[data-toggle="my-casting-card-tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

$('[data-toggle="create-casting-new-tab"]').click(function(e) {
 e.preventDefault();
 
 var thisTarget = $(this).attr('data-target');
 
 if ($(this).parent().is('li')) {
  $(this).parent().addClass('active').siblings().removeClass('active');
 } else {
  $(this).addClass('active').siblings().removeClass('active');
 }
 
 $(thisTarget).addClass('active').siblings().removeClass('active');
});

$('.create-casting-new__arrow-right').on('click', function(e) {
  e.preventDefault();
  var currentTab = $('.create-casting-new__tab-content.active');
  if (!$(currentTab).is(':last-child')) {
  $(currentTab).removeClass('active').next().addClass('active');
  };
});
$('.create-casting-new__arrow-left').on('click', function(e) {
  e.preventDefault();
  var currentTab = $('.create-casting-new__tab-content.active');
  if (!$(currentTab).is(':first-child')) {
  $(currentTab).removeClass('active').prev().addClass('active');
  }
});


$('[data-toggle="form-expand"]').click(function(e) {
  e.preventDefault();

  var thisAdditBlock = $(this).parents('form').find('.form-additional-block');

  $(thisAdditBlock).toggleClass('active');
  $(this).toggleClass('active');
});

$('[data-toggle="actor-expand"]').click(function(e) {
  e.preventDefault();

  var thisAdditBlock = $(this).parents('form').find('.actors-card-additional');

  $(thisAdditBlock).toggleClass('active');
  $(this).toggleClass('active');
});

$('[data-toggle="notific-expand"]').click(function(e) {
  e.preventDefault();
  $('.profile-notifications__container').toggleClass('active');
});

$('[data-toggle="user-expand"]').click(function(e) {
  e.preventDefault();
  $('.page-header__user-menu-block').toggleClass('active');
});

$('.actors-card__photo-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.actors-card__slider'
});

$('.actors-card__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: !0,
    infinite: !0,
    asNavFor: '.actors-card__photo-slider',
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: '<button class="prev actor-photo__arrow"></button>',
    nextArrow: '<button class="next actor-photo__arrow"></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: !0,
            centerMode: !0,
            centerPadding: "5%",
            dots: !0,
            arrows: false
        }
    }]
});

$('.actors-card__video-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: !0,
    infinite: !0,
    arrows: true,
    prevArrow: '<button class="prev actor-video__arrow"></button>',
    nextArrow: '<button class="next actor-video__arrow"></button>',
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: !0,
            centerMode: !0,
            centerPadding: "5%",
            dots: !0,
            arrows: false
        }
    }]
});

$('.button--casting-request').on('click', function (evt) {
  openModal('#popup');
});