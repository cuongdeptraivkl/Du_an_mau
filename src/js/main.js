$('.content_arr').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 678,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // ----------top products ----------//
  $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            
            $('.filter').show('1000');
        }
        else
        {
          
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

//----- chi tiết spo--------------//
document.addEventListener("DOMContentLoaded", function(event) {


  const cartButtons = document.querySelectorAll('.cart-button');
  
  cartButtons.forEach(button => {
  
  button.addEventListener('click',cartClick);
  
  });
  
  function cartClick(){
  let button =this;
  button.classList.add('clicked');
  }
  
  
  
  });