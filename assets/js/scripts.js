$(document).ready(function(){
    //mobile-menu
       $('.mobile-icon').click(function(){
        $('.menu-items').slideToggle()
       });

    //carousel
    $(".mySlider").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });

    //video poster codepen
    $(document).on('click','.js-videoPoster',function(e) {
		// cancel the standard action button
		e.preventDefault();
		var poster = $(this);
		// We are looking for the parent of the closest class
		var wrapper = poster.closest('.js-videoWrapper');
		videoPlay(wrapper);
	  });
	  
	  //reproduce the video while hiding the poster
	  function videoPlay(wrapper) {
		var iframe = wrapper.find('.js-videoIframe');
		// Take the video link from data
		var src = iframe.data('src');
		// hide poster
		wrapper.addClass('videoWrapperActive');
		// we substitute in src parameter from data
		iframe.attr('src',src);
	  }

  });