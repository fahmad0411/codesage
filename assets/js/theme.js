$(document).ready(function(){

    //Toggle Nav for mobile  menu
    $('.open_bar').click(function(){
        $('nav').addClass('active-nav');
        $('.menu-toggle').addClass('closee');
    });
    $('.close_bar').click(function(){
        $('nav').removeClass('active-nav');
        $('.menu-toggle').removeClass('closee');
    });

   //Counter Up
   $('.counter').counterUp({
     time: 1500
   });

    // Progress Bar
  if($('.progress-line').length) {
    $('.progress-line').appear(function(){
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width', percent+'%');
     }, {accY: 0});
    }

    /*---------------------
    Nivo Slider active js
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
     });
    // Brand Active
    $('.slider-carousel').owlCarousel({
         loop: true,
         autoplay: false,
         autoplayTimeout: 6000,
         dots: false,
         dotsEach: false,
         nav:true,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });

    // Brand Active
    $('.brand-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 10000,
         dots: false,
         dotsEach: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 2
             },
             768: {
                 items: 4
             },
             992: {
                 items: 5
             },
             1000: {
                 items: 5
             },
             1199: {
                 items: 5
             },
             1920: {
                 items: 5
            }
        }
    });
    
    // Brand Active
    $('.services_carousel-2').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 10000,
         dots: true,
         dotsEach: true,
         nav:false,
         navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 2
             },
             992: {
                 items: 2
             },
             1000: {
                 items: 2
             },
             1140: {
                 items: 2
             },
             1199: {
                 items: 2
             },
             1920: {
                 items: 3
            }
        }
    });

    // Case Study Active
    $('.case_study_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1000: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    });



    // Service List
    $('.service-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach: true,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


    // Testimonial Carousel Active
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        dotsEach: false,
        nav: false,
        navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1140: {
                items: 3
            },
            1500: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });






    // Testimonial Carousel Active
            $('.testimonial-carousel-2').owlCarousel({
                 loop: true,
                 autoplay: true,
                 autoplayTimeout: 10000,
                 dots: true,
                 dotsEach: false,
                 nav: false,
                 navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
                 responsive: {
                     0: {
                         items: 1
                     },
                     768: {
                         items: 2
                     },
                     992: {
                         items: 2
                     },
                     1000: {
                         items: 2
                     },
                     1140: {
                         items: 2
                     },
                     1500: {
                         items: 2
                     },
                     1920: {
                         items: 2
                    }
                }
            }); 

     
    // Testimonial Carousel Active
            $('.testimonial-carousel-4').owlCarousel({
                 loop: true,
                 autoplay: true,
                 autoplayTimeout: 10000,
                 dots: true,
                 dotsEach: true,
                 nav: false,
                 navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
                 responsive: {
                     0: {
                         items: 1
                     },
                     768: {
                         items: 1
                     },
                     992: {
                         items: 1
                     },
                     1000: {
                         items: 1
                     },
                     1140: {
                         items: 1
                     },
                     1500: {
                         items: 1
                     },
                     1920: {
                         items: 1
                    }
                }
            });
            
    // Testimonial Carousel Active
                $('.testimonial-carousel-inner').owlCarousel({
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 10000,
                    dots: true,
                    dotsEach: true,
                    nav: false,
                    navText: ["<i class='fa fa-long-arrow-left''></i>", "<i class='fa fa-long-arrow-right''></i>"],
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 1
                        },
                        1000: {
                            items: 1
                        },
                        1140: {
                            items: 1
                        },
                        1500: {
                            items: 1
                        },
                        1920: {
                            items: 1
                        }
                    }
                }); 
                
    // Blog slider
            $('.blog-carousel').owlCarousel({
                 loop:false,
                 autoplay: false,
                 autoplayTimeout: 10000,
                 dots: true,
                 dotsEach: false,
                 nav: true,
                 navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
                 responsive: {
                     0: {
                         items: 1
                     },
                     768: {
                         items: 2
                     },
                     992: {
                         items: 3
                     },
                     1000: {
                         items: 3
                     },
                     1140: {
                         items: 3
                     },
                     1500: {
                         items: 3
                     },
                     1920: {
                         items: 3
                     }
                }
            });
            
    // Project List
        $('.case-study_carousel').owlCarousel({
           loop: true,
           autoplay: true,
           autoplayTimeout: 10000,
           dots: true,
           dotsEach: true,
           nav: false,
           center: true,
           navText: ["<i class='fas fa-long-arrow-alt-left''></i>", "<i class='fas fa-long-arrow-alt-right''></i>"],
           responsive: {
               0: {
                   items: 1
               },
               768: {
                   items: 2
               },
               992: {
                   items: 3
               },
               1000: {
                   items: 4
               },
               1500: {
                   items: 5
               },
               1920: {
                   items: 5
               }
            }
       });

              
    //Tabs
    $(function(){
        $("#tabs").tabs();
    });

    $(function() {
            $( "#accordion" ).accordion({
              collapsible: true
            });
    });
    $(function() {
            $( "#accordion-2" ).accordion({
              collapsible: true
            });
    });

    
    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        }

    });
                
    // Venubox
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true
    });
    

    var mySwiper = new Swiper('.swiper-container-one', {
        
        loop: true,
        effect: 'fade',
        autoplay: {
                delay: 8000,
                },
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });



        // Calender Jquery
		var curDate = (new Date()).getDate();
        var curMonth = (new Date()).getMonth();
        var curYear = (new Date()).getFullYear();
        var startDay = (new Date(curYear, curMonth, 1)).getDay();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var noofdays = ["31", "29", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
        var prevMonth = noofdays[curMonth - 1];
        if (curMonth == 11) {
          prevMonth = noofdays[0];
        } else if (curMonth == 0) {
          prevMonth = noofdays[11];
        }
        var totalDays = noofdays[curMonth];
        var counter = 0;
        var precounter = prevMonth - (startDay - 1);
        var rightbox = 6;
        var flag = true;

        jQuery('.curr-month b').text(months[curMonth]);
        for (var i = 0; i < 42; i++) {
          if (i >= startDay) {
            counter++;
            if (counter > totalDays) {
              counter = 1;
              flag = false;
            }
            if (flag == true) {
              jQuery('.all-date ul').append('<li class="monthdate">' + counter + '</li>');
            } else {
              jQuery('.all-date ul').append('<li style="opacity:.8">' + counter + '</li>');
            }
          } else {
            jQuery('.all-date ul').append('<li style="opacity:.8">' + precounter + '</li>');
            precounter++;
          }

          if (i == rightbox) {
            jQuery(jQuery('.all-date ul li')[rightbox]).addClass("b-right");
            rightbox = rightbox + 7;
          }

          if (i > 34) {
            jQuery(jQuery('.all-date ul li')[i]).addClass("b-bottom");
          }

          if ((jQuery(jQuery('.all-date ul li')[i]).text() == curDate) && (jQuery(jQuery('.all-date ul li')[i]).css('opacity') == 1)) {
            jQuery(jQuery('.all-date ul li')[i]).css({
              "background-color": "#02548b",
              "color": "#fff"
            });
          }
        }

        // to top Jquery
        $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('#to-top').fadeIn();
            } else{
                $('#to-top').fadeOut();
            }
        });

        $("#to-top").click(function(){
            $('html , body').animate({scrollTop :0},800);
        });

        //wow
        new WOW().init();

    });
   
    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
      var that = this;
      var delta = 300 - Math.random() * 100;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
    
    
    
