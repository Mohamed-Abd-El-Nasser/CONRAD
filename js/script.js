$(document).ready(function(){
    
    $(".aside_navbar i").click(function(){
        
        $(".aside_navbar").toggleClass('act');
        
        
    });
    
    $('.first').click(function(){
        
        
        $('section.folio div:first-of-type p:nth-of-type(1)').show();
        $('section.folio div:first-of-type p:nth-of-type(2)').hide();
        
    });
    
    $(".first1").click(function(){
        
        
        $('section.folio div:first-of-type p:nth-of-type(2)').show();
        $('section.folio div:first-of-type p:nth-of-type(1)').hide();
        
        
    });
    
    
    
    $(window).scroll(function(){
        
       if($(this).scrollTop() > 150){
           
           $('.con').addClass('add');
           $('section.conrad header nav.navbar ul li a').addClass('lin');   
           
       }
        else{
            $('.con').removeClass('add');
              $('section.conrad header nav.navbar ul li a').removeClass('lin');
            
        }
        
        
        
        
    });
    
    
    
    $('[data-fancybox="gallery"]').fancybox();
    
    $('section.solution div.cont div.sol1 p:nth-of-type(1)').css('display','block')
    $('section.solution div.cont div.sol1 h2:nth-of-type(1)').click(function(){
        
        
        $('section.solution div.cont div.sol1 p:nth-of-type(1)').slideToggle().siblings('p').slideUp();
    
        
        
    });
    
    
    
     $('section.solution div.cont div.sol1 h2:nth-of-type(2)').click(function(){
        
        
        $('section.solution div.cont div.sol1 p:nth-of-type(2)').slideToggle().siblings('p').slideUp();
        
        
    
        
    });
    
    
    
     $('section.solution div.cont div.sol1 h2:nth-of-type(3)').click(function(){
        
        
        $('section.solution div.cont div.sol1 p:nth-of-type(3)').slideToggle().siblings('p').slideUp();
        
        
              
         
        
    });
    $('.timer').countTo();
    
    $('section.recent div.center nav a').click(function(){

         $(this).addClass('black').siblings().removeClass('black');


    });
    
    var mixer = mixitup('.images');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
  
   
});
