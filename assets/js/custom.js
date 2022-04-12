// Custom Cursor
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    
    TweenMax.set(follower, {
        css: {    
        left: posX - 12,
        top: posY - 12
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$(".link").on("mouseenter", function() {
    cursor.addClass("active");
    follower.addClass("active");
});
$(".link").on("mouseleave", function() {
    cursor.removeClass("active");
    follower.removeClass("active");
});


// Swiper

var slider = new Swiper(".swiper-container", {
    slidesPerView: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true
})
  
slider.on('slideChange', function () {
    TweenMax.to('.slide-text span', .2, {
        y: '-100px',
    })
    TweenMax.to('.slide-number span', .2, {
        x: '-100px',
    })
    TweenMax.to('.swiper-slide-active', .5, {
        scale: .85
    })
})
  
slider.on('slideChangeTransitionEnd', function () {
  
    TweenMax.to('.slide-text span', .2, {
        y: 0,
        delay: .5
    })
    TweenMax.to('.slide-text span', 0, {
        y: '100px',
    })
  
    TweenMax.to('.slide-number span', .2, {
        x: 0,
        delay: .7
    })
    TweenMax.to('.slide-number span', 0, {
        x: '100px',
    })
  
    TweenMax.to('.swiper-slide-active', .5, {
        scale: 1,
        ease: Power4.easeOut,
    })
  
    TweenMax.to('.swiper-slide-active .slide-text', 0, {
        autoAlpha: 1
    })
    TweenMax.to('.swiper-slide-active .slide-number', 0, {
        autoAlpha: 1
    })
  
    TweenMax.to('.swiper-slide-next .slide-text', 0, {
        autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-text', 0, {
        autoAlpha: 0
    })
  
    TweenMax.to('.swiper-slide-next .slide-number', 0, {
        autoAlpha: 0
    })
    TweenMax.to('.swiper-slide-prev .slide-number', 0, {
      autoAlpha: 0
    })
})
  
TweenMax.to('.swiper-slide-next .slide-text', 0, {
    autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-text', 0, {
    autoAlpha: 0
})
  
TweenMax.to('.swiper-slide-next .slide-number', 0, {
    autoAlpha: 0
})
TweenMax.to('.swiper-slide-prev .slide-number', 0, {
    autoAlpha: 0
})
  
TweenMax.to('.swiper-slide', 0, {
    scale: .85,
})

TweenMax.to('.swiper-slide-active', 0, {
    scale: 1,
})