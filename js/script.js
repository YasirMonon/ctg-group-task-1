(function($) {
      $('.custom-form__input').each(function(){
          $(this).on('blur', function(){
              if($(this).val().trim() != "") {
                  $(this).addClass('has-val');
              }
              else {
                  $(this).removeClass('has-val');
              }
          })    
      })

    $("a[href*=\\#]:not([href=\\#])").click(function()
    {
        if ((location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) && ($(this).hasClass("scroll-js"))) 
        {
        
        var target = $(this.hash),
        headerHeight = 50;
                
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                
        if (target.length) 
        {
            $('.navbar-collapse').collapse('hide');

            $('html,body').animate({
            scrollTop: target.offset().top - headerHeight
            }, 500);
            return false;
        }
        }
    });


    $(".card-btn-js").click(function() {
        const card = $(this).closest(".card");
        const cardHeader = card.find(".card-header");
        const plusminusIcon = card.find(".plusminus-icon");
        const cardBody = card.find(".card-body");
        $(".custom-card").html(cardBody.text()); // copy text from active card (xl screens only)
        const otherCards = card.siblings();
        otherCards.find(".card-header").removeClass("active");
        otherCards.find(".plusminus-icon").removeClass("active");
        if(card.find(".card-body").is(":visible")) {
            cardHeader.removeClass("active");
            plusminusIcon.removeClass("active");
        } else {
            cardHeader.addClass("active");
            plusminusIcon.addClass("active");
        }
    });

    })(jQuery);