jQuery(function($){
    
    // scrolling
    var $scrollStatus = $('.scroll-status');

    $('.nav').navScroll({
        mobileDropdown: true,
        mobileBreakpoint: 768,
        scrollSpy: true,
        onScrollStart: function() {
            $scrollStatus.show();
            $scrollStatus.text('Started scrolling');
        },
        onScrollEnd: function() {
            $scrollStatus.text('Scrolling ended');
            setTimeout(function() {
            $scrollStatus.fadeOut(200);
            }, 1000);
        }
    });

//    $('.click-me').navScroll({
//        navHeight: 0
//    });
    
    // scroll top button
    var scrollTimeout;

    $('.scroll-top').click(function(){
        $('html, body').animate({scrollTop:0},500);
        return false;
    });

    $(window).scroll(function(){
        clearTimeout(scrollTimeout);
        if($(window).scrollTop()>400){
            scrollTimeout = setTimeout(function(){$('.scroll-top:hidden').fadeIn()},100);
        }
        else{
            scrollTimeout = setTimeout(function(){$('.scroll-top:visible').fadeOut()},100);    
        }
    });

    // mobile menu
    $('.nav').on('click', '.nav-mobile i', function (e) {
        e.preventDefault();
        $('.nav ul').slideToggle('fast');
    });
    
    // main typing text
    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text();
    typingTxt=typingTxt.split("");
    if(typingBool==false){
       typingBool=true; 
       
       var tyInt = setInterval(typing,100);
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){
         $(".typing").append(typingTxt[typingIdx]);
         typingIdx++; 
       } else{ 
         clearInterval(tyInt);
       } 
     }
    
    // about horizon effect
    $(document).ready( function(){
        $('.horizon').horizon();
    });
    
    // skill chart
    $(window).on('scroll', function(){

    var top = $(window).scrollTop();
    var win_h = $(window).height();

    $('.chart').easyPieChart({
            barColor:"#2c94d4",
            scaleColor:false,
            lineCap: "square",
            lineWidth:10,
            size:100,
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
         })
    });
    
    // portfolio isotope filter
    $(window).on('load',function(){
            $obj=$('.grid').isotope();
        });
        
        $('.pf-menu a').on('click',function(e){
          $(this).addClass('active').siblings().removeClass('active');
          var filterName = $(this).data('filter');
          $obj.isotope({
            filter:filterName
          });
          e.preventDefault();
        });
    
    
    // portfolio popup
    var state = 0;

	function pop (idx){
		state = 1;
		$('.modal').fadeIn();
		$('.pop').eq(idx).fadeIn();
//		$('html, body').css({'overflow' : 'hidden'}); //�ㅽ겕濡� �놁븷湲�
	}

	function pop_close (){
		state = 0;
		$('.modal').fadeOut();
		$('.pop').fadeOut();
//		$('html, body').css({'overflow' : 'visible'});
	}

	$('.grid .grid-item').click(function(){
		pop($(this).index());
	});


	$('i').click(function(){
		pop_close($(this).index());
	});
    
    
});